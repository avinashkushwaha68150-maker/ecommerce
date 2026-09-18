import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Apna Store | Modern Shopping Made Easy',
  description: 'Discover premium products, smart deals, and a smooth shopping experience.',
};

const stats = [
  { label: 'Happy customers', value: '25k+' },
  { label: 'Products shipped', value: '120k+' },
  { label: 'Average rating', value: '4.9/5' },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <span>⚡</span> Fresh arrivals this week
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Shop smarter for the lifestyle you love.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Discover premium essentials, everyday upgrades, and limited-time deals curated for modern living.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Shop now
              </Link>
              <Link
                href="/checkout"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Go to checkout
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 p-6 shadow-soft">
              <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm text-violet-100">Featured drop</p>
                    <p className="mt-1 text-2xl font-bold">Summer Edit</p>
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Up to 40% off</span>
                </div>
                <div className="mt-8 space-y-4">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex items-center justify-between rounded-2xl bg-white/10 p-3 text-white">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-2xl`}>
                          {product.emoji}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-violet-100">{product.category}</p>
                        </div>
                      </div>
                      <p className="text-lg font-bold">₹{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Popular now</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Best-selling products</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-violet-700 hover:text-violet-800">
            View all products →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
              <div className={`flex h-52 items-center justify-center bg-gradient-to-br ${product.accent} text-7xl`}>
                {product.emoji}
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-violet-700">
                    {product.badge}
                  </span>
                  <span className="text-sm text-amber-500">★ {product.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900">₹{product.price}</span>
                    <span className="ml-2 text-sm text-slate-400 line-through">₹{product.oldPrice}</span>
                  </div>
                  <Link
                    href="/products"
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: '🚚', title: 'Free delivery', text: 'On orders above ₹999' },
            { icon: '🛡️', title: 'Secure checkout', text: 'Protected payments and data encryption' },
            { icon: '↩️', title: 'Easy returns', text: 'Hassle-free within 7 days' },
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
