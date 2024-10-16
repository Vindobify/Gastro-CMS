import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const products = await prisma.product.findMany({
    include: { category: true }
  });
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const data = await request.json()
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
      allergens: data.allergens,
    },
    include: { category: true }
  })
  return NextResponse.json(product, { status: 201 })
}

export async function PUT(request: Request) {
  const data = await request.json()
  const product = await prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
      allergens: data.allergens,
    },
    include: { category: true }
  })
  return NextResponse.json(product)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  await prisma.product.delete({ where: { id } })
  return NextResponse.json({ message: 'Product deleted' })
}