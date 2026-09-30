'use server';

import  prisma  from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// CR Uhuyyy
export async function tambahPemain(formData) {
  const nama = formData.get('nama');
  const posisi = formData.get('posisi');
  const nomor_punggung = Number(formData.get('nomor_punggung'));
  const negara = formData.get('negara');

  await prisma.pemain.create({
    data: {
      nama,
      posisi,
      nomor_punggung,
      negara,
    },
  });

  revalidatePath('/admin');
}

// UPDT Uhuy
export async function editPemain(formData) {
  const no_urut = Number(formData.get('no_urut'));
  const nama = formData.get('nama');
  const posisi = formData.get('posisi');
  const nomor_punggung = Number(formData.get('nomor_punggung'));
  const negara = formData.get('negara');

  await prisma.pemain.update({
    where: { no_urut },
    data: {
      nama,
      posisi,
      nomor_punggung,
      negara,
    },
  });

  revalidatePath('/admin');
  redirect('/admin');
}

// DELETE
export async function hapusPemain(formData) {
  const no_urut = Number(formData.get('no_urut'));

  await prisma.pemain.delete({
    where: { no_urut },
  });

  revalidatePath('/admin');
}