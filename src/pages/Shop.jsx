import React, { useState } from 'react'
import { products } from '../Utils/Data';
import ProductsCard from '../components/ProductsCard';

const Shop = () => {
    const [priceRange, setPriceRange] = useState([0,500]);
  return (
    <div className='max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 mt-24 h-max'>
        {/* filter section */}
        <div className='col-span-1 p-4 bg-gray-100 h-max rounded-lg fixed w-[280px] mb-10 hidden md:block'>
            <h2 className='text-lg font-semibold mb-4'>Filters</h2>
            <input placeholder='Search...' className='mb-4 bg-white p-2 w-full rounded-md' />
            <select className='w-full p-2 border rounded mb-4'>
                <option value="">All Categories</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Bakery">Bakery</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Meat">Meat</option>
            </select>
            <div className='mb-4'>
                <label>Price Range: {priceRange[0]}-{priceRange[1]}</label>
                <input type="range" min="0" max="500" value={priceRange[1]} 
                onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])}
                />
            </div>
            <button className='bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer'>Reset Filters</button>
        </div>
        {/* products section */}
        <div className='col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0'>
            {
                products.map((product)=>{
                    return <ProductsCard key={product.id} product={product}/>
                })
            }
        </div>
    </div>
  )
}

export default Shop
