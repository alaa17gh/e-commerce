import { Link } from 'react-router-dom'
import { useThemeStore } from '../store/themeStore'

function OrderConfirmedPage() {
    const dark = useThemeStore((state) => state.dark)
    return (
        <div className="max-w-lg mx-auto px-6 py-20 text-center">
            <p className="text-6xl mb-4">🎉</p>
            <h1 className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Order Confirmed!</h1>
            <p className="text-gray-400 mt-3">Thanks for your purchase. Your order is on its way.</p>
            <Link
            to="/"
            className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
                Back to Shop
            </Link>
        </div>
    )
}

export default OrderConfirmedPage
