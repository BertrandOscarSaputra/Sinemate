# Sinemate 🎬

## 📱 Deskripsi Singkat  
Sinemate adalah aplikasi mobile untuk menonton film atau video bersama teman secara real‑time (watch‑party) menggunakan integrasi dengan YouTube. Pengguna dapat membuat ruang tontonan bersama, mengundang teman, dan menonton video secara sinkron. Fitur utamanya mencakup playback bersamaan, chat atau reaksi, dan pengalaman sosial menonton dari perangkat mobile.

---

## 🧩 Fitur Utama  
- 📤 Buat atau gabung ke ruang tontonan bersama (watch‑party).  
- ▶️ Sinkronisasi video YouTube di banyak perangkat secara real‑time.  
- 🗣️ Chat atau reaksi cepat selama menonton bersama.  
- 🎛️ Kontrol playback bersama (play, pause, seek) oleh host atau moderator.  
- 💡 UI mobile friendly, mendukung pengalaman menonton sosial dari ponsel atau tablet.

---

## 🗂️ Struktur Proyek  

| File / Folder         | Deskripsi                                                                 |
|------------------------|---------------------------------------------------------------------------|
| `android/` / `ios/`   | Direktori proyek mobile (misalnya React Native, Flutter, atau lainnya)   |
| `src/`                 | Kode sumber aplikasi (komponen UI, logika real‑time, integrasi YouTube) |
| `services/`            | Layanan backend atau sinkronisasi real‑time (misalnya socket, API)        |
| `assets/`              | Gambar, ikon, logo serta aset tampilan aplikasi                          |
| `README.md`            | Dokumentasi proyek ini                                                  |
| `package.json` / `pubspec.yaml` | File konfigurasi dependensi proyek mobile                        |

---

## ⚙️ Teknologi yang Digunakan  
- **React Native** atau **Flutter** (tergantung stack) – untuk aplikasi mobile.  
- **YouTube API / Player SDK** – untuk embed dan kontrol video YouTube.  
- **WebSocket / Socket.io / Firebase Realtime Database** – untuk sinkronisasi playback dan chat.  
- **Node.js / Firebase Functions** – untuk backend real‑time jika diperlukan.  
- **TailwindCSS / Styled Components** – untuk styling UI mobile (jika React Native).  

---

## 🧠 Alur Kerja Aplikasi  
1. Pengguna membuka aplikasi dan membuat atau bergabung ke ruang watch‑party.  
2. Host memilih video YouTube yang akan ditonton bersama.  
3. Video dimuat di semua perangkat peserta melalui embed YouTube player.  
4. Host mengontrol play/pause/seek, dan semua peserta mengikuti secara sinkron.  
5. Peserta dapat mengirim chat atau reaksi real‑time selama menonton.  
6. Sesi selesai — pengguna dapat keluar atau membuat ruang baru.

---

## 🚀 Cara Menjalankan Proyek (Contoh React Native)  

1. Clone repositori:  
   ```bash
   git clone https://github.com/BertrandOscarSaputra/Sinemate.git
   cd Sinemate
   ```

2. Install dependensi:  
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan aplikasi:  
   ```bash
   npm run android
   # atau
   npm run ios
   ```

4. (Opsional) Jalankan backend lokal atau konfigurasi realtime service sesuai dokumentasi.

---

## 💡 Catatan  
- Pastikan kamu memiliki **kunci API YouTube** jika diperlukan untuk embed dan kontrol video.  
- Jika menggunakan backend real‑time, pastikan setup environment variables (misalnya apiKey, socketUrl).  
- Pastikan versi platform mobile (Android/iOS) kompatibel dengan dependencies aplikasi.

---
