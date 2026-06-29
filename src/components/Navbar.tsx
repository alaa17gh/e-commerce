import { Link, useLocation } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { useThemeStore } from '../store/themeStore'


function Navbar() {
    const items = useCartStore((state) => state.items)
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const { pathname } = useLocation()
    const dark = useThemeStore((state) => state.dark)
    const toggleDark = useThemeStore((state) => state.toggleDark)
    return (
        <nav className={`sticky top-0 z-50 border-b px-10 py-4 flex items-center justify-between ${dark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            <Link to="/" className={`text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-black'}`}>
                STORE
            </Link>
            <div className={`flex items-center gap-6 text-sm ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
                <Link
                    to="/"
                    className={pathname === '/' ? 'text-black font-medium' : 'hover:text-black transition-colors'}
                >
                  Shop
                </Link>
            </div>
            <button
            onClick={toggleDark}
            className="text-lg hover:scale-110 transition-transform"
            >
                {dark ? '☀️' : '🌙'}
            </button>
            <Link to="/cart"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Cart
                {totalItems > 0 && (
                    <span className="bg-white text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </Link>
        </nav>
    )
}

export default Navbar
