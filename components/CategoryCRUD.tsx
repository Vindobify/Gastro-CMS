"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil, Trash2 } from 'lucide-react';

const CategoryCRUD = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', taxRate: 0.1 });
  const [editingCategory, setEditingCategory] = useState(null);
  const { toast } = useToast()

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch('/api/categories');
    const data = await response.json();
    setCategories(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingCategory) {
      setEditingCategory({ ...editingCategory, [name]: name === 'taxRate' ? parseFloat(value) : value });
    } else {
      setNewCategory({ ...newCategory, [name]: name === 'taxRate' ? parseFloat(value) : value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingCategory) {
      await fetch('/api/categories', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCategory),
      });
      setEditingCategory(null);
      toast({ title: "Kategorie aktualisiert" });
    } else {
      await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCategory),
      });
      setNewCategory({ name: '', taxRate: 0.1 });
      toast({ title: "Kategorie erstellt" });
    }
    fetchCategories();
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
  };

  const handleDelete = async (id) => {
    await fetch('/api/categories', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchCategories();
    toast({ title: "Kategorie gelöscht" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kategorien verwalten</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <Input
            type="text"
            name="name"
            placeholder="Kategoriename"
            value={editingCategory ? editingCategory.name : newCategory.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="number"
            name="taxRate"
            placeholder="Steuersatz (z.B. 0.1 für 10%)"
            value={editingCategory ? editingCategory.taxRate : newCategory.taxRate}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            max="1"
            required
          />
          <Button type="submit">{editingCategory ? 'Aktualisieren' : 'Erstellen'}</Button>
        </form>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Steuersatz</TableHead>
              <TableHead>Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{(category.taxRate * 100).toFixed(0)}%</TableCell>
                <TableCell>
                  <Button variant="ghost" onClick={() => handleEdit(category)} className="mr-2">
                    <Pencil className="h-4 w-4 mr-2" />
                    Bearbeiten
                  </Button>
                  <Button variant="ghost" onClick={() => handleDelete(category.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Löschen
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CategoryCRUD;