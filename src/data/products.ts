
export const products = [
  {
    id: 1,
    name: 'White Sneakers',
    category: 'Footwear',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    description: 'Clean, minimal sneakers for everyday wear. Comfortable all-day fit.',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Leather Bag',
    category: 'Bags',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    description: 'Genuine leather bag with adjustable strap and multiple pockets.',
    rating: 4.8,
    reviews: 86,
  },
  {
    id: 3,
    name: 'Minimalist Watch',
    category: 'Accessories',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Stainless steel case with a clean dial and genuine leather strap.',
    rating: 4.9,
    reviews: 307,
  },
  {
    id: 4,
    name: 'Canvas Backpack',
    category: 'Bags',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    description: 'Durable canvas backpack with laptop compartment and water bottle pocket.',
    rating: 4.6,
    reviews: 214,
  },
  {
    id: 5,
    name: 'Running Shoes',
    category: 'Footwear',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    description: 'Lightweight running shoes with responsive cushioning for long distances.',
    rating: 4.7,
    reviews: 389,
  },
  {
    id: 6,
    name: 'Sunglasses',
    category: 'Accessories',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    description: 'UV400 polarized lenses with a slim acetate frame.',
    rating: 4.4,
    reviews: 97,
  },
  {
    id: 7,
    name: 'Wool Beanie',
    category: 'Accessories',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400',
    description: 'Soft merino wool beanie, perfect for cold weather.',
    rating: 4.3,
    reviews: 156,
  },
  {
    id: 8,
    name: 'Tote Bag',
    category: 'Bags',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
    description: 'Sturdy cotton tote with interior zip pocket and reinforced handles.',
    rating: 4.5,
    reviews: 73,
  },
  {
    id: 9,
    name: 'Leather Boots',
    category: 'Footwear',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400',
    description: 'Full-grain leather boots with a rubber sole and side zip.',
    rating: 4.8,
    reviews: 441,
  },
]

export type Product = {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  rating: number
  reviews: number
}