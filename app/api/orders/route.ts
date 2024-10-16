import { NextResponse } from 'next/server'

let orders = [
  { id: 1, customer: 'Alice', items: 'Margherita Pizza, Coca-Cola', total: 13.98, status: 'Neu', address: 'Hauptstraße 1, 1120 Wien' },
  { id: 2, customer: 'Bob', items: 'Vegetarische Pasta', total: 12.99, status: 'Wird vorbereitet', address: 'Nebenstraße 2, 1130 Wien' },
]

export async function GET() {
  return NextResponse.json(orders)
}

export async function POST(request: Request) {
  const newOrder = await request.json()
  newOrder.id = orders.length + 1
  orders.push(newOrder)
  return NextResponse.json(newOrder, { status: 201 })
}