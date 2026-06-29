import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { useThemeStore } from '../store/themeStore'

interface Props {
    id: number
    name: string
    category: string
    price: number
    image: string
    rating: number
    reviews: number
}
function ProductCard({ id, name, category, price, image, rating, reviews }: Props) {
    const addItem = useCartStore((state) => state.addItem)
    const dark = useThemeStore((state) => state.dark)
    return (
        <div className={`group rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300 w-full ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <Link to={`/product/${id}`}>
            <div className={`overflow-hidden h-52 ${dark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            </Link>
            <div className="p-4">
                <span className="text-xs text-gray-400 uppercase tracking-wide">{category}</span>
                <Link to={`/product/${id}`}>
                    <h2 className={`font-semibold mt-1 hover:text-gray-400 transition-colors ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {name}
                    </h2>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-gray-500 text-xs">{rating} ({reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <span className={`text-lg font-bold ${dark ? 'text-white' : 'text-black'}`}>${price}</span>
                    <button
                        onClick={() => addItem({ id, name, price, image, quantity: 1 })}
                        className="bg-black text-white text-sm px-3 py-1.5 rounded-lg hover:bg-gray-700 active:scale-95 transition-all"
                    >
                     Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard