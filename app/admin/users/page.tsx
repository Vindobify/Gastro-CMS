import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const users = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Kunde", status: "Aktiv" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Lieferant", status: "Aktiv" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "Admin", status: "Inaktiv" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "Kunde", status: "Aktiv" },
  { id: "5", name: "Charlie Davis", email: "charlie@example.com", role: "Lieferant", status: "Aktiv" },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Benutzer</h1>
      <Card>
        <CardHeader>
          <CardTitle>Alle Benutzer</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>E-Mail</TableHead>
                <TableHead>Rolle</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
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