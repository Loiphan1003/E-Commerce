"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export const WishlistButton = () => {

    const router = useRouter();

    return (
        <div 
            className="hover:cursor-pointer relative" 
            onClick={() => router.push('/wishlist')}
        >
            <div
                className="absolute w-4 h-4 rounded-[50%] bg-secondary_2 right-0
                flex justify-center items-center"
            >
                <p
                    className="text-text font-poppins text-[12px] not-italic font-normal
                    leading-[18px]"
                >
                    2
                </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}
