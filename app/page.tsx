import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-500 via-red-500 to-red-500 px-5 py-10 font-sans">
      <div className="mx-auto max-w-5xl">

        {/* HERO SECTION */}
        <div className="mb-8 rounded-3xl bg-white p-10 text-center shadow-2xl md:p-16">
          
          {/* LOGO MANCHESTER UNITED */}
          <div className="mb-6 flex justify-center">
          <img src="/1201350-removebg-preview.png" className="h-28 mx-auto mb-6 bg-white" />
          </div>

          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Sistem Informasi Pemain Manchester United
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
            sederhana untuk mengelola data Pemain Manchester United dengan Next.js,
            Prisma, dan PostgreSQL.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/login"
              className="inline-block rounded-xl bg-gradient-to-r from-yellow-500 to-red-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/60"
            >
              Login
            </Link>
          </div>
        </div>

        {/* FITUR */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-3 text-4xl">📋</div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">
              Kelola Data Pemain
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Tambah, edit, dan hapus data pemain Manchester United dengan mudah.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-3 text-4xl">📊</div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">
              Statistik Otomatis
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Lihat jumlah pemain, laki-laki, dan perempuan secara real-time.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
  <div className="mb-3 text-4xl">⚽</div>
  <h3 className="mb-2 text-lg font-bold text-slate-900">
    Jadwal Pertandingan
  </h3>
  <p className="text-sm leading-relaxed text-slate-600">
    Kelola jadwal dan hasil pertandingan pemain.
  </p>
</div>

         <div className="rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
  <div className="mb-3 text-4xl">🏆</div>
  <h3 className="mb-2 text-lg font-bold text-slate-900">
    Data Trofi & Prestasi
  </h3>
  <p className="text-sm leading-relaxed text-slate-600">
    Catat sejarah trofi dan prestasi Manchester United.
  </p>
</div>
        </div>

        {/* FOOTER */}
        <footer className="py-5 text-center text-sm text-white/80">
          <p>© 2026 Sistem Informasi Pemain Manchester United — Belajar Next.js</p>
        </footer>

      </div>
    </main>
  );
}