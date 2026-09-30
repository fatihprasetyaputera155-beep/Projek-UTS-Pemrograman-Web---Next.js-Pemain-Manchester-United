import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: 'Username atau password salah' },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: 'Login berhasil' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan di server' },
      { status: 500 }
    );
  }
}