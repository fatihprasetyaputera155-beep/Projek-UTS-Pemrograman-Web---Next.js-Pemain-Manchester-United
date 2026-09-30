import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const dataPemain = await prisma.Pemain.findMany({
      orderBy: { no_urut: 'asc' },
    });
    return NextResponse.json(dataPemain, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Gagal mengambil data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nama, posisi, nomor_punggung, negara } = body;

    const pemainBaru = await prisma.Pemain.create({
      data: {
        nama,
        posisi,
        nomor_punggung: Number(nomor_punggung),
        negara,
      },
    });

    return NextResponse.json(pemainBaru, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Gagal menambah data' },
      { status: 500 }
    );
  }
}