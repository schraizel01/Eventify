# Eventify - Academic Event Management Platform

Eventify adalah platform manajemen acara akademik untuk mahasiswa dan penyelenggara. Platform ini memungkinkan peserta untuk mendaftar acara akademik dengan mudah, dan memungkinkan penyelenggara (admin) untuk mengelola event serta pesertanya secara efisien.

## Tech Stack
- **Frontend**: React (Vite), React Router v6, Tailwind CSS, Zustand, Axios, React Hot Toast, Lucide React
- **Backend**: Node.js, Express.js
- **Database & Auth**: Supabase (PostgreSQL, Supabase Auth, Supabase Storage)

## Fitur Utama
- **Public**:
  - Melihat daftar event (Seminar & Workshop)
  - Mencari dan memfilter event
  - Mendaftar event sebagai tamu (tanpa akun)
  - Melihat riwayat pendaftaran menggunakan email
- **Admin**:
  - Dashboard statistik event & peserta
  - Manajemen Event (CRUD)
  - Manajemen Peserta (Filter & Export ke CSV)
  - Autentikasi aman dengan Supabase Auth

## Cara Setup Project

### 1. Setup Supabase
1. Buat project baru di [Supabase](https://supabase.com/).
2. Buka menu **SQL Editor** di dashboard Supabase Anda.
3. Jalankan script SQL yang terdapat pada file `supabase_setup.sql` yang telah di-generate sebelumnya untuk membuat tabel, RLS policies, functions, dan storage bucket.
4. Pergi ke menu **Authentication > Users** dan tambahkan user baru. Setelah user dibuat, masukkan data user tersebut ke tabel `profiles` secara manual dengan role `admin` (atau Anda dapat menjalankan query INSERT untuk user ID tersebut).
5. Dapatkan kredensial Supabase (Project URL, anon key, dan service role key) di menu **Project Settings > API**.

### 2. Setup Backend
1. Buka terminal dan arahkan ke folder `backend`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Buat file `.env` di dalam folder `backend` jika belum ada (atau sesuaikan file `.env` yang sudah ada):
   ```env
   PORT=5000
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   FRONTEND_URL=http://localhost:5173
   ```
4. Jalankan backend server:
   ```bash
   npm run dev
   # (atau npm start)
   ```
   Backend akan berjalan di `http://localhost:5000`.

### 3. Setup Frontend
1. Buka terminal baru dan arahkan ke folder `frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Buat file `.env` di dalam folder `frontend` jika belum ada (atau sesuaikan file `.env` yang sudah ada):
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_API_BASE_URL=http://localhost:5000/api
   ```
4. Jalankan frontend dev server:
   ```bash
   npm run dev
   ```
   Frontend akan berjalan di `http://localhost:5173`.

### 4. Menjalankan Aplikasi
- Akses aplikasi public di: `http://localhost:5173`
- Akses admin portal di: `http://localhost:5173/login`
- Login menggunakan kredensial admin yang telah dibuat di Supabase.

---
**Catatan untuk Development:**
- Pastikan backend berjalan bersamaan dengan frontend agar semua API dapat diakses dengan baik.
- Export CSV peserta membutuhkan fitur browser Blob untuk menyimpan file lokal.
