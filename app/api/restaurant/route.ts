import { NextResponse } from 'next/server'

let restaurantInfo = {
  name: 'Leckere Bissen',
  address: 'Essensstraße 123, Wien',
  phone: '+43 1 234 5678',
  email: 'info@leckerebissen.com',
}

export async function GET() {
  return NextResponse.json(restaurantInfo)
}

export async function PUT(request: Request) {
  const updatedInfo = await request.json()
  restaurantInfo = { ...restaurantInfo, ...updatedInfo }
  return NextResponse.json(restaurantInfo)
}