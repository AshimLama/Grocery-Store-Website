import { ShoppingCart } from 'lucide-react'
import React from 'react'
import CartComp from './CartComp'

const ProductsCard = ({product}) => {
  return (
    <div className='overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg'>
      <div>
        <div className='aspect-square relative bg-gray-200'>
            <img src={product.image} alt={product.name}  className='object-cover w-full h-[195px]'/>
        </div>
        <div className='px-3'>
            <p className='text-sm mt-1 text-gray-500'>{product.category}</p>
            <h3 className='font-semibold text-sm mt-1 h-[40px] text-gray-800 line-clamp-2'>{product.name}</h3>
            <p className='text-sm text-gray-600 mt-1'>{product.quantity}</p>
            <p>NPR. {product.price?.toFixed(2)}</p>
        </div>
      </div>
      <div className='p-4 pt-1'>
        <button className='w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-2 rounded-lg cursor-pointer'><ShoppingCart className='w-4 h-4 mr-2'/> Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductsCard
