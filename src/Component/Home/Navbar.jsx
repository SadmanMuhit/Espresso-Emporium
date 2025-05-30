import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-amber-900 py-[15px]'>
        <div className='container m-auto flex justify-center items-center gap-4'>
            <img src="/logo.png" alt="" className='w-[75px] h-[90px]'/>
            <p className='text-6xl font-normal text-white font-rancho'>Espresso Emporium</p>
        </div>
    </nav>
    </>
)
}

export default Navbar
