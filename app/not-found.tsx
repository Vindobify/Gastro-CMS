import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Seite nicht gefunden</h2>
      <p className="mb-4">Die angeforderte Seite konnte nicht gefunden werden.</p>
      <Button asChild>
        <Link href="/">
          Zurück zur Startseite
        </Link>
      </Button>
    </div>
  )
}