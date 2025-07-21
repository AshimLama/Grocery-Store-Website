import React from 'react'
import { products } from '../Utils/Data'
import ProductsCard from './ProductsCard'

const FeaturedProducts = () => {
  return (
    <section className='py-12 px-3 md:px-0'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold mb-8 text-[#ED8830] text-center'>Featured Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 md:px-8'>
                {
                    products.slice(0,5).map((product)=>{
                        return <ProductsCard key={product.id} product={product}/>
                    })
                }
            </div>
            <div className='mt-8 text-center'>
                <button className='rounded-full border py-2 px-3 bg-white  hover:bg-[#ED8830]'>View all Products</button>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts
