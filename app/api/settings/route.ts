import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const settings = await prisma.settings.findFirst();
  return NextResponse.json(settings)
}

export async function POST(request: Request) {
  const data = await request.json()
  const settings = await prisma.settings.create({
    data: {
      restaurantName: data.restaurantName,
      address: data.address,
      phone: data.phone,
      email: data.email,
      logo: data.logo,
      fnNumber: data.fnNumber,
      atuNumber: data.atuNumber,
      website: data.website,
      deliveryAreas: data.deliveryAreas,
    }
  })
  return NextResponse.json(settings, { status: 201 })
}

export async function PUT(request: Request) {
  const data = await request.json()
  const settings = await prisma.settings.update({
    where: { id: data.id },
    data: {
      restaurantName: data.restaurantName,
      address: data.address,
      phone: data.phone,
      email: data.email,
      logo: data.logo,
      fnNumber: data.fnNumber,
      atuNumber: data.atuNumber,
      website: data.website,
      deliveryAreas: data.deliveryAreas,
    }
  })
  return NextResponse.json(settings)
}