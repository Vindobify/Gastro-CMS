import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const settings = await prisma.settings.findFirst()
    return NextResponse.json(settings)
  } catch (error) {
    console.error("Error fetching settings:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const updatedSettings = await prisma.settings.update({
      where: { id: 1 }, // Assuming there's only one settings record
      data: {
        restaurantName: data.restaurantName,
        address: data.address,
        phone: data.phone,
        email: data.email,
        deliveryAreas: data.deliveryAreas
      }
    })

    return NextResponse.json(updatedSettings)
  } catch (error) {
    console.error("Error updating settings:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}