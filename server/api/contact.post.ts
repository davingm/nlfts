import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  fullName: z.string().min(1, 'Nama lengkap wajib diisi'),
  company: z.string().optional(),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().optional(),
  turnstileToken: z.string().min(1, 'Token Turnstile wajib disertakan')
})

interface TurnstileVerifyResponse {
  'success': boolean
  'error-codes'?: string[]
  'challenge_ts'?: string
  'hostname'?: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const secretKey = config.turnstileSecretKey
  const resendApiKey = config.resendApiKey

  if (!secretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error: Cloudflare Turnstile SECRET_KEY is missing.'
    })
  }

  if (!resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error: RESEND_API_KEY is missing.'
    })
  }

  // 1. Parse and validate request body
  const body = await readBody(event)
  const parseResult = contactSchema.safeParse(body)

  if (!parseResult.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Data formulir tidak valid',
      data: parseResult.error.format()
    })
  }

  const { fullName, company, email, phone, interest, message, turnstileToken } = parseResult.data

  // 2. Verify Cloudflare Turnstile token
  const verification = await $fetch<TurnstileVerifyResponse>('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: {
      secret: secretKey,
      response: turnstileToken,
      remoteip: getRequestIP(event) || undefined
    }
  })

  if (!verification.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Verifikasi Turnstile gagal. Silakan coba lagi.',
      data: verification['error-codes']
    })
  }

  // 3. Send email using Resend SDK
  const resend = new Resend(resendApiKey)
  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'team@nlfts.dev',
    replyTo: email,
    subject: `Pesan Baru dari ${fullName} — NLFTs Contact Form`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #f97316; padding-bottom: 10px; margin-top: 0;">Pesan Kontak Baru</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #4b5563;">Nama Lengkap:</td>
            <td style="padding: 8px 0; color: #1f2937;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Perusahaan:</td>
            <td style="padding: 8px 0; color: #1f2937;">${company || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
            <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #ea580c; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">No. Telepon:</td>
            <td style="padding: 8px 0; color: #1f2937;">${phone || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Minat Proyek:</td>
            <td style="padding: 8px 0; color: #1f2937;">
              <span style="background-color: #ffedd5; color: #ea580c; padding: 2px 8px; border-radius: 9999px; font-size: 13px; font-weight: 500;">
                ${interest}
              </span>
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 25px;">
          <h4 style="margin-bottom: 8px; color: #4b5563;">Detail Pesan:</h4>
          <div style="white-space: pre-line; background-color: #f4f4f5; padding: 15px; border-radius: 6px; border: 1px solid #e4e4e7; color: #27272a; line-height: 1.5; font-size: 14px;">
            ${message || 'Tidak ada pesan tambahan.'}
          </div>
        </div>
        
        <p style="font-size: 12px; color: #9ca3af; margin-top: 30px; border-top: 1px solid #e4e4e7; padding-top: 15px; text-align: center;">
          Dikirim via formulir kontak NLFTs dengan proteksi anti-spam Cloudflare Turnstile.
        </p>
      </div>
    `
  })

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Gagal mengirim email: ${error.message}`
    })
  }

  return {
    success: true,
    message: 'Email berhasil dikirim.'
  }
})
