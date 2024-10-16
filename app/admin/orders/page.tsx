import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const orders = [
  { id: "1234", customer: "John Doe", status: "Geliefert", total: "€59.99", date: "2023-05-01" },
  { id: "1235", customer: "Jane Smith", status: "In Bearbeitung", total: "€39.99", date: "2023-05-02" },
  { id: "1236", customer: "Bob Johnson", status: "Versandt", total: "€79.99", date: "2023-05-03" },
  { id: "1237", customer: "Alice Brown", status: "Storniert", total: "€29.99", date: "2023-05-04" },
  { id: "1238", customer: "Charlie Davis", status: "Geliefert", total: "€89.99", date: "2023-05-05" },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bestellungen</h1>
      <Card>
        <CardHeader>
          <CardTitle>Alle Bestellungen</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bestellnummer</TableHead>
                <TableHead>Kunde</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Betrag</TableHead>
                <TableHead>Datum</TableHead>
                <TableHead>Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}