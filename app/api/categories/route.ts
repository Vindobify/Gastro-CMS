import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories)
}

export async function POST(request: Request) {
  const data = await request.json()
  const category = await prisma.category.create({
    data: {
      name: data.name,
      taxRate: data.taxRate,
    }
  })
  return NextResponse.json(category, { status: 201 })
}

export async function PUT(request: Request) {
  const data = await request.json()
  const category = await prisma.category.update({
    where: { id: data.id },
    data: {
      name: data.name,
      taxRate: data.taxRate,
    }
  })
  return NextResponse.json(category)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  await prisma.category.delete({ where: { id } })
  return NextResponse.json({ message: 'Category deleted' })
}