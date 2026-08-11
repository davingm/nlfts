
[ INI BUKAN FILE BERSANGKUTAN DENGAN FRAWORK INI ABAIKAN SAJA ]

# Tugas 1 — Perancangan Sistem Inventori

**Nama Lengkap :** _____________________
**Kelas :** _____________________

---

## 1. Flowmap Berjalan (Sistem Manual/Saat Ini)

Berdasarkan ilustrasi yang diberikan, proses saat ini masih dilakukan secara manual: petugas gudang mencatat barang masuk/keluar dengan kartu stok, dan karyawan mengajukan permintaan barang menggunakan formulir kertas.

```mermaid
flowchart TD
    subgraph SUP["SUPPLIER"]
        A1[Menyiapkan barang pesanan]
    end

    subgraph PG["PETUGAS GUDANG"]
        B1[Menerima barang dari supplier]
        B2[Mengecek & mencocokkan barang dengan nota/PO]
        B3[Mencatat barang masuk di kartu stok manual]
        B4[Menyimpan barang di rak menggunakan forklift]
        B5[Menerima formulir permintaan barang dari karyawan]
        B6[Mengecek ketersediaan stok secara manual di kartu stok]
        B7[Mengambil barang dari rak penyimpanan]
        B8[Menyerahkan barang ke karyawan]
        B9[Meminta tanda tangan bukti terima internal]
        B10[Mencatat barang keluar di kartu stok manual]
    end

    subgraph KAR["KARYAWAN / USER"]
        C1[Mengisi formulir permintaan barang secara manual]
        C2[Menyerahkan formulir ke petugas gudang]
        C3[Menerima barang]
        C4[Menandatangani bukti terima internal]
    end

    A1 --> B1 --> B2 --> B3 --> B4
    C1 --> C2 --> B5 --> B6 --> B7 --> B8 --> C3
    C3 --> C4 --> B9 --> B10
```

**Kelemahan sistem berjalan:** pencatatan rawan hilang/rusak, rekap stok memakan waktu, tidak ada laporan real-time, dan rawan human error saat pencocokan stok.

---

## 2. Flowmap yang Diajukan (Sistem Terkomputerisasi)

Flowmap usulan menambahkan **sistem inventori terkomputerisasi** sebagai pusat pencatatan data barang, stok, dan transaksi, sehingga proses pencatatan manual digantikan input & validasi sistem.

```mermaid
flowchart TD
    subgraph SUP["SUPPLIER"]
        A1[Mengirim barang pesanan]
    end

    subgraph SIS["SISTEM INVENTORI"]
        S1[(Database Barang & Stok)]
    end

    subgraph PG["PETUGAS GUDANG"]
        B1[Menerima & memeriksa fisik barang]
        B2[Input data barang masuk ke sistem]
        B3[Menyimpan barang di rak sesuai lokasi]
        B5[Menerima notifikasi permintaan barang]
        B6[Verifikasi stok melalui sistem]
        B7[Approve/tolak permintaan pada sistem]
        B8[Mengambil barang dari rak]
        B9[Serah terima barang & cetak bukti terima]
    end

    subgraph KAR["KARYAWAN / USER"]
        C1[Login ke sistem]
        C2[Mengajukan permintaan barang via sistem]
        C3[Menerima notifikasi status permintaan]
        C4[Menerima barang]
        C5[Konfirmasi/tanda tangan digital bukti terima]
    end

    A1 --> B1 --> B2 --> S1
    S1 -.update stok masuk.-> B3
    C1 --> C2 --> S1
    S1 -.notifikasi.-> B5 --> B6 --> B7
    B7 -->|disetujui| B8 --> B9 --> C4 --> C5 --> S1
    B7 -.notifikasi status.-> C3
    S1 -.update stok keluar.-> S1
```

**Manfaat sistem usulan:** stok ter-update otomatis dan real-time, pengajuan permintaan lebih cepat & terlacak (ada status), laporan bisa dicetak kapan saja, dan mengurangi human error pencatatan manual.

---

## 3. Use Case Diagram

Aktor yang teridentifikasi: **Supplier**, **Petugas Gudang**, **Karyawan (User)**, dan **Admin/Manajer Gudang** (untuk pelaporan).

