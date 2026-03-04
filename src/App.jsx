// PlastiCycle - Single-file React component
// Usage instructions (short):
// 1) Create a new React app (recommended: Vite + React) or Next.js app.
//    - Vite: `npm create vite@latest plastycle -- --template react` then `cd plastycle`.
//    - Next.js: `npx create-next-app@latest plastycle`.
// 2) Ensure Tailwind CSS is configured (the design uses Tailwind classes). If you prefer plain CSS, replace classes.
// 3) Save this file as `src/App.jsx` (Vite) or as a component/page in Next.js (e.g. app/page.jsx or pages/index.jsx).
// 4) Optional libraries to add later: leaflet (for map), chart.js (for charts), react-router (for multi-page routing), axios (for fetching open data).
//    Example installs: `npm i leaflet react-leaflet chart.js axios`
// 5) Deploy to Vercel: push repo to GitHub and connect to Vercel (or run `vercel` CLI).

import React, { useState } from 'react';
import DropPointSection from './components/DropPointSection';

// Simple sample data: articles and tips
const SAMPLE_ARTICLES = [
  {
    id: 1,
    title: 'Kenapa Sampah Plastik Menjadi Masalah Besar di Indonesia?',
    excerpt:
      'Plastik sulit terurai, menumpuk di TPA dan laut, serta mencemari ekosistem laut dan darat. Pelajari akar masalah dan solusi yang bisa dilakukan di rumah.',
    content: `
Sampah plastik merupakan salah satu ancaman lingkungan terbesar di Indonesia. Diperkirakan lebih dari **60 juta ton sampah** dihasilkan setiap tahun, dan sekitar **17%** di antaranya adalah plastik.  
Plastik digunakan di hampir setiap aspek kehidupan—dari kemasan makanan, botol air, hingga bahan bangunan—namun daya tahannya yang lama justru menjadi bencana ketika dibuang sembarangan.

Masalah utama yang dihadapi Indonesia adalah kurangnya sistem pengelolaan limbah yang efisien. Banyak daerah belum memiliki fasilitas daur ulang memadai, dan sebagian besar sampah berakhir di **Tempat Pembuangan Akhir (TPA)** yang sudah penuh sesak. Akibatnya, sebagian plastik terbawa aliran sungai hingga mencemari laut. Indonesia bahkan disebut sebagai salah satu penyumbang sampah plastik laut terbesar di dunia setelah Tiongkok.

Plastik yang terurai menjadi mikroplastik kini telah ditemukan di air minum, garam laut, bahkan udara. Ini membuktikan bahwa krisis plastik bukan hanya masalah lingkungan, tapi juga **ancaman kesehatan manusia**.

Solusi sederhana yang bisa dilakukan:
1. Kurangi konsumsi plastik sekali pakai (kantong, sedotan, bungkus).
2. Pisahkan sampah plastik di rumah sebelum dibuang.
3. Serahkan plastik bersih ke bank sampah atau drop point terdekat.
4. Gunakan barang tahan lama dan biasakan membawa wadah sendiri.

Dengan perubahan kecil dalam kebiasaan, kita bisa membantu mengurangi beban lingkungan. Tidak ada solusi instan, tapi langkah kecil yang konsisten akan berdampak besar bagi masa depan bumi.`
  },
  {
    id: 2,
    title: '5 Jenis Plastik yang Bisa Didaur Ulang dan Cara Mengenalinya',
    excerpt:
      'Tidak semua plastik bisa didaur ulang. Yuk kenali simbol-simbol daur ulang agar kita bisa memilah sampah dengan benar!',
    content: `
Banyak orang tidak menyadari bahwa **tidak semua plastik sama**. Setiap produk plastik memiliki kode daur ulang (resin code) yang ditulis di bagian bawah wadah, biasanya berupa angka 1–7 di dalam segitiga panah.  
Mengetahui arti kode ini membantu kita memilah mana plastik yang aman didaur ulang dan mana yang sebaiknya dihindari.

Berikut penjelasannya:
1. **PET atau PETE (1)** — Umum pada botol air mineral dan minuman ringan. Mudah didaur ulang, tapi tidak disarankan digunakan berulang karena bisa melepaskan zat kimia.
2. **HDPE (2)** — Ditemukan pada galon, botol susu, dan wadah deterjen. Sangat kuat dan tahan panas, ideal untuk daur ulang.
3. **PVC (3)** — Biasa digunakan untuk pipa atau bungkus makanan. Sulit didaur ulang dan bisa mengeluarkan zat berbahaya bila dibakar.
4. **LDPE (4)** — Kantong plastik belanja dan bungkus makanan. Bisa didaur ulang, tapi fasilitas daur ulangnya masih terbatas.
5. **PP (5)** — Digunakan pada wadah makanan, tutup botol, dan sedotan. Aman, kuat, dan bisa didaur ulang.
6. **PS (6)** — Styrofoam dan wadah sekali pakai. Sangat sulit didaur ulang dan tidak ramah lingkungan.
7. **Other (7)** — Campuran plastik lain, seperti polycarbonate. Umumnya tidak bisa diolah kembali.

Dengan mengenali simbol ini, kita bisa ikut berperan aktif dalam sistem daur ulang. Pilih produk dengan kode 1, 2, atau 5 jika memungkinkan, dan hindari 3, 6, dan 7. Langkah kecil ini membuat perbedaan besar.`
  },
  {
    id: 3,
    title: 'Bagaimana Proses Daur Ulang Plastik Bekerja?',
    excerpt:
      'Tahapan daur ulang plastik dimulai dari pemilahan hingga menjadi produk baru. Pahami prosesnya agar kita lebih menghargai usaha daur ulang.',
    content: `
Daur ulang plastik bukan sekadar proses teknis, tapi juga bagian penting dari **ekonomi sirkular**. Tujuannya adalah mengubah limbah menjadi sumber daya baru yang berguna, bukan hanya menumpuk di TPA.

Prosesnya melibatkan beberapa tahap utama:
1. **Pengumpulan dan Pemilahan**  
   Sampah plastik dikumpulkan dari rumah tangga, drop point, dan bank sampah, kemudian dipilah berdasarkan jenis resin dan warna. Pemilahan ini penting agar hasil daur ulang memiliki kualitas baik.
2. **Pencucian**  
   Plastik dicuci untuk menghilangkan sisa makanan, minyak, atau label yang bisa mengganggu proses peleburan.
3. **Pencacahan (Shredding)**  
   Plastik bersih dicacah menjadi serpihan kecil (flakes) agar mudah dilelehkan.
4. **Pelelehan dan Pembentukan Ulang**  
   Serpihan dilelehkan dan dibentuk menjadi butiran plastik (pellet) yang digunakan kembali oleh industri.

Hasil daur ulang ini bisa diubah menjadi produk baru seperti ember, tas, perabot rumah, hingga serat kain sintetis.  
Namun, tidak semua plastik dapat didaur ulang dengan kualitas yang sama. Karena itu, upaya pengurangan dari sumbernya tetap lebih penting daripada hanya mengandalkan daur ulang.`
  },
  {
    id: 4,
    title: 'Inovasi Startup Hijau di Indonesia yang Mengubah Sampah Jadi Cuan',
    excerpt:
      'Dari Octopus hingga Rekosistem, startup lokal ini membuktikan bahwa sampah bisa jadi peluang ekonomi sirkular.',
    content: `
Sampah sering dianggap masalah, tapi bagi sejumlah startup Indonesia, **sampah justru adalah peluang emas**.  
Beberapa perusahaan rintisan mengubah paradigma pengelolaan limbah menjadi bisnis berkelanjutan dengan nilai ekonomi nyata.

- **Octopus**: aplikasi yang menghubungkan pengguna dengan pengumpul sampah daur ulang. Pengguna mendapat poin yang bisa ditukar hadiah.  
- **Rekosistem**: platform yang membangun ekosistem ekonomi sirkular dengan melibatkan konsumen, pengepul, dan industri daur ulang.  
- **Waste4Change**: perusahaan sosial yang fokus pada pengelolaan sampah bertanggung jawab, dari pemilahan hingga edukasi masyarakat.

Startup semacam ini menunjukkan bahwa keberlanjutan bisa berjalan seiring dengan keuntungan ekonomi.  
Selain itu, mereka membuka lapangan kerja baru dan meningkatkan kesadaran publik.  
Kamu juga bisa berkontribusi dengan mendukung startup lokal ini atau membangun inisiatif hijau di komunitasmu sendiri!`
  },
  {
    id: 5,
    title: 'Langkah Kecil di Rumah untuk Dunia yang Lebih Bersih',
    excerpt:
      'Mulailah dari hal sederhana: bawa tas belanja sendiri, hindari sedotan plastik, dan ajak tetangga ikut serta.',
    content: `
Perubahan besar selalu dimulai dari langkah kecil, dan rumah adalah tempat terbaik untuk memulainya.  
Tanpa sadar, kebiasaan sehari-hari kita bisa berdampak besar pada lingkungan — dari membuang sampah sembarangan hingga menggunakan plastik sekali pakai.

Berikut beberapa langkah sederhana yang bisa dilakukan:
- Gunakan botol minum dan kotak makan yang bisa dipakai ulang.
- Simpan kantong belanja kain di tas atau kendaraan.
- Pisahkan sampah organik dan anorganik di rumah.
- Cuci dan keringkan plastik sebelum disetorkan ke bank sampah.
- Edukasi anak-anak sejak dini tentang pentingnya menjaga lingkungan.

Mulailah dari rumah, ajak keluarga dan tetangga ikut serta.  
Gerakan kecil seperti ini, jika dilakukan bersama, bisa menciptakan dampak besar.  
Bayangkan jika satu juta rumah tangga melakukan hal yang sama — Indonesia bisa jauh lebih bersih dan hijau.`
  },
  {
    id: 6,
    title: 'Apa Itu Ekonomi Sirkular dan Mengapa Penting untuk Masa Depan?',
    excerpt:
      'Ekonomi sirkular berfokus pada penggunaan kembali sumber daya, bukan membuangnya. Konsep ini bisa jadi kunci masa depan berkelanjutan.',
    content: `
Ekonomi sirkular adalah konsep ekonomi yang berfokus pada penggunaan kembali sumber daya sebanyak mungkin.  
Berbeda dengan sistem ekonomi linear (ambil → pakai → buang), ekonomi sirkular menekankan **reduce, reuse, recycle**.

Dalam praktiknya, produk didesain agar bisa bertahan lama, diperbaiki, atau diolah kembali menjadi barang baru.  
Pendekatan ini mengurangi limbah, menekan penggunaan sumber daya alam, dan menciptakan lapangan kerja ramah lingkungan.

Manfaat ekonomi sirkular:
- Mengurangi tekanan terhadap alam.
- Menumbuhkan industri hijau baru.
- Mengurangi emisi karbon dan polusi.

Contohnya bisa dilihat dari bisnis daur ulang plastik, industri refill produk rumah tangga, atau inovasi bahan biodegradable.  
Ekonomi sirkular bukan hanya tren — ini adalah **strategi bertahan hidup** di masa depan yang sumber dayanya semakin terbatas.`
  },
  {
    id: 7,
    title: 'Bank Sampah: Gerakan Sosial yang Mengubah Limbah Jadi Tabungan',
    excerpt:
      'Bank sampah mengajarkan nilai ekonomi dari limbah rumah tangga. Yuk kenalan dengan konsep ini!',
    content: `
Bank sampah adalah inovasi sosial yang sederhana tapi berdampak besar.  
Di sini, masyarakat bisa **menabung sampah anorganik** seperti plastik, logam, dan kertas — bukan uang.  
Sampah tersebut kemudian ditimbang dan dikonversi menjadi nilai rupiah sesuai jenis dan beratnya.

Selain membantu mengurangi volume sampah ke TPA, bank sampah juga memberdayakan masyarakat lokal, terutama ibu rumah tangga.  
Banyak desa dan kelurahan di Indonesia kini memiliki bank sampah yang mandiri dan menjadi pusat edukasi lingkungan.

Keuntungan lain:
- Mendorong budaya memilah sampah.
- Menumbuhkan kesadaran ekonomi sirkular.
- Meningkatkan pendapatan keluarga secara berkelanjutan.

Gerakan ini adalah bukti bahwa solusi lingkungan tidak selalu rumit. Dengan sistem yang sederhana, kita bisa menciptakan perubahan nyata.`
  },
  {
    id: 8,
    title: 'Plastik Biodegradable: Solusi atau Sekadar Tren?',
    excerpt:
      'Banyak produk mengklaim “biodegradable”, tapi apakah benar ramah lingkungan?',
    content: `
Belakangan ini banyak produk berlabel **biodegradable**, seolah menjadi jawaban dari krisis plastik.  
Namun, tidak semua plastik biodegradable benar-benar ramah lingkungan. Beberapa jenis hanya bisa terurai dalam kondisi industri khusus—seperti suhu tinggi dan kelembapan tertentu—yang jarang tersedia di Indonesia.

Ada juga plastik “oxo-biodegradable” yang tampak cepat terurai, tapi sebenarnya hanya pecah jadi mikroplastik yang tetap mencemari lingkungan.  
Jadi, solusi sebenarnya bukan mengganti semua plastik dengan versi “ramah lingkungan”, melainkan **mengurangi penggunaannya** sejak awal.

Pilih produk dengan kemasan yang bisa dipakai ulang, atau gunakan wadah dari bahan alami seperti bambu dan kaca.  
Inovasi teknologi penting, tapi perubahan perilaku tetap kunci utama.`
  },
  {
    id: 9,
    title: 'Dampak Mikroplastik pada Kesehatan Manusia',
    excerpt:
      'Penelitian menunjukkan mikroplastik bisa masuk ke tubuh manusia. Apa dampaknya?',
    content: `
Mikroplastik adalah partikel plastik berukuran sangat kecil, kurang dari 5 milimeter, yang kini telah ditemukan hampir di seluruh ekosistem bumi — dari gunung es di Arktik hingga laut tropis Indonesia.  
Yang lebih mengejutkan, partikel ini juga telah masuk ke dalam tubuh manusia melalui makanan, air, dan udara.

Beberapa studi menemukan mikroplastik di darah, paru-paru, bahkan plasenta ibu hamil.  
Walau efek jangka panjangnya belum sepenuhnya dipahami, para ahli khawatir partikel ini dapat membawa zat kimia berbahaya seperti **BPA dan ftalat** yang mengganggu sistem hormon dan menyebabkan peradangan.

Cara mengurangi risiko:
- Hindari makanan dan minuman dalam kemasan plastik sekali pakai.
- Gunakan botol kaca atau stainless steel.
- Kurangi konsumsi seafood dari wilayah tercemar.

Kita mungkin tidak bisa menghindari mikroplastik sepenuhnya, tapi kita bisa memperlambat penyebarannya dengan mengubah pola konsumsi.`
  },
  {
    id: 10,
    title: 'Pentingnya Edukasi Lingkungan di Sekolah',
    excerpt:
      'Generasi muda perlu memahami pentingnya menjaga bumi sejak dini.',
    content: `
Sekolah memiliki peran penting dalam membentuk perilaku peduli lingkungan.  
Dengan memasukkan pendidikan lingkungan hidup dalam kurikulum, siswa bisa memahami keterkaitan antara manusia, alam, dan dampak dari pilihan sehari-hari.

Program sederhana seperti **eco-class**, lomba daur ulang, hingga kegiatan menanam pohon bisa menanamkan rasa tanggung jawab terhadap bumi sejak dini.  
Anak-anak yang tumbuh dengan kesadaran ini akan menjadi generasi yang lebih bijak dalam mengelola sumber daya alam.

Selain itu, sekolah bisa menjadi laboratorium kecil untuk praktik berkelanjutan:  
mengelola komposter, mengurangi penggunaan plastik, dan menciptakan inovasi ramah lingkungan.  
Edukasi lingkungan bukan hanya soal teori — tapi tentang menanamkan nilai bahwa setiap tindakan kecil berarti besar bagi bumi.`
  }
];



