import { NextResponse } from 'next/server'

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Klassisch mit Tomaten und Mozzarella', price: 10.99, category: 'Pizza', allergens: ['Gluten', 'Milch'] },
  { id: 2, name: 'Vegetarische Pasta', description: 'Verschiedenes Gemüse in Tomatensauce', price: 12.99, category: 'Pasta', allergens: ['Gluten'] },
  { id: 3, name: 'Hähnchen Caesar Salat', description: 'Gegrilltes Hähnchen mit Römersalat', price: 9.99, category: 'Salat', allergens: ['Ei', 'Milch'] },
  { id: 4, name: 'Coca-Cola', description: 'Klassisches Cola-Getränk', price: 2.99, category: 'Getränke', allergens: [] },
  { id: 5, name: 'Tiramisu', description: 'Italienisches Dessert mit Kaffeegeschmack', price: 6.99, category: 'Dessert', allergens: ['Gluten', 'Milch', 'Eier'] },
]

export async function GET() {
  return NextResponse.json(menuItems)
}