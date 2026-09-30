'use client';

import { hapusPemain } from '@/app/admin/actions';

export default function TombolHapus({ no_urut, nama }) {
  async function handleHapus() {
    const yakin = window.confirm(`Yakin mau hapus pemain "${nama}"?`);
    if (yakin) {
      const formData = new FormData();
      formData.append('no_urut', no_urut);
      await hapusPemain(formData);
    }
  }

  return (
    <button
      onClick={handleHapus}
      className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
    >
      Hapus
    </button>
  );
}