import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';
import ProductDev from '../app/images/produc_dev.png';

interface CartProps {
    isDiscount: boolean,
    isInWishlist: boolean,
}

export const Cart = (props: CartProps) => {
    return (
        <div
            className="min-w-[270px] h-[350px]  group"
        >
            <div
                className="w-full h-[250px] bg-secondary rounded
                flex justify-center items-center relative hover:cursor-pointer"
            >
                {props.isDiscount && <div
                    className="w-fit h-fit bg-secondary_2 rounded px-3 pt-1 
                        absolute top-3 left-3"
                >
                    <p className="font-poppins text-text text-[12px] not-italic font-normal leading-[18px]" >-35%</p>
                </div>
                }

                <div
                    className="w-fit h-fit absolute top-3 right-3"
                >
                    {!props.isInWishlist &&
                        <div
                            className="w-[34px] h-[34px] rounded-[50%] flex justify-center items-center
                            bg-white hover:cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    }

                    {!props.isInWishlist &&
                        <div
                            className="mt-2 w-[34px] h-[34px] rounded-[50%] flex justify-center items-center
                            bg-white hover:cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    }

                    {props.isInWishlist &&
                        <div
                            className="w-[34px] h-[34px] rounded-[50%] flex justify-center items-center
                            bg-white hover:cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="black" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    }
                </div>


                <Image
                    width={172}
                    height={152}
                    src={ProductDev}
                    alt='Image product'
                    quality={80}
                    placeholder='blur'
                    loading='lazy'
                />

                <div
                    className="absolute bottom-0 w-[270px] h-[41px] 
                    bg-black justify-center items-center rounded-b-[4px] 
                    hidden group-hover:block hover:cursor-pointer"
                >
                    <p
                        className="text-white w-full text-center font-poppins text-base not-italic 
                        font-medium py-2 box-border"
                    >
                        Add To Cart
                    </p>
                </div>
            </div>

            <div
                className="w-full mt-[16px] font-poppins"
            >
                {/* name */}
                <p className="text-[14px] not-italic font-semibold leading-[21px]" >HAVIT HV-G92 Gamepad</p>
                {/* price */}
                <div className="mt-2 text-[16px] font-medium not-italic leading-6" >
                    <p className="inline-block text-secondary_2" >$120</p>
                    {props.isDiscount &&
                        <p className="ml-3 inline-block line-through" >$160</p>
                    }
                </div>
                {/* rate */}
                {!props.isInWishlist &&
                    <div
                        className="flex flex-row gap-2 items-center"
                    >
                        <ReactStars
                            count={5}
                            size={24}
                            value={4.5}
                            color2={'#ffd700'}
                        />
                        <p className="font-poppins text-[14px] not-italic font-semibold leading-[21px]" >(88)</p>
                    </div>
                }
            </div>
        </div>
    )
}
