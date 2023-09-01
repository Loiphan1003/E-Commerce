import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '../app/images/Banner.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const SliderBanner = () => {

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    const slideBanner = useSelector((state: RootState) => state.WebPageInfo.bannerSlice);

    return (
        <div
            className="max-w-[892px] h-[344px] pb-[30px] box-border bg-black"
        >
            <Slider {...settings}>
                {/* {slideBanner?.map((i) => (
                    <div 
                        key={i.id}
                        className="relative w-full h-full" 
                    >
                        <Image
                            src={i.imageAddress}
                            alt={i.description}
                            width={892}
                            height={339}
                            quality={80}
                            priority={true}
                        />
                    </div>
                ))} */}

                <div className="relative w-full h-full" >
                    <Image
                        src={Banner}
                        alt="Image 1"
                        quality={80}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="contain"
                        priority={true}

                    />

                    <div className="text-text absolute left-[67px] bottom-[51px] mt-[24px] flex flex-row items-center gap-2 hover:cursor-pointer">
                        <p className="font-poppins text-base not-italic font-medium underline" >Shop Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="relative w-full h-full" >
                    <Image
                        src={Banner}
                        alt="Image 1"
                        quality={80}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="contain"
                        priority={true}

                    />

                    <div className="text-text absolute left-[67px] bottom-[51px] mt-[24px] flex flex-row items-center gap-2 hover:cursor-pointer">
                        <p className="font-poppins text-base not-italic font-medium underline" >Shop Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="relative w-full h-full" >
                    <Image
                        src={Banner}
                        alt="Image 1"
                        quality={80}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="contain"
                        priority={true}

                    />

                    <div className="text-text absolute left-[67px] bottom-[51px] mt-[24px] flex flex-row items-center gap-2 hover:cursor-pointer">
                        <p className="font-poppins text-base not-italic font-medium underline" >Shop Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="relative w-full h-full" >
                    <Image
                        src={Banner}
                        alt="Image 1"
                        quality={80}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="contain"
                        priority={true}

                    />

                    <div className="text-text absolute left-[67px] bottom-[51px] mt-[24px] flex flex-row items-center gap-2 hover:cursor-pointer">
                        <p className="font-poppins text-base not-italic font-medium underline" >Shop Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
