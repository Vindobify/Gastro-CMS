import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const deliveryPersonnel = await prisma.user.findMany({
      where: { role: 'DELIVERY' },
      select: { id: true, name: true, email: true, phone: true },
    });
    return NextResponse.json(deliveryPersonnel)
  } catch (error) {
    console.error('Error fetching delivery personnel:', error)
    return NextResponse.json({ error: 'Failed to fetch delivery personnel' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const deliveryPerson = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: 'DELIVERY',
      },
      select: { id: true, name: true, email: true, phone: true },
    })
    return NextResponse.json(deliveryPerson, { status: 201 })
  } catch (error) {
    console.error('Error creating delivery person:', error)
    return NextResponse.json({ error: 'Failed to create delivery person' }, { status: 500 })
  }
}