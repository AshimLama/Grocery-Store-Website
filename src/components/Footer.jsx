import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-12 px-4 md:px-0 '>
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <h3 className='text-2xl font-semibold text-[#ED8830]'>Fresh Mart</h3>
                    <p className='mb-4'>Your one stop shop for fresh groceries delivered to your doorstep.</p>
                    <div className='mt-3'>
                        <h3 className='font-medium mb-4'>Follow Us</h3>
                        <div className='flex space-x-4'>
                            <FaFacebook className='w-5 h-5 text-white'/>
                            <FaInstagram className='w-5 h-5 text-white'/>
                            <FaTwitter className='w-5 h-5 text-white'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-fold mb-0.5 font-semibold text-[#ED8830]'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>About Us</li>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>Contact Us</li>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>FAQ Us</li>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-fold mb-0.5 font-semibold text-[#ED8830]'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>About Us</li>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>Contact Us</li>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>FAQ Us</li>
                        <li className='hover:text-green-400 transition-all cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-4 text-[#ED8830]'>Contact</h3>
                    <p className='mb-2'>Grocery St, Kathmandu</p>
                    <p className='mb-2'>Phone:01-4562389</p>
                    <p className='mb-2'>Email: ashimlama36@gmail.com</p>
                </div>
            </div>
            <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
                <p>&copy; {new Date().getFullYear()} FreshMart. ALl rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
