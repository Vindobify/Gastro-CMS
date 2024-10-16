import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Willkommen bei LeckereBissen</h1>
            <p className="text-xl mb-8">Leckeres Essen direkt zu Ihnen nach Hause geliefert</p>
            <div className="max-w-md">
              <Link href="/menu" passHref>
                <Button className="w-full mt-4">
                  Zum Menü
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Unsere Kategorien</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Pizza', 'Pasta', 'Salate'].map((category) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Entdecken Sie unsere {category} Auswahl</p>
                    <Link href={`/menu#${category}`} className="text-blue-500 hover:underline mt-2 inline-block">
                      Zum Menü
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Kontaktieren Sie uns</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Unsere Adresse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Essensstraße 123, 1120 Wien</p>
                  <p className="mt-4">
                    <strong>Telefon:</strong> +43 1 234 5678
                  </p>
                  <p>
                    <strong>E-Mail:</strong> info@leckerebissen.com
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Öffnungszeiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Montag - Freitag: 11:00 - 22:00 Uhr</p>
                  <p>Samstag - Sonntag: 12:00 - 23:00 Uhr</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
