-- CreateTable
CREATE TABLE "pm_siswa" (
    "no_urut" SERIAL NOT NULL,
    "nama_siswa" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,

    CONSTRAINT "pm_siswa_pkey" PRIMARY KEY ("no_urut")
);
