'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Secure checkout</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Complete your order</h1>
      </div>

      {submitted ? (
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-10 text-center shadow-soft">
          <div className="text-5xl">✅</div>
          <h2 className="mt-4 text-3xl font-black text-emerald-900">Order placed successfully!</h2>
          <p className="mt-2 text-emerald-700">Your order is confirmed and will be delivered soon.</p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Full name
                <input required className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" placeholder="Your name" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Email
                <input required type="email" className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" placeholder="you@example.com" />
              </label>
              <label className="text-sm font-medium text-slate-700 md:col-span-2">
                Address
                <input required className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" placeholder="Street address" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                City
                <input required className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" placeholder="City" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                ZIP code
                <input required className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" placeholder="110001" />
              </label>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900">Payment method</h3>
              <div className="mt-4 space-y-3">
                {['UPI', 'Credit card', 'Cash on delivery'].map((method) => (
                  <label key={method} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">
                    <input type="radio" name="payment" defaultChecked={method === 'UPI'} />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="mt-8 w-full rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
              Place order
            </button>
          </form>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-slate-900">Order summary</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Urban Pro Headphones</span>
                <span>₹199</span>
              </div>
              <div className="flex justify-between">
                <span>Aero Bottle</span>
                <span>₹78</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
                <span>Total</span>
                <span>₹277</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
