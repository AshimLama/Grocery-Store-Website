import React from 'react'
import Logo from "../assets/Logo.png"
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
      <div className='mx-auto flex justify-between items-center px-6 py-3 fixed top-0 z-20 bg-green-100 w-full border border-gray-100 shadow-xl lg:px=[180px]'>
            {/*logo section */}
            <img src={Logo} alt="" className='md:w-52 w-40 mx-40' />
            {/* menu section   */}
            <nav className='flex gap-5'>
                <ul className='text-xl font-semibold md:flex items-center gap-7 hidden cursor-pointer'>
                    <li className='hover:text-orange-400'>Home</li>
                    <li className='hover:text-orange-400'>Shop</li>
                    <li className='hover:text-orange-400'>About</li>
                    <li className='hover:text-orange-400'>Contact</li>
                </ul>
                <ShoppingCart className='w-6 h-6'/>
            </nav>
      </div>
    </div>
  )
}

export default Navbar
