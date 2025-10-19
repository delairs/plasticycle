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

// Simple sample data: articles and tips
const SAMPLE_ARTICLES = [
  {
    id: 1,
    title: 'Kenapa Sampah Plastik Menjadi Masalah Besar di Indonesia?',
    excerpt:
      'Plastik sulit terurai, menumpuk di TPA dan laut, dan masuk ke rantai makanan. Pelajari penyebab dan solusi praktis untuk rumah tangga.',
    content: `Plastik merupakan material yang bertahan sangat lama di lingkungan. Kebiasaan konsumsi sekali pakai, infrastruktur pengelolaan sampah yang terbatas, dan kurangnya edukasi membuat plastik terus menumpuk. Pada halaman ini kita akan membahas cara memilah, mengurangi, dan memanfaatkan kembali plastik di rumah.`,
  },
  {
    id: 2,
    title: '5 Jenis Plastik yang Bisa Didaur Ulang dan Cara Mengenalinya',
    excerpt:
      'Mengenal kode resin pada plastik membantu memilah sampah yang bisa didaur ulang. Tidak semua plastik di tempat sampah rumah bisa langsung dimanfaatkan.',
    content:
      'Plastik biasanya diberi kode (1-7). PET (1) dan HDPE (2) adalah yang paling mudah didaur ulang. Plastik jenis lain memerlukan proses khusus atau tidak ekonomis untuk didaur ulang.',
  },
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
            <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold">PC</div>
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
            {/* Map placeholder - integrate Leaflet or embed OpenStreetMap later */}
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-lg font-semibold">Peta Drop Point (Placeholder)</p>
                <p className="mt-2 text-sm text-gray-600">Untuk menampilkan peta interaktif: instal <code>leaflet</code> / <code>react-leaflet</code> dan render peta di sini.</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">Tip: Gunakan data dari OpenLitterMap atau data.go.id untuk mengisi lokasi drop point.</div>
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
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white max-w-2xl w-full rounded-lg p-6">
                <h3 className="text-xl font-bold">{selectedArticle.title}</h3>
                <p className="mt-4 text-gray-700">{selectedArticle.content}</p>
                <div className="mt-6 text-right">
                  <button onClick={() => setSelectedArticle(null)} className="px-4 py-2 rounded-md border">Tutup</button>
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
            <p className="mt-2 text-gray-600">Mau kolaborasi atau ada saran? Isi form atau kirim email ke <strong>plastycle@example.com</strong> (ganti dengan emailmu sendiri).</p>

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