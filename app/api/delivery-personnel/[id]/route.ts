import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.user.delete({
      where: { id: params.id },
    })
    return NextResponse.json({ message: 'Delivery person deleted successfully' })
  } catch (error) {
    console.error('Error deleting delivery person:', error)
    return NextResponse.json({ error: 'Failed to delete delivery person' }, { status: 500 })
  }
}