"use client"
import { Cart } from '@/components/Cart';
import React from 'react'
import { Heading } from '../Home';
import { ButtonOutLine } from '@/components/ButtonOutLine';


const page = () => {
    return (
        <div
            className="pt-[80px] pb-[140px] box-border 2xl:mx-auto max-w-[1440px] px-[130px]"
        >
            <div className="w-full h-fit" >
                <div className="w-full h-fit flex flex-row justify-between" >
                    <p className="font-poppins text-[20px] not-italic font-normal leading-[26px]" >Wishlist (4)</p>
                    <ButtonOutLine text="Move All To Bag" />
                </div>

                <div
                    className="mt-[60px] w-full h-fit grid grid-cols-4 gap-[30px]"
                >
                    <Cart isDiscount={true} isInWishlist={true} />
                    <Cart isDiscount={true} isInWishlist={true} />
                    <Cart isDiscount={true} isInWishlist={true} />
                    <Cart isDiscount={true} isInWishlist={true} />
                    <Cart isDiscount={true} isInWishlist={true} />
                </div>
            </div>

            <div className="mt-[80px] w-full h-fit" >
                <div className="w-full flex flex-row justify-between items-center" >
                    <Heading header="Just For You" text="" />
                    <ButtonOutLine text="See All" />
                </div>

                <div className="mt-[75px] grid grid-cols-4 gap-[30px]" >
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={false} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                </div>
            </div>
        </div>
    )
}

export default page;
