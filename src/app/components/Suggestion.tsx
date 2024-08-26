import React from 'react'

export default function Suggestion() {
    return (
        <div>
            <div className='flex justify-center items-center mt-5 gap-4 max-md:hidden'>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer'>Nature</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer'>Wallpapers</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer'>Travel</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer'>Cars</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer'>3D Renders</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer'>Street Photography</li>
            </div>
            <div className="p-3 pt-5 md:hidden max-md:block">
                <span>Filter by: </span>
                <select className='border p-1'>
                    <option value="nature">Nature</option>
                    <option value="wallpapers">Wallpapers</option>
                    <option value="travel">Travel</option>
                    <option value="cars">Cars</option>
                    <option value="3d_render">3D Renders</option>
                    <option value="street_photography">Street Photography</option>
                </select>
            </div>
        </div>
    )
}
