import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between p-5'>
      <div className="logo font-bold text-[1.2rem]">
        Plexi<span className='text-blue-600'>pics</span>
      </div>

      <nav className='flex items-center gap-8'>
        <li className='list-none cursor-pointer'>Nature</li>
        <li className='list-none cursor-pointer'>Cars</li>
        <li className='list-none cursor-pointer'>Mountains</li>
        <li className='list-none cursor-pointer'>Houses</li>
      </nav>
    </div>
  )
}
