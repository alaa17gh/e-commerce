import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { useThemeStore } from '../store/themeStore'

function CartPage() {
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const dark = useThemeStore((state) => state.dark)

    if (items.length === 0 ) {
        return (
            <div className="max-w-2xl mx-auto px-10 py-20 text-center">
                <p className="text-6xl mb-4">🛒</p>
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Your cart is empty</h2>
                <p className="text-gray-400 mt-2">Add something from the shop!</p>
                <Link
                to="/"
                className="mt-6 inline-block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        )
    }
    return (
        <div className="max-w-3xl mx-auto px-10 py-12">
            <h1 className={`text-3xl font-bold mb-8 ${dark ? 'text-white' : 'text-gray-900'}`}>Your Cart</h1>

            <div className="flex flex-col gap-4">
                {items.map((item) => (
                    <div key={item.id} className={`flex items-center gap-4 border rounded-2xl p-4 shadow-sm ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-50" />
                        <div className="flex-1">
                            <h2 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>{item.name}</h2>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity === 1}
                             className={`w-6 h-6 rounded-full border transition-colors disabled:opacity-30 ${dark ? 'border-gray-600 text-gray-300 hover:border-gray-400' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                             >
                                -
                            </button>
                            <span className={`text-sm w-4 text-center ${dark ? 'text-white' : ''}`}>{item.quantity}</span>
                            <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className={`w-6 h-6 rounded-full border transition-colors ${dark ? 'border-gray-600 text-gray-300 hover:border-gray-400' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                            >
                                +
                            </button>
                        </div>
                        <span className={`font-bold ${dark ? 'text-white' : ''}`}>${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors ml-2 text-lg"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
            <div className={`mt-8 rounded-2xl p-6 ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className={`flex justify-between text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <Link to="/checkout" className="block w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 active:scale-95 transition-all text-center">
                    Checkout
                </Link>
                <Link to="/" className="block text-center text-sm text-gray-400 hover:text-black mt-4 transition-colors">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default CartPage