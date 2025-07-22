import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartComp from './CartComp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <div className='mx-auto flex justify-between items-center px-6 py-3 fixed top-0 z-20 bg-green-100 w-full border border-gray-100 shadow-xl lg:px=[180px]'>
            {/*logo section */}
            <Link to={'/'}><img src={Logo} alt="" className='md:w-52 w-40 mx-40' /></Link>
            {/* menu section   */}
            <nav className='flex gap-5'>
                <ul className='text-xl font-semibold md:flex items-center gap-7 hidden cursor-pointer'>
                    <Link to={'/'}><li className='hover:text-orange-400'>Home</li></Link>
                    <Link to={'/shop'}><li className='hover:text-orange-400'>Shop</li></Link>
                    <Link to={'/about'}><li className='hover:text-orange-400'>About</li></Link>
                    <Link to={'/contact'}><li className='hover:text-orange-400'>Contact</li></Link>
                </ul>
                <Link className='relative' onClick={()=>setIsOpen(true)}>
                  <ShoppingCart className='w-6 h-6'/>
                  <span className='absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>0</span>
                </Link>
            </nav>
      </div>
      <CartComp isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default Navbar
