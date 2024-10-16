import { NextResponse } from 'next/server'

let users = [
  { id: 1, name: 'Test User', email: 'user@example.com', password: 'password' },
]

export async function GET() {
  return NextResponse.json(users.map(({ password, ...user }) => user))
}

export async function POST(request: Request) {
  const newUser = await request.json()
  newUser.id = users.length + 1
  users.push(newUser)
  const { password, ...userWithoutPassword } = newUser
  return NextResponse.json(userWithoutPassword, { status: 201 })
}