import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

export default function Logose() {
  return (
    <section className='mx-7 my-10'>
    <div className=' grid  gap-3 grid-cols-2  lg:grid-cols-4'>
        <div className='opacity-20 hover:opacity-70 cursor-pointer'><img src={logo1}/></div>
        <div className='opacity-20 hover:opacity-70 cursor-pointer'><img src={logo2}/></div>
        <div className='opacity-20 hover:opacity-70 cursor-pointer'><img src={logo3}/></div>
        <div className='opacity-20 hover:opacity-70 cursor-pointer'><img src={logo4}/></div>
    </div>
    </section>
  )
}
