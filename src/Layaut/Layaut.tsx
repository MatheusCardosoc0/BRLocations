import React from 'react'
import Navbar from '../pages/components/Navbar'

const Layaut = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='flex justify-center mx-auto'>
      <Navbar />

      <div className='w-full pt-20'>
        {children}
      </div>
    </main>
  )
}

export default Layaut