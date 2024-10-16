import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const application = await prisma.deliveryApplication.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        employmentType: data.employmentType,
        experience: data.experience,
        availability: data.availability,
        status: 'PENDING',
      },
    })
    return NextResponse.json(application, { status: 201 })
  } catch (error) {
    console.error('Error creating delivery application:', error)
    return NextResponse.json({ error: 'Failed to create application' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const applications = await prisma.deliveryApplication.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(applications)
  } catch (error) {
    console.error('Error fetching delivery applications:', error)
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
  }
}