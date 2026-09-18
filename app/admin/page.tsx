'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  badge: string;
  accent: string;
  emoji: string;
  description: string;
};

const blankProduct = {
  id: 0,
  name: '',
  category: 'Audio',
  price: 0,
  oldPrice: 0,
  rating: 0,
  badge: 'New',
  accent: 'from-violet-500 to-indigo-600',
  emoji: '✨',
  description: '',
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState(blankProduct);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      oldPrice: Number(form.oldPrice),
      rating: Number(form.rating),
    };

    setProducts((current) => [newProduct, ...current]);
    setForm(blankProduct);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Store management</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Admin dashboard</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Add new product</h2>
          <div className="mt-6 space-y-4">
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
              placeholder="Product name"
              required
            />
            <input
              value={form.category}
              onChange={(event) => setForm({ ...form, category: event.target.value })}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
              placeholder="Category"
              required
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="number"
                value={form.price}
                onChange={(event) => setForm({ ...form, price: Number(event.target.value) })}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                placeholder="Price"
                required
              />
              <input
                type="number"
                value={form.oldPrice}
                onChange={(event) => setForm({ ...form, oldPrice: Number(event.target.value) })}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                placeholder="Old price"
              />
            </div>
            <input
              value={form.emoji}
              onChange={(event) => setForm({ ...form, emoji: event.target.value })}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
              placeholder="Emoji"
            />
            <textarea
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              className="min-h-[120px] w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
              placeholder="Description"
            />
            <button type="submit" className="w-full rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
              Save product
            </button>
          </div>
        </form>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Current catalog</h2>
          <div className="mt-6 space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-2xl`}>
                    {product.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{product.name}</p>
                    <p className="text-xs text-slate-500">{product.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-slate-900">₹{product.price}</p>
                  <p className="text-xs text-slate-500">{product.badge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
