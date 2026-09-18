import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apna Store',
  description: 'Premium shopping experience for modern lifestyles.',
};

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Cart', href: '/cart' },
  { name: 'Checkout', href: '/checkout' },
  { name: 'Admin', href: '/admin' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-lg font-black text-white">
                A
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-slate-900">Apna Store</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Shop smarter</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 sm:inline-block">
                Log in
              </button>
              <Link href="/cart" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
                Cart (2)
              </Link>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-lg font-black text-slate-900">Apna Store</p>
              <p className="mt-1">Modern essentials for everyday life.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
