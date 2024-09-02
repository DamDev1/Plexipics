"use client";
import React, { useState } from 'react';
import PopupModal from './Popup';

interface ImageUrl {
  regular: string;
  full: string;
  // Add other properties of the URL object if needed
}

interface ImageData {
  id: string;
  urls?: ImageUrl;  // Make the url property optional
}

interface Props {
  filterImages: ImageData[];
  loading: boolean
}

interface PopupData{
  urls?: ImageUrl,
}

export default function Images({ filterImages, loading }: Props) {
  const [passData, setPassData] = useState<PopupData | null >(null)
  const [isOpen, setIsOpen] = useState(false)

  const handlePopup = (data:PopupData) =>{
    setPassData(data)
    setIsOpen(true)
  } 

  const handleClosePopup = () => {
    setIsOpen(false);
    setPassData(null);
  };
  return (
    <div className='p-10 grid grid-cols-1 gap-3 md:grid-cols-4 max-md:p-3'>
      <PopupModal isOpen={isOpen} passData={passData} onClose={handleClosePopup}/>
      {loading ? "loading" : <>
        {filterImages && filterImages.map((data, index) => (
          <div key={data.id} className='w-full h-[350px] bg-[rgba(255, 255, 255, 0.1)] image-container'>
            {/* Check if url and url.regular exist before rendering the image */}
            {data.urls?.regular ? (
              <img src={data.urls.regular} alt={`Image ${index}`} className='w-full h-full object-cover hover:opacity-70 cursor-pointer' onClick={() => handlePopup(data)}/>
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </>}
    </div>
  );
}