```mermaid
flowchart LR
    Supplier(["Supplier"])
    Karyawan(["Karyawan / User"])
    Petugas(["Petugas Gudang"])
    Admin(["Admin / Manajer Gudang"])

    subgraph SISTEM["Sistem Inventori"]
        UC1(("Login"))
        UC2(("Kelola Data Barang Masuk"))
        UC3(("Kelola Penyimpanan Barang"))
        UC4(("Ajukan Permintaan Barang"))
        UC5(("Verifikasi & Approve Permintaan"))
        UC6(("Proses Pengambilan Barang"))
        UC7(("Cetak Bukti Terima"))
        UC8(("Kelola Data Stok Barang"))
        UC9(("Kelola Laporan Inventori"))
    end

    Supplier --> UC2
    Petugas --> UC1
    Petugas --> UC2
    Petugas --> UC3
    Petugas --> UC5
    Petugas --> UC6
    Petugas --> UC7
    Petugas --> UC8
    Karyawan --> UC1
    Karyawan --> UC4
    Admin --> UC8
    Admin --> UC9

    UC5 -. include .-> UC1
    UC4 -. include .-> UC1
    UC6 -. extend .-> UC7
```

---

## 4. Usecase Scenario

**a. Usecase: Ajukan Permintaan Barang**

| Item | Keterangan |
|---|---|
| Nama Usecase | Ajukan Permintaan Barang |
| Aktor | Karyawan (User) |
| Deskripsi | Karyawan mengajukan permintaan barang kepada petugas gudang melalui sistem |
| Pre-condition | Karyawan sudah login ke sistem |
| Main Flow | 1. Karyawan memilih menu "Permintaan Barang"<br>2. Karyawan memilih barang & jumlah yang dibutuhkan<br>3. Sistem menampilkan konfirmasi<br>4. Karyawan mengirim permintaan<br>5. Sistem menyimpan data & mengirim notifikasi ke Petugas Gudang |
| Alternate Flow | Jika stok tidak mencukupi, sistem menampilkan peringatan sebelum permintaan dikirim |
| Post-condition | Data permintaan tersimpan dengan status "Menunggu Persetujuan" |

**b. Usecase: Kelola Data Barang Masuk**

| Item | Keterangan |
|---|---|
| Nama Usecase | Kelola Data Barang Masuk |
| Aktor | Petugas Gudang |
| Deskripsi | Petugas gudang mencatat barang yang diterima dari supplier ke dalam sistem |
| Pre-condition | Barang fisik telah tiba dan diperiksa kesesuaiannya |
| Main Flow | 1. Petugas login ke sistem<br>2. Memilih menu "Penerimaan Barang"<br>3. Memilih supplier & barang yang diterima<br>4. Menginput jumlah barang<br>5. Sistem memperbarui stok secara otomatis |
| Alternate Flow | Jika barang tidak sesuai pesanan, petugas mencatat catatan retur |
| Post-condition | Stok barang bertambah dan tercatat pada sistem |

---

## 5. Activity Diagram

Activity diagram berikut menggambarkan alur proses permintaan barang oleh karyawan hingga barang diterima.

```mermaid
flowchart TD
    Start([Mulai]) --> A[Karyawan login ke sistem]
    A --> B[Karyawan mengisi formulir permintaan barang]
    B --> C[Sistem mengirim notifikasi ke Petugas Gudang]
    C --> D{Stok tersedia?}
    D -- Tidak --> E[Sistem menolak permintaan]
    E --> F[Notifikasi ke Karyawan: stok tidak tersedia]
    F --> End1([Selesai])
    D -- Ya --> G[Petugas Gudang meng-approve permintaan]
    G --> H[Petugas Gudang mengambil barang dari rak]
    H --> I[Petugas Gudang menyerahkan barang ke Karyawan]
    I --> J[Karyawan menandatangani/konfirmasi bukti terima]
    J --> K[Sistem memperbarui stok barang]
    K --> End2([Selesai])
```

---

## 6. ERD (Entity Relationship Diagram)

```mermaid
erDiagram
    SUPPLIER ||--o{ PENERIMAAN : mengirim
    PETUGAS_GUDANG ||--o{ PENERIMAAN : memproses
    PENERIMAAN ||--|{ DETAIL_PENERIMAAN : memiliki
    BARANG ||--o{ DETAIL_PENERIMAAN : tercatat
    BARANG }o--|| KATEGORI : termasuk
    BARANG }o--|| RAK : disimpan_di
    KARYAWAN ||--o{ PERMINTAAN : mengajukan
    PETUGAS_GUDANG ||--o{ PERMINTAAN : memproses
    PERMINTAAN ||--|{ DETAIL_PERMINTAAN : memiliki
    BARANG ||--o{ DETAIL_PERMINTAAN : diminta

    SUPPLIER {
        int id_supplier PK
        string nama_supplier
        string alamat
        string no_telp
    }
    BARANG {
        int id_barang PK
        string nama_barang
        int id_kategori FK
        int id_rak FK
        int stok
        string satuan
    }
    KATEGORI {
        int id_kategori PK
        string nama_kategori
    }
    RAK {
        int id_rak PK
        string kode_rak
        string lokasi
    }
    PETUGAS_GUDANG {
        int id_petugas PK
        string nama_petugas
        string username
        string password
    }
    KARYAWAN {
        int id_karyawan PK
        string nama_karyawan
        string divisi
    }
    PENERIMAAN {
        int id_penerimaan PK
        int id_supplier FK
        int id_petugas FK
        date tanggal_terima
    }
    DETAIL_PENERIMAAN {
        int id_detail_terima PK
        int id_penerimaan FK
        int id_barang FK
        int jumlah
    }
    PERMINTAAN {
        int id_permintaan PK
        int id_karyawan FK
        int id_petugas FK
        date tanggal_minta
        string status
    }
    DETAIL_PERMINTAAN {
        int id_detail_minta PK
        int id_permintaan FK
        int id_barang FK
        int jumlah
    }
```


