"use client";
import React from 'react';

interface ImageUrl {
  regular: string;
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

export default function Images({ filterImages, loading }: Props) {
  return (
    <div className='p-10 grid grid-cols-1 gap-3 md:grid-cols-4 max-md:p-3'>
      {loading ? "loading" : <>
        {filterImages && filterImages.map((data, index) => (
          <div key={data.id} className='w-full h-[350px] bg-[rgba(255, 255, 255, 0.1)] image-container'>
            {/* Check if url and url.regular exist before rendering the image */}
            {data.urls?.regular ? (
              <img src={data.urls.regular} alt={`Image ${index}`} className='w-full h-full object-cover' />
            ) : (
              <p>No image available</p>  // Placeholder if the image is missing
            )}
          </div>
        ))}
      </>}
    </div>
  );
}
