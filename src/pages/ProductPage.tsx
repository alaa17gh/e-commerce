import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import type { Product } from '../data/products'
import { useCartStore } from '../store/cartStore'
import type { CartItem } from '../store/cartStore'
import { useThemeStore } from '../store/themeStore'

function ProductPage() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))
    const addItem = useCartStore((state) => state.addItem)

    if(!product) {
        return (
            <div className="p-10">
                <p>Product not found.</p>
                <Link to="/" className="text-blue-500 underline">Back to shop</Link>
            </div>
        )
    }
    return <ProductDetail product={product} addItem={addItem} />
}

function ProductDetail({ product, addItem }: { product: Product, addItem: (item: CartItem) => void }) {
    const [mainImage, setMainImage] = useState(product.image)
    const dark = useThemeStore((state) => state.dark)

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <Link to="/" className={`text-sm ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>← Back to shop</Link>
            <div className="grid grid-cols-2 gap-10 mt-6">
                <div>
                    <img src={mainImage} alt={product.name} className="w-full rounded-2xl object-cover h-96" />
                    <div className="flex gap-2 mt-3">
                        {[product.image,
                            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
                            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
                        ].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`view ${index}`}
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all ${
                                    mainImage === img ? 'border-black' : 'border-transparent'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-400">{product.category}</p>
                    <h1 className={`text-3xl font-bold mt-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{product.name}</h1>
                    <p className={`mt-4 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{product.description}</p>
                    <p className={`text-2xl font-bold mt-6 ${dark ? 'text-white' : 'text-gray-900'}`}>${product.price}</p>
                    <button
                        onClick={() => addItem({ ...product, quantity: 1 })}
                        className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
