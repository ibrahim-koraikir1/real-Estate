import React from 'react'
import value from '../assets/value.jpg'
import Accordion from './Accordion'
export default function Value() {
  return (
    <section className='mx-7 my10  flex flex-col justify-center items-center'>
       <h1 className='text-lg'>our value to you </h1>
        <div className='w-full'>
           
             <Accordion/>
        </div>
       
    </section>
  )
}
