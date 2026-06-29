import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useState } from 'react'
import { useThemeStore } from '../store/themeStore'


function ShopPage() {
    const dark = useThemeStore((state) => state.dark)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const [sort, setSort] = useState('default')

    const filtered = products
    .filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === 'All' || p.category === category
        return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
        if (sort === 'low') return a.price - b.price
        if (sort === 'high') return b.price - a.price
        return 0
    })
    return (
        <div className="max-w-6xl mx-auto px-10 py-12">
            <div className="mb-10">
                <h1 className={`text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>New Arrivals</h1>
                <p className="mt-2 text-lg text-gray-400">Minimal. Quality. Timeless.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className={`border rounded-xl px-4 py-2 outline-none transition-colors text-sm ${dark ? 'bg-gray-800 border-gray-600 text-gray-200' : 'border-gray-200 text-gray-600'}`}
                >
                    <option value="default">Sort: Default</option>
                    <option value="low">Price: Low → High</option>
                    <option value="high">Price: High → Low</option>
                </select>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`border rounded-xl px-4 py-2 w-full max-w-sm outline-none transition-colors ${dark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-200'}`}
                />
                <div className="flex gap-2">
                    {['All', 'Footwear', 'Bags', 'Accessories'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            category === cat
                            ? 'bg-black text-white border-black'
                            : dark ? 'bg-gray-800 text-gray-300 border-gray-600 hover:border-gray-400' : 'bg-white text-gray-600 border-gray-300 hover:border-black'
                        }`}
                      >
                        {cat}
                    </button>
                    ))}
                </div>
            </div>
            {filtered.length === 0 ? (
                <p className="text-gray-400 text-center py-20">No products found.</p>
            ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
                <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              rating={product.rating}
              reviews={product.reviews}
            />
            ))}
        </div>
        )}
        </div>
    )
}

export default ShopPage