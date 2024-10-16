import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const application = await prisma.deliveryApplication.findUnique({
      where: { id: params.id },
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // Create a new user with the DELIVERY role
    const newUser = await prisma.user.create({
      data: {
        name: application.name,
        email: application.email,
        phone: application.phone,
        role: 'DELIVERY',
      },
    });

    // Update the application status
    await prisma.deliveryApplication.update({
      where: { id: params.id },
      data: { status: 'APPROVED' },
    });

    return NextResponse.json({ message: 'Application approved and user created' });
  } catch (error) {
    console.error('Error approving application:', error);
    return NextResponse.json({ error: 'Failed to approve application' }, { status: 500 });
  }
}