'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { products } from '@/data/products';

const initialCart = [
  { ...products[0], quantity: 1 },
  { ...products[2], quantity: 2 },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const delivery = subtotal > 2000 ? 0 : 99;
  const total = subtotal + delivery;

  const updateQty = (id: number, change: number) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Your bag</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Shopping cart</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="space-y-4">
          {cart.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-xl font-semibold text-slate-700">Your cart is empty.</p>
              <Link href="/products" className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
                Continue shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:flex-row sm:items-center">
                <div className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-5xl`}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button onClick={() => updateQty(item.id, -1)} className="h-9 w-9 rounded-full border border-slate-300 text-lg">−</button>
                    <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="h-9 w-9 rounded-full border border-slate-300 text-lg">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">₹{item.price * item.quantity}</p>
                  <p className="text-sm text-slate-400">₹{item.price} each</p>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Order summary</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <Link href="/checkout" className="mt-6 block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-700">
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}
