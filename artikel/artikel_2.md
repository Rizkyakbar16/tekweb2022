### Cara Membuat Website di Vercel App

---

Putri Mahesa - Republika.id
Senin, 30 Aug 2021, 17:36 WIB

[Pergi ke postingan asli.](https://retizen.republika.co.id/posts/12953/cara-membuat-website-di-vercel-app)

Cara Membuat Website di Vercel App - Memiliki website bukanlah sesuatu yang sulit lagi saat ini. Setiap orang bisa memiliki websitenya masing-masing. Apalagi dengan beberapa platform yang menyediakan hosting gratis tanpa dipungut biaya sepeserpun, bahkan kita diberikan domain yang dapat digunakan untuk mengakses website tersebut.

Static Website
Sebelum kita masuk ke bagian panduan, kamu perlu mengetahui mengenai static website atau website statis. Kebanyakan hosting gratis hanya menyediakan hosting untuk website tipe ini. Jadi, apa itu static website?

Static website adalah website yang memiliki konten yang tidak berubah atau tetap. Contoh website yang menggunakan jenis ini adalah website resume atau CV. Data yang ditampilkan pada website ini tidak diambil melalui database, melainkan di-hardcode atau sudah ditulis pada suatu file sebelum diunggah ke hosting.

Tapi jangan khawatir, static website pun bisa menjadi dynamic jika kamu menggunakan API (Application Programming Interface) untuk mengambil data dari suatu database atau tempat lain. Namun, di panduan ini hanya akan mengajarkan cara membuat website statis tanpa data dinamis.

Menggunakan Vercel sebagai Hosting

Vercel adalah salah satu penyedia layanan hosting gratis yang akan kita gunakan. Berikut ini adalah langkah-langkah untuk mendaftarkan diri di hosting ini. Selain deploy website di Github, kamu juga bisa buat repository di Vercel ini.

1. Daftarkan Diri

Pertama, kamu harus mendaftarkan diri dulu di Vercel. Untuk dapat mendaftarkan diri kamu harus memiliki akun Github, GitLab, atau BitBucket.

2. Download Aplikasi CLI Vercel

Setelah mendaftarkan diri, download aplikasi CLI Vercel melalui npm. Jika kamu belum melakukan instalasi npm, ada baiknya untuk mengikuti panduan instalasi npm terlebih dahulu. Jalankan perintah berikut ini untuk mengunduh aplikasi CLI Vercel ke komputermu,

Setelah instalasi selesai, coba jalankan perintah npx vercel -v untuk mengetahui apakah instalasi sukses atau tidak. Jika tidak keluar tulisan mirip seperti di bawah ini, kemungkinan instalasimu gagal dan harus diulang.

3. Login Melalui Aplikasi CLI Vercel

Selanjutnya, login ke Vercel menggunakan aplikasi CLI tersebut. Caranya mudah dengan menggunakan perintah npx vercel. Kamu akan disuruh memasukan email yang kamu daftarkan sebelumnya, selanjutkan email konfirmasi akan dikirimkan dan kamu perlu untuk menekan tombol âVerifyâ di email kamu. Tulisan yang akan keluar kurang lebih seperti ini.

Selamat! Kamu sudah berhasil menggunakan Vercel CLI. Sekarang, saatnya membuat website dan meletakkannya di Vercel sehingga semua orang bisa mengaksesnya. Cukup melakukan dua langkah sederhana berikut ini.

1. Buat Website Super Sederhana

Buat sebuah folder baru, dan isi folder tersebut dengan sebuah file HTML bernama index.html yang isinya bebas

2. Unggah Website Kamu ke Vercel

Kemudian jalan kan perintah berikut ini di folder yang berisi index.html tersebut. Kamu akan ditanya mengenai beberapa hal, kamu boleh tekan enter sampai beres tanpa mengubah apapun.

Yak, kamu berhasil membuat website yang dapat diakses melalui internet! Sekarang coba buka link yang muncul di tulisan diatas tepatnya dibagian, Production:. Coba buka melalui browser dan kamu akan melihat bahwa website kamu berhasil dibuat.

Vercel memiliki dukungan untuk berbagai jenis frontend framework seperti React, NextJS, Angular, dan Vue. Sehingga kamu bisa menggunakan frontend framework pilihan kamu jika dibutuhkan.