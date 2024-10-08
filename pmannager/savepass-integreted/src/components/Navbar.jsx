import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-around items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-red-500"> &lt;</span>
          Save
          <span className="text-red-500">Pass/&gt;</span>
        </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">home</a>
            <a className='hover:font-bold' href="/">content</a>
            <a className='hover:font-bold' href="/">about</a>
          </li>
        </ul> */}
        <a href='https://github.com/amanmeena14/' target='_blank' rel='noopener noreferrer'>
          <button className='text-white bg-red-700 my-5 mx-2 rounded-full flex items-center ring-white ring-1'>
            <img className="invert p-1 w-10" src="/icons/github.svg" alt="github logo" />
            <span className='font-bold px-2'>GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
