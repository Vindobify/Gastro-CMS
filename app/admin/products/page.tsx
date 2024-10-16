import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const products = [
  { id: "1", name: "Margherita Pizza", category: "Pizza", price: "€9.99", stock: 50 },
  { id: "2", name: "Spaghetti Carbonara", category: "Pasta", price: "€12.99", stock: 30 },
  { id: "3", name: "Caesar Salad", category: "Salat", price: "€7.99", stock: 40 },
  { id: "4", name: "Tiramisu", category: "Dessert", price: "€5.99", stock: 25 },
  { id: "5", name: "Coca-Cola", category: "Getränke", price: "€2.99", stock: 100 },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Produkte</h1>
      <Card>
        <CardHeader>
          <CardTitle>Alle Produkte</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Kategorie</TableHead>
                <TableHead>Preis</TableHead>
                <TableHead>Lagerbestand</TableHead>
                <TableHead>Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Bearbeiten</Button>
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