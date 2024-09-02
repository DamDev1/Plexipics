import axios from 'axios';
import React, {useState } from 'react';

interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface Props {
  setFilterImage: (images: ImageData[]) => void;
  setLoading: (loading: boolean) => void;
}

export default function Hero({ setFilterImage, setLoading }: Props) {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=20&page=1&client_id=6_OXlV7zPBLfaXW4LnZGl3hGCgi738xG3nDyjfAZNpA`);
      setFilterImage(res.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='w-full h-[400px] overflow-hidden relative'>
        <img
          src="https://images.unsplash.com/photo-1724271364272-fb23971633f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className='absolute p-[1rem] flex gap-2' style={{ transform: "translate(-50%, -50%)", top: '50%', left: "50%" }}>
          <input
            type="text"
            className='w-[50vw] p-3'
            placeholder='Search your image'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='p-3 bg-blue-700 text-white' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
