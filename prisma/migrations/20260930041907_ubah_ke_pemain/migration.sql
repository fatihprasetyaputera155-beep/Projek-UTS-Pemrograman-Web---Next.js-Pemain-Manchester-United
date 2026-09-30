/*
  Warnings:

  - You are about to drop the `pm_siswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "pm_siswa";

-- CreateTable
CREATE TABLE "Pemain" (
    "no_urut" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "posisi" TEXT NOT NULL,
    "nomor_punggung" INTEGER NOT NULL,
    "negara" TEXT NOT NULL,

    CONSTRAINT "Pemain_pkey" PRIMARY KEY ("no_urut")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