const SAMPLE_TIPS = [
  'Bawa tas belanja sendiri setiap kali pergi ke toko.',
  'Gunakan botol minum dan kotak makan reusable.',
  'Ikuti komunitas swap barang atau pertukaran makanan lokal.',
  'Lakukan "Plastic-free Challenge" selama 7 hari.',
];

export default function PlastiCycleApp() {
  const [query, setQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filtered = SAMPLE_ARTICLES.filter(
    (a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
                src="/logo.png"
                alt="Logo PlastiCycle"
                className="w-20 h-20 rounded-lg object-cover"
            />

            <div>
              <h1 className="text-xl font-semibold">PlastiCycle</h1>
              <p className="text-sm text-gray-600">Edukasi & Solusi Daur Ulang Plastik</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-4 items-center">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#articles" className="hover:underline">Artikel</a>
            <a href="#tools" className="hover:underline">Aplikasi & Tools</a>
            <a href="#tips" className="hover:underline">Tips</a>
            <a href="#community" className="hover:underline">Komunitas</a>
            <a href="#about" className="hover:underline">Tentang</a>
            <a href="#contact" className="bg-green-600 text-white px-3 py-1 rounded-md">Hubungi</a>
          </nav>

          <div className="md:hidden">
            {/* simple mobile menu anchor links */}
            <a href="#home" className="mr-3">🏠</a>
            <a href="#articles">📰</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* Hero */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Kurangi Plastik, Selamatkan Laut & Kota Kita</h2>
            <p className="mt-4 text-gray-700">PlastiCycle membantu kamu belajar memilah sampah, menemukan titik drop-off daur ulang, dan ikut kampanye lokal. Semua dibuat menggunakan teknologi open-source dan mobile-first.</p>

            <div className="mt-6 flex gap-3">
              <a href="#articles" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium">Mulai Belajar</a>
              <a href="#tools" className="border border-green-600 px-4 py-2 rounded-md">Lihat Aplikasi</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-white shadow">📍 120+ Drop Points</div>
              <div className="p-4 rounded-lg bg-white shadow">♻️ Panduan 3R</div>
            </div>
          </div>

          <div>
            <DropPointSection />
          </div>
        </section>

        {/* Search + Articles */}
        <section id="articles">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Artikel Edukasi</h3>
            <div className="flex items-center gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari artikel..."
                className="px-3 py-2 border rounded-md"
              />
              <a href="#" className="text-sm text-green-600">Lihat Semua</a>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {filtered.map((a) => (
              <article key={a.id} className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg">{a.title}</h4>
                <p className="mt-2 text-gray-600">{a.excerpt}</p>
                <div className="mt-4 flex gap-3 items-center">
                  <button
                    onClick={() => setSelectedArticle(a)}
                    className="text-sm text-green-600"
                  >
                    Baca Selengkapnya
                  </button>
                  <span className="text-xs text-gray-400"> · 3 menit baca</span>
                </div>
              </article>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-green-100 to-white p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-lg">Mulai Kampanye Sekarang</h4>
                <p className="mt-2 text-gray-600">Buat tantangan komunitas #ReducePlastic selama 30 hari.</p>
              </div>
              <div className="mt-4">
                <a href="#community" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md">Gabung Komunitas</a>
              </div>
            </div>
          </div>

          {/* Article modal / detail */}
          {selectedArticle && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
              <div className="bg-white max-w-3xl w-full md:w-3/4 rounded-2xl shadow-2xl p-8 text-gray-800 relative">
                <h3 className="text-2xl font-semibold text-center">{selectedArticle.title}</h3>
                <div className="mt-5 text-justify leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}

        </section>

        {/* Tools */}
        <section id="tools" className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold">Aplikasi & Tools</h3>
          <p className="mt-2 text-gray-600">Aplikasi mobile dan tools open-source yang mendukung gerakan daur ulang.</p>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <ToolCard
              title="Octopus (contoh)"
              desc="Layanan jemput sampah daur ulang."
              link="#"
            />
            <ToolCard
              title="OpenLitterMap"
              desc="Peta crowdsourced untuk titik-titik sampah. Bisa diintegrasikan lewat API."
              link="#"
            />
            <ToolCard
              title="Waste Tracker (DIY)"
              desc="Template open-source untuk membuat tracker sampah menggunakan Arduino / sensor."
              link="#"
            />
          </div>

          <div className="mt-6 text-sm text-gray-600">Catatan untuk implementasi teknis: gunakan <code>axios</code> untuk fetch API, dan <code>chart.js</code> untuk visualisasi statistik.</div>
        </section>

        {/* Tips */}
        <section id="tips">
          <h3 className="text-2xl font-semibold">Tips Gaya Hidup Hijau</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {SAMPLE_TIPS.map((t, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">{t}</div>
            ))}
          </div>
        </section>

        {/* Community */}
        <section id="community" className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold">Komunitas & Kegiatan</h3>
          <p className="mt-2 text-gray-600">Temukan kegiatan bersih-bersih, workshop daur ulang, dan grup lokal.</p>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <CommunityCard name="Pecinta Pantai Bersih" members={124} nextEvent="12 Nov 2025" />
            <CommunityCard name="ZeroWaste Kota X" members={78} nextEvent="05 Des 2025" />
            <CommunityCard name="Komunitas DaurUlang.id" members={210} nextEvent="19 Nov 2025" />
          </div>
        </section>

        {/* About & Contact */}
        <section id="about" className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Tentang PlastiCycle</h3>
            <p className="mt-3 text-gray-600">PlastiCycle adalah proyek edukasi yang dibuat sebagai tugas kampus. Website ini menyarankan penggunaan teknologi open-source untuk memetakan dan memfasilitasi kegiatan daur ulang.</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>CMS: WordPress (opsional) atau React (web app)</li>
              <li>Peta: Leaflet / OpenStreetMap</li>
              <li>Visualisasi: Chart.js</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Kontak & Kolaborasi</h3>
            <p className="mt-2 text-gray-600">Mau kolaborasi atau ada saran? Isi form atau kirim email ke <strong>plasticycle@example.com</strong> (ganti dengan emailmu sendiri).</p>

            <form className="mt-4 grid gap-3">
              <input className="px-3 py-2 border rounded" placeholder="Nama" />
              <input className="px-3 py-2 border rounded" placeholder="Email" />
              <textarea className="px-3 py-2 border rounded" placeholder="Pesan" rows={3} />
              <button type="button" className="bg-green-600 text-white px-4 py-2 rounded">Kirim</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="text-center py-8 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} PlastiCycle — Dibuat menggunakan teknologi open-source.</div>
          <div className="mt-2">Tips deploy: gunakan Vercel — push repo, connect, dan deploy.</div>
        </footer>
      </main>
    </div>
  );
}

function ToolCard({ title, desc, link }) {
  return (
    <div className="p-4 rounded-lg border">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
      <div className="mt-4">
        <a href={link} className="text-green-600 text-sm">Pelajari</a>
      </div>
    </div>
  );
}

function CommunityCard({ name, members, nextEvent }) {
  return (
    <div className="p-4 rounded-lg border flex flex-col justify-between">
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600 mt-1">{members} anggota</p>
      </div>
      <div className="mt-4 text-sm">
        <div>Event: {nextEvent}</div>
        <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm">Gabung</button>
      </div>
    </div>
  );
}