import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmedPage from './pages/OrderConfirmedPage'
import { useThemeStore } from './store/themeStore'

function App() {
  const dark = useThemeStore((state) => state.dark)
  return (
    <BrowserRouter>
    <div className={`min-h-screen ${dark ? 'bg-gray-900' : 'bg-white'}`}>
    <Navbar />
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App