# Singkat Version

```mermaid
erDiagram
    SUPPLIER ||--o{ PENERIMAAN : mengirim
    PETUGAS_GUDANG ||--o{ PENERIMAAN : memproses

    PENERIMAAN ||--|{ DETAIL_PENERIMAAN : memiliki
    BARANG ||--o{ DETAIL_PENERIMAAN : tercatat

    KATEGORI ||--o{ BARANG : memiliki
    RAK ||--o{ BARANG : menyimpan

    KARYAWAN ||--o{ PERMINTAAN : mengajukan
    PETUGAS_GUDANG ||--o{ PERMINTAAN : memproses

    PERMINTAAN ||--|{ DETAIL_PERMINTAAN : memiliki
    BARANG ||--o{ DETAIL_PERMINTAAN : diminta


    SUPPLIER {
        int id_supplier
    }

    PETUGAS_GUDANG {
        int id_petugas
    }

    PENERIMAAN {
        int id_penerimaan
    }

    DETAIL_PENERIMAAN {
        int id_detail_terima
    }

    BARANG {
        int id_barang
    }

    KATEGORI {
        int id_kategori
    }

    RAK {
        int id_rak
    }

    KARYAWAN {
        int id_karyawan
    }

    PERMINTAAN {
        int id_permintaan
    }

    DETAIL_PERMINTAAN {
        int id_detail_minta
    }
```

---

## 7. Skema Database

**Tabel: supplier**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_supplier | INT | PK, AUTO_INCREMENT |
| nama_supplier | VARCHAR(100) | |
| alamat | VARCHAR(255) | |
| no_telp | VARCHAR(20) | |

**Tabel: kategori**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_kategori | INT | PK, AUTO_INCREMENT |
| nama_kategori | VARCHAR(50) | |

**Tabel: rak**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_rak | INT | PK, AUTO_INCREMENT |
| kode_rak | VARCHAR(20) | |
| lokasi | VARCHAR(100) | |

**Tabel: barang**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_barang | INT | PK, AUTO_INCREMENT |
| nama_barang | VARCHAR(100) | |
| id_kategori | INT | FK → kategori.id_kategori |
| id_rak | INT | FK → rak.id_rak |
| stok | INT | |
| satuan | VARCHAR(20) | |

**Tabel: petugas_gudang**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_petugas | INT | PK, AUTO_INCREMENT |
| nama_petugas | VARCHAR(100) | |
| username | VARCHAR(50) | UNIQUE |
| password | VARCHAR(255) | (hash) |

**Tabel: karyawan**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_karyawan | INT | PK, AUTO_INCREMENT |
| nama_karyawan | VARCHAR(100) | |
| divisi | VARCHAR(50) | |

**Tabel: penerimaan** (transaksi barang masuk)
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_penerimaan | INT | PK, AUTO_INCREMENT |
| id_supplier | INT | FK → supplier.id_supplier |
| id_petugas | INT | FK → petugas_gudang.id_petugas |
| tanggal_terima | DATE | |

**Tabel: detail_penerimaan**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_detail_terima | INT | PK, AUTO_INCREMENT |
| id_penerimaan | INT | FK → penerimaan.id_penerimaan |
| id_barang | INT | FK → barang.id_barang |
| jumlah | INT | |

**Tabel: permintaan** (transaksi barang keluar)
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_permintaan | INT | PK, AUTO_INCREMENT |
| id_karyawan | INT | FK → karyawan.id_karyawan |
| id_petugas | INT | FK → petugas_gudang.id_petugas |
| tanggal_minta | DATE | |
| status | ENUM('Menunggu','Disetujui','Ditolak','Selesai') | |

**Tabel: detail_permintaan**
| Field | Tipe Data | Keterangan |
|---|---|---|
| id_detail_minta | INT | PK, AUTO_INCREMENT |
| id_permintaan | INT | FK → permintaan.id_permintaan |
| id_barang | INT | FK → barang.id_barang |
| jumlah | INT | |

---

*Catatan: seluruh jawaban di atas merupakan hasil analisis dan perancangan berdasarkan skenario pada gambar referensi tugas — silakan disesuaikan dengan ketentuan/format dari dosen/pengajar masing-masing.*