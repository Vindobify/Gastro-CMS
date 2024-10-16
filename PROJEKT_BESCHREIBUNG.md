# LeckereBissen Food Delivery App

## Projektübersicht

LeckereBissen ist eine umfassende Food Delivery Plattform, die mit Next.js, React, TypeScript und Tailwind CSS entwickelt wurde. Die Anwendung bietet Funktionen für Kunden, Restaurantbesitzer und Lieferanten.

## Projektstruktur

/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/
│   │   │   │   └── route.ts
│   │   │   └── register/
│   │   │       └── route.ts
│   │   ├── categories/
│   │   │   └── route.ts
│   │   ├── check-delivery-area/
│   │   │   └── route.ts
│   │   ├── customers/
│   │   │   └── route.ts
│   │   ├── media/
│   │   │   └── route.ts
│   │   ├── products/
│   │   │   └── route.ts
│   │   └── settings/
│   │       └── route.ts
│   ├── dashboard/
│   │   ├── categories/
│   │   │   └── page.tsx
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   ├── media/
│   │   │   └── page.tsx
│   │   ├── orders/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── reports/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── delivery-dashboard/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── register/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   └── [verschiedene UI-Komponenten]
│   ├── AddressAutocomplete.tsx
│   ├── AuthProvider.tsx
│   ├── CategoryCRUD.tsx
│   ├── ClientSessionProvider.tsx
│   ├── CustomerCRUD.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MediaLibrary.tsx
│   └── ProductCRUD.tsx
├── lib/
│   └── prisma.ts
├── pages/
│   └── _document.js
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   └── uploads/
├── .env
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json


## Hauptfunktionen

1. **Benutzerauthentifizierung**: Implementiert mit NextAuth.js, unterstützt lokale Anmeldung und Google OAuth.
2. **Rollenbasierte Zugriffskontrolle**: Unterschiedliche Dashboards für Administratoren, Kunden und Lieferanten.
3. **Produktverwaltung**: CRUD-Operationen für Produkte und Kategorien.
4. **Bestellsystem**: Kunden können Bestellungen aufgeben, Administratoren können diese verwalten.
5. **Lieferantenverwaltung**: Zuweisung von Bestellungen an Lieferanten und Tracking des Lieferstatus.
6. **Mediathek**: Verwaltung von Bildern und anderen Medien.
7. **Berichterstellung**: Generierung von Verkaufs- und Umsatzberichten.
8. **Einstellungen**: Verwaltung von Restaurantinformationen und Liefergebieten.

## Technologie-Stack

- **Frontend**: Next.js 13 mit React 18
- **Styling**: Tailwind CSS
- **UI-Komponenten**: shadcn/ui
- **Authentifizierung**: NextAuth.js
- **ORM**: Prisma
- **Datenbank**: PostgreSQL
- **Diagramme**: Recharts

## Setup und Installation

1. Klonen Sie das Repository:
git clone https://github.com/your-repo/leckerebissen.git
cd leckerebissen

2. Installieren Sie die Abhängigkeiten:

3. Erstellen Sie eine `.env`-Datei im Wurzelverzeichnis und fügen Sie die erforderlichen Umgebungsvariablen hinzu:

DATABASE_URL="postgresql://username:password@localhost:5432/leckerebissen_db"
NEXTAUTH_SECRET="IhrGeheimesNextAuthSecret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="Ihre-Google-Client-ID"
GOOGLE_CLIENT_SECRET="Ihr-Google-Client-Secret"


4. Führen Sie die Prisma-Migrationen aus:
npx prisma migrate dev


5. Seeden Sie die Datenbank:
npm run seed


6. Starten Sie den Entwicklungsserver:
npm run dev


## API-Routen

- `/api/auth/[...nextauth]`: Authentifizierungsendpunkte
- `/api/auth/register`: Benutzerregistrierung
- `/api/categories`: CRUD für Kategorien
- `/api/check-delivery-area`: Überprüfung des Liefergebiets
- `/api/customers`: CRUD für Kunden
- `/api/media`: Verwaltung von Medien
- `/api/products`: CRUD für Produkte
- `/api/settings`: Verwaltung von Restauranteinstellungen

## Komponenten

- `Header.tsx`: Hauptnavigation und Benutzermenü
- `Footer.tsx`: Footer-Informationen
- `ProductCRUD.tsx`: Verwaltung von Produkten
- `CategoryCRUD.tsx`: Verwaltung von Kategorien
- `CustomerCRUD.tsx`: Verwaltung von Kunden
- `MediaLibrary.tsx`: Verwaltung von Medien
- `AddressAutocomplete.tsx`: Adresssuche und -validierung

## Seiten

- `/`: Startseite mit Liefergebietsüberprüfung
- `/menu`: Produktkatalog
- `/dashboard`: Admin-Dashboard
- `/delivery-dashboard`: Lieferanten-Dashboard
- `/customer-center`: Kundencenter

## Datenmodell

Das Datenmodell ist in `prisma/schema.prisma` definiert und umfasst:

- User
- Product
- Category
- Order
- OrderItem
- Media
- Settings

## Authentifizierung und Autorisierung

Die Authentifizierung wird mit NextAuth.js implementiert. Es unterstützt lokale Anmeldung und Google OAuth. Die Autorisierung basiert auf Benutzerrollen (ADMIN, CUSTOMER, DELIVERY).

## Deployment

1. Bauen Sie die Anwendung:
npm start


Stellen Sie sicher, dass Sie eine Produktionsdatenbank eingerichtet und die entsprechenden Umgebungsvariablen gesetzt haben.

## Zukünftige Erweiterungen

- Integration eines Zahlungsgateways
- Implementierung eines Treueprogramms
- Erweiterung der Berichterstellung und Analysen
- Integration von Echtzeit-Benachrichtigungen
- Mehrsprachige Unterstützung