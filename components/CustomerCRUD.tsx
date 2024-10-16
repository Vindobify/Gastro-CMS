"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

const CustomerCRUD = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', address: '' });
  const [editingCustomer, setEditingCustomer] = useState(null);
  const { toast } = useToast()

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await fetch('/api/customers');
    const data = await response.json();
    setCustomers(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingCustomer) {
      setEditingCustomer({ ...editingCustomer, [name]: value });
    } else {
      setNewCustomer({ ...newCustomer, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingCustomer) {
      await fetch('/api/customers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCustomer),
      });
      setEditingCustomer(null);
      toast({ title: "Kunde aktualisiert" });
    } else {
      await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCustomer),
      });
      setNewCustomer({ name: '', email: '', address: '' });
      toast({ title: "Kunde erstellt" });
    }
    fetchCustomers();
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  const handleDelete = async (id) => {
    await fetch('/api/customers', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchCustomers();
    toast({ title: "Kunde gelöscht" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kunden verwalten</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={editingCustomer ? editingCustomer.name : newCustomer.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={editingCustomer ? editingCustomer.email : newCustomer.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Adresse"
          value={editingCustomer ? editingCustomer.address : newCustomer.address}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">{editingCustomer ? 'Aktualisieren' : 'Erstellen'}</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>E-Mail</TableHead>
            <TableHead>Adresse</TableHead>
            <TableHead>Aktionen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(customer)} className="mr-2">Bearbeiten</Button>
                <Button onClick={() => handleDelete(customer.id)} variant="destructive">Löschen</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerCRUD;