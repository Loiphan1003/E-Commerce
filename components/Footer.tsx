import React from 'react'
import { SendMail } from './SendMail'

export const Footer = () => {
    return (
        <div
            className="w-full h-fit bg-black"
        >
            <div
                className="md:mx-auto max-w-[1440px] h-[336px] flex flex-row justify-between bg-black text-text pt-[80px]
            px-[135px] box-border"
            >
                <div>
                    <p className="font-inter text-2xl font-bold not-italic leading-6 tracking-[0.72px]" >Exclusive</p>
                    <p className="mt-[24px] font-poppins font-medium text-xl not-italic leading-7" >Subscribe</p>
                    <p className="mt-[24px] font-poppins text-base font-normal not-italic leading-6" >Get 10% off your first order</p>
                    <SendMail />
                </div>

                <div>
                    <p className="font-poppins text-[20px] not-italic font-medium leading-7" >Support</p>
                    <ul
                        className="mt-[24px] w-[175px] font-poppins flex flex-col gap-[16px]
                    text-base font-normal not-italic"
                    >
                        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                <div>
                    <p className="font-poppins text-[20px] not-italic font-medium leading-7" >Account</p>
                    <ul
                        className="mt-[24px] w-[175px] font-poppins flex flex-col gap-[16px]
                    text-base font-normal not-italic"
                    >
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                <div>
                    <p className="font-poppins text-[20px] not-italic font-medium leading-7" >Quick Link</p>
                    <ul
                        className="mt-[24px] w-[175px] font-poppins flex flex-col gap-[16px]
                    text-base font-normal not-italic"
                    >
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
