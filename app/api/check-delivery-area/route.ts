import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const { address } = await request.json()
  
  // Extrahieren der PLZ aus der Adresse
  const zipCode = address.match(/\b\d{4}\b/)?.[0];

  if (!zipCode) {
    return NextResponse.json({ canDeliver: false, error: 'Ungültige Postleitzahl' });
  }

  // Abrufen der Liefergebiete aus den Einstellungen
  const settings = await prisma.settings.findFirst();
  const deliveryAreas = settings?.deliveryAreas?.split(',').map(area => area.trim()) || [];

  const canDeliver = deliveryAreas.includes(zipCode);

  return NextResponse.json({ canDeliver });
}