import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const customers = await prisma.user.findMany({
    where: { role: 'CUSTOMER' },
    select: { id: true, name: true, email: true }
  });
  return NextResponse.json(customers)
}

export async function POST(request: Request) {
  const data = await request.json()
  const customer = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password, // In der Praxis sollten Sie das Passwort hashen
      role: 'CUSTOMER'
    },
    select: { id: true, name: true, email: true }
  })
  return NextResponse.json(customer, { status: 201 })
}

export async function PUT(request: Request) {
  const data = await request.json()
  const customer = await prisma.user.update({
    where: { id: data.id },
    data: {
      name: data.name,
      email: data.email,
    },
    select: { id: true, name: true, email: true }
  })
  return NextResponse.json(customer)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  await prisma.user.delete({ where: { id } })
  return NextResponse.json({ message: 'Customer deleted' })
}