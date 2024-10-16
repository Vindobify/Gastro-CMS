"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Authentication Error</h2>
      <p className="mb-4">An error occurred during authentication. Please try again.</p>
      <Button onClick={() => router.push('/login')}>
        Back to Login
      </Button>
    </div>
  )
}