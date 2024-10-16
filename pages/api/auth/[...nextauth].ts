import NextAuth from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default NextAuth(authOptions)