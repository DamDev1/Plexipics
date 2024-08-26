import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  setFilterImage: (images: ImageData[]) => void;
}

export default function Hero({setFilterImage}:Props) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async() =>{
    try {
      const res = await axios.get('https://api.unsplash.com/photos/?client_id=6_OXlV7zPBLfaXW4LnZGl3hGCgi738xG3nDyjfAZNpA'+"&&page=1&query=car")
      setFilterImage(res.data)
    } catch (error) {
      
    }
  }
  return (
    <div>
      <div className='w-full h-[250px] overflow-hidden relative'>
        <img src="https://images.unsplash.com/photo-1724271364272-fb23971633f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute p-[1rem] flex gap-2' style={{transform:"translate(-50%, -50%)", top: '50%', left:"50%"}}>
          <input type="text"
            className='w-[50vw] p-3'
            placeholder='Search your image'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
          <button className='p-3 bg-blue-700 text-white' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
