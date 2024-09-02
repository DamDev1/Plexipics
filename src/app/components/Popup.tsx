import Link from 'next/link';
import React from 'react';

interface ImageUrl {
    full: string;
    regular: string;
}

interface LinksUrls {
    download: string;
}

interface UserInfo {
    username: string;
    name: string;
    profile_image: UserProfile;
}

interface UserProfile{
    small: string;
}

interface ImageData {
    urls?: ImageUrl;
    alt_description?: string;
    links?: LinksUrls;
    user?: UserInfo;
    description?: string;
}

interface PopupModalProps {
    isOpen: boolean;
    passData: ImageData | null;
    onClose: () => void;
}

export default function PopupModal({ isOpen, passData, onClose }: PopupModalProps) {
    if (!isOpen || !passData) return null;

    return (
        <div
            className='w-[100%] fixed h-[100vh] bg-[rgba(0,0,0,0.5)] top-0 left-0 z-10 flex items-center justify-center'
            onClick={onClose} // Close modal when clicking outside the modal content
            style={{ display: `${!isOpen ? 'none' : 'flex'}` }}
        >
            <div
                className='w-[50rem] h-[30rem] bg-white rounded grid grid-cols-2 overflow-y-scroll'
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal content
            >
                <div className='col-span-2 relative'>
                    <div className='absolute top-5 right-3 flex gap-3 items-center justify-center'>
                        <Link href={'#'} download={passData.links?.download} className='text-white bg-green-500 p-2 rounded'>Download</Link>
                        <button onClick={onClose} className='text-[2rem] mt-[-0.5rem]'>&times;</button>
                    </div>
                    <div className='grid grid-cols-1 p-3'>
                        <div className='mt-2'>
                            <div className="flex gap-2 items-center">
                                <div className="w-[2rem] h-[2rem] rounded-full overflow-hidden">
                                    <img src={passData.user?.profile_image?.small} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='text-sm font-semibold'>{passData.user?.name}</h2>
                                    <p className='text-sm'>{passData.user?.username}</p>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h2 className='font-bold text-[1.2rem]'>Nature Images</h2>
                                <p>{passData.description == null ? (passData.alt_description) : (passData.description)}</p>
                            </div>
                        </div>
                        <div className='mt-5'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
