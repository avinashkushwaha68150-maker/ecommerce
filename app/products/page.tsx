import Link from 'next/link';
import { products, categories } from '@/data/products';
import { useMemo, useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Collection</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">All products</h1>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-violet-600"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              selectedCategory === category
                ? 'bg-slate-900 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
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
                <Link href="/cart" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
                  Add to cart
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-xl font-semibold text-slate-700">No products match your search.</p>
        </div>
      )}
    </main>
  );
}
