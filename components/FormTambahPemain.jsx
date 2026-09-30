'use client';

import { useState } from "react";
import { tambahSiswa } from "@/app/admin/actions";
import { useRouter } from "next/navigation";

export default function FormTambahSiswa() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama_siswa: "",
    jenis_kelamin: "Laki-Laki",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("nama_siswa", formData.nama_siswa);
      formDataObj.append("jenis_kelamin", formData.jenis_kelamin);

      await tambahSiswa(formDataObj);
      router.refresh();
    } catch (error) {
      console.error("Gagal menambah data:", error);
    } finally {
      setIsLoading(false);
      setFormData({ nama_siswa: "", jenis_kelamin: "Laki-Laki" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">

      <div className="flex flex-1 flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">
          Nama Siswa
        </label>
        <input
          type="text"
          placeholder="Masukkan nama siswa"
          value={formData.nama_siswa}
          onChange={(e) =>
            setFormData({ ...formData, nama_siswa: e.target.value })
          }
          required
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">
          Jenis Kelamin
        </label>
        <select
          value={formData.jenis_kelamin}
          onChange={(e) =>
            setFormData({ ...formData, jenis_kelamin: e.target.value })
          }
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        >
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Menyimpan..." : "Simpan Data"}
      </button>

    </form>
  );
}