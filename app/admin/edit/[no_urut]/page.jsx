import prisma from '@/lib/prisma';
import { editPemain } from '@/app/admin/actions';
import Link from 'next/link';

export default async function EditPemainPage({ params }) {
  const { no_urut } = await params;
  const id = Number(no_urut);

  const pemain = await prisma.pemain.findUnique({
    where: { no_urut: id },
  });

  if (!pemain) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-red-500">
        <div className="rounded-2xl bg-white p-8 text-center shadow-2xl">
          <h1 className="text-2xl font-bold text-slate-900">Data tidak ditemukan</h1>
          <Link href="/admin" className="mt-4 inline-block text-red-600 hover:underline">
            ← Kembali
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-500 via-red-500 to-yellow-500 px-5 py-10 font-sans">
      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="mb-6 text-2xl font-extrabold text-slate-900">
            Edit Pemain #{pemain.no_urut}
          </h1>

          <form action={editPemain} className="flex flex-col gap-5">
            <input type="hidden" name="no_urut" value={pemain.no_urut} />

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Nama Pemain</label>
              <input
                type="text"
                name="nama"
                defaultValue={pemain.nama}
                required
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Posisi</label>
              <select
                name="posisi"
                defaultValue={pemain.posisi}
                required
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              >
                <option value="Kiper">Kiper</option>
                <option value="Bek">Bek</option>
                <option value="Gelandang">Gelandang</option>
                <option value="Penyerang">Penyerang</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Nomor Punggung</label>
              <input
                type="number"
                name="nomor_punggung"
                defaultValue={pemain.nomor_punggung}
                required
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Negara</label>
              <input
                type="text"
                name="negara"
                defaultValue={pemain.negara}
                required
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-gradient-to-r from-yellow-500 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                Simpan Perubahan
              </button>
              <Link
                href="/admin"
                className="rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Batal
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}