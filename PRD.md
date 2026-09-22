*Status: disetujui*

# PRD: Reels Studio — Pembantu Produksi Konten Video Pendek

## Tujuan
Membantu kreator konten menghasilkan ide dan menyusun skrip video pendek (reels Instagram) secara cepat dan terstruktur, sehingga proses produksi konten jadi lebih efisien dan konsisten.

## Arah visual (dari INSPO)
Dark-mode modern dengan aksen pink→ungu gradasi, font Inter (grotesk-sans), gaya kreatif & energik. Referensi: mux-com, milanote-com.

## Fitur
- [x] **Generator ide konten** — pilih niche/kategori + minat, klik "Buat Ide" untuk menghasilkan ide topik reels acak; boleh simpan ide ke daftar.
- [x] **Template skrip reels** — isi topik, target audiens, dan tujuan; hasilkan struktur skrip (Hook → Isi → CTA) lengkap dengan estimasi durasi per bagian dan total.
- [x] **Daftar ide tersimpan** — simpan, lihat, hapus ide hasil generator (persist di localStorage).
- [x] **Panduan durasi & tips** — panel referensi durasi ideal per segmen reels + tips hook/CTA yang bisa disalin.

## Tahap pengerjaan
- [x] Tahap 1: Landasan statis — layout shell + routing + styling dark-mode + generator ide konten dengan data contoh → preview
- [x] Tahap 2: Template skrip reels — form input topik/audiens/tujuan, hasil skrip terstruktur + estimasi durasi, tombol salin
- [x] Tahap 3: Daftar ide tersimpan — persist localStorage, simpan/hapus ide dari generator, panel panduan durasi & tips

## Data
localStorage (default) — key `reelsStudio.ideas` (array ide tersimpan).

## File
- `index.html` — struktur halaman + Tailwind CDN
- `src/main.js` — seluruh logika aplikasi (generator ide, skrip, daftar, persistensi)
- `src/style.css` — variabel token desain + styling tambahan

## Kriteria selesai
- Preview menampilkan halaman generator ide yang bisa menghasilkan ide saat tombol diklik.
- Form skrip menghasilkan struktur Hook/Isi/CTA dengan estimasi durasi.
- Ide tersimpan muncul di daftar dan bertahan setelah refresh (localStorage).
