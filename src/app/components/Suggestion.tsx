import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface ImageData {
    results: string
}

interface Props {
    setFilterImage: (images: ImageData[]) => void;
    setLoading: any
}


export default function Suggestion({ setFilterImage, setLoading }: Props) {
    const [collection, setCollection] = useState('')

    const handleCollection = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos?query=${collection}&per_page=20&page=1&client_id=6_OXlV7zPBLfaXW4LnZGl3hGCgi738xG3nDyjfAZNpA`)
            setFilterImage(res.data.results)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }

    const handleValue = (e:any) =>{
        setCollection(e.target.value)
    }

    useEffect(() =>{
        handleCollection()
    },[collection])
    return (
        <div>
            <div className='flex justify-center items-center mt-5 gap-4 max-md:hidden'>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer' onClick={() =>  setCollection('nature')}>Nature</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer' onClick={() =>  setCollection('wallpapers')}>Wallpapers</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer' onClick={() =>  setCollection('travel')}>Travel</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer' onClick={() =>  setCollection('cars')}>Cars</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer' onClick={() =>  setCollection('3d render')}>3D Renders</li>
                <li className=' list-none bg-gray-100 p-3 cursor-pointer' onClick={() =>  setCollection('street photography')}>Street Photography</li>
            </div>
            <div className="p-3 pt-5 md:hidden max-md:block">
                <span>Filter by: </span>
                <select className='border p-1' onChange={handleValue}>
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
