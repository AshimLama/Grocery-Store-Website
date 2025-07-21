import React from 'react'
import HeroImg from "../assets/Hero1.png"

const Hero = () => {
  return (
    <section className='relative bg-green-600 text-white mt-12 md:mt-15'>
        <div className='max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6 md:px-0 gap-7'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Fresh <span className='text-[#ED8830]'> Groceries </span>Delivered to your Door</h1>
                <p className='text-lg mb-6'>Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!</p>
                <div className='flex flex-wrap gap-4'>
                    <button className='bg-white text-green-600 hover:bg-gray-300 cursor-pointer rounded-full px-3 py-1'>Shop Now</button>
                    <button className='text-white border-white bg-green-700 cursor-pointer hover:bg-orange-400 rounded-full px-3 py-2'>Learn More</button>
                </div>
            </div>
            <div className='relative flex justify-center'>
                <div className='inset-0 bg-white/20 rounded-lg backdrop-blur-sm'>
                    <img src={HeroImg} alt="" className='z-10' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
