import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    cookies().set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0),
      path: "/",
    })

    return NextResponse.json({ message: "Logout successful" })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}