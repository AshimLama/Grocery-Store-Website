import React from 'react'
import { CgClose } from 'react-icons/cg'

const CartComp = ({isOpen, onClose}) => {
  return (
    <div className={`fixed overflow-y-scroll rop-0 right-0 h-full w-[400px] bg-gray-100 shadow-lg p-4 trasform z-50 ${isOpen ? 'translate-x-0':'translate-x-full'} transition-transform duration-300`}>
        <h2 className='text-4xl font-bold mb-4 flex justify-between'>
            My Cart <button onClick={onClose} className='text-red-500 cursor-pointer'><CgClose/></button>
        </h2>
      Hey! Your cart is empty.
    </div>
  )
}

export default CartComp
