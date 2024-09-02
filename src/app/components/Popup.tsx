import Link from 'next/link';
import React from 'react';

interface ImageUrl {
    full: string;
    regular: string;
}

interface LinksUrls{
    download: string;
}

interface ImageData {
    urls?: ImageUrl;
    alt_description?: string;
    links?: LinksUrls;
}

interface PopupModalProps {
    isOpen: boolean;
    passData: ImageData | null;
    onClose: () => void;
}

export default function PopupModal({ isOpen, passData, onClose }: PopupModalProps) {
    if (!isOpen || !passData) return null;

    console.log(passData.links?.download)



    return (
        <div
            className='w-[100%] fixed h-[100vh] bg-[rgba(0,0,0,0.5)] top-0 left-0 z-10 flex items-center justify-center'
            onClick={onClose} // Close modal when clicking outside the modal content
            style={{ display: `${!isOpen ? 'none' : 'flex'}` }}
        >
            <div
                className='w-[50rem] h-[30rem] bg-white rounded grid grid-cols-2 overflow-hidden'
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal content
            >
                <div className='col-span-2 relative'>
                    <button onClick={onClose} className='absolute top-3 right-3 text-black bg-gray-200 p-1 rounded'>Close</button>
                    <div className='grid grid-cols-2 '>
                        <div>
                            {passData.urls?.full ? (
                                <img
                                    src={passData.urls.full}
                                    alt="Selected"
                                    className='w-full h-full object-cover rounded'
                                />
                            ) : (
                                <p className='text-center'>No image available</p>
                            )}
                        </div>

                        <div className='p-5'>
                            <h1 className='mt-10 font-bold text-[1.1rem]'>{passData.alt_description}</h1>
                            <Link href={'#'} download={passData.links?.download} className='bg-green-600 p-2 text-white rounded-lg cursor-pointer'>Download</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
