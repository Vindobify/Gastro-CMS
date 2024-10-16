import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentOrders = [
  {
    id: "1234",
    customer: "John Doe",
    status: "Geliefert",
    total: "€59.99",
  },
  {
    id: "1235",
    customer: "Jane Smith",
    status: "In Bearbeitung",
    total: "€39.99",
  },
  {
    id: "1236",
    customer: "Bob Johnson",
    status: "Versandt",
    total: "€79.99",
  },
  {
    id: "1237",
    customer: "Alice Brown",
    status: "Storniert",
    total: "€29.99",
  },
  {
    id: "1238",
    customer: "Charlie Davis",
    status: "Geliefert",
    total: "€89.99",
  },
]

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Bestellnummer</TableHead>
          <TableHead>Kunde</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Betrag</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}