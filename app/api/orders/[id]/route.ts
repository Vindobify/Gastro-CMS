import { NextResponse } from 'next/server'

let orders = [
  { id: 1, customer: 'Alice', items: 'Margherita Pizza, Coca-Cola', total: 13.98, status: 'Neu', address: 'Hauptstraße 1, 1120 Wien' },
  { id: 2, customer: 'Bob', items: 'Vegetarische Pasta', total: 12.99, status: 'Wird vorbereitet', address: 'Nebenstraße 2, 1130 Wien' },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const order = orders.find(o => o.id === id)
  if (order) {
    return NextResponse.json(order)
  } else {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const updatedOrder = await request.json()
  orders = orders.map(o => o.id === id ? { ...o, ...updatedOrder } : o)
  return NextResponse.json(orders.find(o => o.id === id))
}