import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.deliveryApplication.update({
      where: { id: params.id },
      data: { status: 'REJECTED' },
    });

    return NextResponse.json({ message: 'Application rejected' });
  } catch (error) {
    console.error('Error rejecting application:', error);
    return NextResponse.json({ error: 'Failed to reject application' }, { status: 500 });
  }
}