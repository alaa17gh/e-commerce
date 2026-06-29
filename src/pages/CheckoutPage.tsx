import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { useThemeStore } from '../store/themeStore'

function CheckoutPage() {
    const dark = useThemeStore((state) => state.dark)
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    })
    const [promo, setPromo] = useState('')
    const [discount, setDiscount] = useState(0)
    const [promoError, setPromoError] = useState('')
    const navigate = useNavigate()
    const clearCart = useCartStore((state) => state.clearCart)
    
    const items = useCartStore((state) => state.items)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discountedTotal = total - (total * discount) / 100
    function applyPromo() {
        if (promo === 'SAVE10') {
            setDiscount(10)
            setPromoError('')
        } else if (promo === 'SAVE20') {
            setDiscount(20)
            setPromoError('')
        } else {
            setDiscount(0)
            setPromoError('Invalid promo code')
        }
    }
    return(
        <div className="max-w-lg mx-auto px-6 py-12">
            <h1 className={`text-3xl font-bold mb-8 ${dark ? 'text-white' : 'text-gray-900'}`}>Checkout</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                const newErrors = {
                    name: form.name ? '' : 'Name is required',
                    email: form.email ? '' : 'Email is required',
                    address: form.address ? '' : 'Address is required',
                    city: form.city ? '' : 'City is required',
                    zip: form.zip ? '' : 'Zip code is required',
                }
                setErrors(newErrors)
                const hasErrors = Object.values(newErrors).some((err) => err !== '')
                if (hasErrors) return
                clearCart()
                navigate('/order-confirmed')
                }}>
                <div className="flex flex-col gap-1 mb-4">
                    <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                    <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value})}
                    placeholder="John Doe"
                    className={`border rounded-xl px-4 py-2 outline-none focus:border-black transition-colors ${dark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-200'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value})}
                    placeholder="John@example.com"
                    className={`border rounded-xl px-4 py-2 outline-none focus:border-black transition-colors ${dark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-200'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Address</label>
                    <input type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value})}
                    placeholder="123 Main St"
                    className={`border rounded-xl px-4 py-2 outline-none focus:border-black transition-colors ${dark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-200'}`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>City</label>
                    <input type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value})}
                    placeholder="New York"
                    className={`border rounded-xl px-4 py-2 outline-none focus:border-black transition-colors ${dark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-200'}`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Zip Code</label>
                    <input type="text"
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value})}
                    placeholder="10001"
                    className={`border rounded-xl px-4 py-2 outline-none focus:border-black transition-colors ${dark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-200'}`}
                    />
                    {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Promo Code</label>
                    <div className="flex gap-2">
                        <input
                        type="text"
                        value={promo}
                        onChange={(e) => setPromo(e.target.value)}
                        placeholder="e.g. SAVE10"
                        className="border border-gray-200 rounded-xl px-4 py-2 outline-none focus:border-black transition-colors flex-1"
                        />
                        <button
                        type="button"
                        onClick={applyPromo}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium"
                        >
                            Apply
                        </button>
                    </div>
                    {promoError && <p className="text-red-500 text-xs mt-1">{promoError}</p>}
                    {discount > 0 && <p className="text-green-500 text-xs mt-1">🎉 {discount}% discount applied!</p>}
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                        <div className="flex justify-between text-sm text-green-500 mb-1">
                            <span>Discount ({discount}%)</span>
                            <span>-${(total * discount / 100).toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between font-bold text-gray-900 mt-2 pt-2 border-t border-gray-200">
                        <span>Total</span>
                        <span>${discountedTotal.toFixed(2)}</span>
                    </div>
                </div>
                
                <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors mt-6">
                    Place Order
                </button>
            </form>
            </div>
    )
}

export default CheckoutPage