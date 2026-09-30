import prisma from '@/lib/prisma';
import Link from 'next/link';
import { tambahPemain } from './actions';
import TombolHapus from '@/components/TombolHapus';
import TombolLogout from '@/components/LogoutButton';

export default async function AdminPage() {
  const daftarPemain = await prisma.pemain.findMany({
    orderBy: { no_urut: 'asc' },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-700 to-red-500 px-5 py-10 font-sans">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-8 rounded-3xl bg-white p-8 text-center shadow-2xl">
          <img
            src="/1201350-removebg-preview.png"
            className="h-20 mx-auto mb-4"
            alt="Logo MU"
          />
          <h1 className="mb-2 text-3xl font-extrabold text-slate-900">
            Panel Data Pemain Manchester United
          </h1>
          <p className="text-slate-600">Total: {daftarPemain.length} pemain</p>
          
          {/* LOGOUT DI SINI */}
          <div className="mt-10 flex justify-center">
            <TombolLogout />
          </div>
        </div>

        {/* FORM TAMBAH */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-2xl p-8">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Tambah Data Pemain</h2>
          <form action={tambahPemain} className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <input
              type="text"
              name="nama"
              placeholder="Nama Pemain"
              required
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
            <select
              name="posisi"
              required
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            >
              <option value="">-- Posisi --</option>
              <option value="Kiper">Kiper</option>
              <option value="Bek">Bek</option>
              <option value="Gelandang">Gelandang</option>
              <option value="Penyerang">Penyerang</option>
            </select>
            <input
              type="number"
              name="nomor_punggung"
              placeholder="No. Punggung"
              required
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
            <input
              type="text"
              name="negara"
              placeholder="Negara"
              required
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
            <button
              type="submit"
              className="mb-4 rounded-lg bg-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Simpan Data
            </button>
          </form>

        



        {/* TABEL */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-2xl"></div>
          <table className="w-full text-left text-sm">
            <thead className="bg-gradient-to-r from-gray-200 via-gray-400 to-slate-200 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">No</th>
                <th className="px-6 py-4 font-semibold">Nama</th>
                <th className="px-6 py-4 font-semibold">Posisi</th>
                <th className="px-6 py-4 font-semibold">No. Punggung</th>
                <th className="px-6 py-4 font-semibold">Negara</th>
                <th className="px-6 py-4 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {daftarPemain.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Belum ada data pemain.
                  </td>
                </tr>
              ) : (
                daftarPemain.map((pemain) => (
                  <tr key={pemain.no_urut} className="hover:bg-slate-50">
                    <td className="px-6 py-4">{pemain.no_urut}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">{pemain.nama}</td>
                    <td className="px-6 py-4">{pemain.posisi}</td>
                    <td className="px-6 py-4">{pemain.nomor_punggung}</td>
                    <td className="px-6 py-4">{pemain.negara}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/edit/${pemain.no_urut}`}
                        className="mr-2 rounded-lg bg-yellow-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-yellow-600"
                      >
                        Edit
                      </Link>
                      <TombolHapus no_urut={pemain.no_urut} nama={pemain.nama} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    
    </main>
  );
}