*Status: disetujui*

# DESIGN: Reels Studio — Pembantu Produksi Konten Video Pendek

## Token inti (bisa diganti)
- **Warna dominan:** `#111827` (ink/bg gelap) · `#0f172a` (surface) · `#f9fafb` (teks) · `#6b7280` (muted) · `#ec4899` (pink aksen)
- **Aksen:** `#ec4899` (pink) + `#8b5cf6` (ungu) gradasi
- **Font judul:** Inter (grotesk-sans) · **Font isi:** Inter
- **Mood:** kreatif, energik, modern (dark mode)
- **Referensi INSPO:** mux-com (Split Studio, grotesk-sans), milanote-com (dark + aksen hidup)

## Token lengkap
Diadaptasi dari referensi INSPO (mux-com, milanote-com) — diubah ke mode gelap agar cocok dengan konteks kreator konten video:

### Warna
| Hex | Role |
|---|---|
| `#111827` | background utama (ink) |
| `#0f172a` | surface / kartu |
| `#1f2937` | surface raised / border |
| `#f9fafb` | teks utama |
| `#9ca3af` | teks sekunder (muted) |
| `#ec4899` | aksen pink (primary) |
| `#8b5cf6` | aksen ungu (gradasi) |
| `#22c55e` | status sukses / selesai |
| `#f59e0b` | status progres / peringatan |

### Tipografi
| Role | Family | Size | Weight |
|---|---|---|---|
| h1 | Inter | 2.5rem | 800 |
| h2 | Inter | 1.5rem | 700 |
| h3 | Inter | 1.125rem | 700 |
| body | Inter | 1rem | 400 |
| caption | Inter | 0.875rem | 500 |

### Spacing scale
`4px` · `8px` · `16px` · `24px` · `32px` · `48px` · `64px`

### Border radius
`8px` · `12px` · `16px` · `9999px` (pill)

### Container
Maks `1024px`, padding `16px` mobile → `32px` desktop.

## Catatan
Arah visual: dark-mode modern dengan aksen pink→ungu gradasi, gaya grotesk-sans (Inter) yang bersih dan energik — cocok untuk kreator konten. "Adapt, don't copy": token diadaptasi dari referensi ke konteks aplikasi utilitas kreator. Komponen kunci: kartu ide (bento-style grid), panel skrip dengan timer, badge status, input generator.
