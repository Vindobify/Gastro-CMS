import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  const images = await prisma.media.findMany();
  return NextResponse.json(images);
}

export async function POST(request: Request) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = file.name;
  const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

  await writeFile(filepath, buffer);

  const image = await prisma.media.create({
    data: {
      name: filename,
      url: `/uploads/${filename}`,
    },
  });

  return NextResponse.json(image, { status: 201 });
}