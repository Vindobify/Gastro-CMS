"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', category: '', allergens: '' });
  const [editingProduct, setEditingProduct] = useState(null);
  const { toast } = useToast()

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = editingProduct || newProduct;
    const formattedProduct = {
      ...productData,
      allergens: productData.allergens.split(',').map(allergen => allergen.trim()),
      price: parseFloat(productData.price)
    };

    if (editingProduct) {
      await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedProduct),
      });
      setEditingProduct(null);
      toast({ title: "Produkt aktualisiert" });
    } else {
      await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedProduct),
      });
      setNewProduct({ name: '', description: '', price: '', category: '', allergens: '' });
      toast({ title: "Produkt erstellt" });
    }
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct({
      ...product,
      allergens: product.allergens.join(', ')
    });
  };

  const handleDelete = async (id) => {
    await fetch('/api/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
    toast({ title: "Produkt gelöscht" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Produkte verwalten</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={editingProduct ? editingProduct.name : newProduct.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="description"
          placeholder="Beschreibung"
          value={editingProduct ? editingProduct.description : newProduct.description}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="price"
          placeholder="Preis"
          value={editingProduct ? editingProduct.price : newProduct.price}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="category"
          placeholder="Kategorie"
          value={editingProduct ? editingProduct.category : newProduct.category}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="allergens"
          placeholder="Allergene (durch Komma getrennt)"
          value={editingProduct ? editingProduct.allergens : newProduct.allergens}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">{editingProduct ? 'Aktualisieren'