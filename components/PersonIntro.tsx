"use client"
import Image from 'next/image'
import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Test from '../app/images/image 46.png';
import IconLinkedin from '../app/images/Icon-Linkedin.png';
import IconInstargram from '../app/images/Icon-Instargram.png';


export const PersonIntro = () => {

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        variableWidth: false
    };

    return (
        <div 
            className="mt-[140px] 2xl:mx-auto max-w-[1440px] px-[130px] h-fit
            "
        >
            <Slider {...settings}>
                
                <div
                    className="max-w-[370px] h-[564px] relative"
                >
                    <div
                        className="w-full h-[391px] bg-secondary rounded"
                    >
                        <Image
                            className='m-auto'
                            src={Test}
                            alt='person image'
                            quality={80}
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>

                    <div className="mt-[32px] w-full" >
                        <p className=" text-[32px] not-italic font-medium leading-[30px] tracking-[1.28px]" >Tom Cruise</p>
                        <p className="mt-[8px] font-poppins text-base not-italic font-normal" >Founder & Chairman</p>

                        <div className="mt-[16px] w-full h-fit flex flex-row gap-[16px]" >
                            <Image
                                className="w-auto h-auto"
                                src={IconInstargram}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />

                            <Image
                                src={IconLinkedin}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-[370px] h-[564px] relative"
                >
                    <div
                        className="w-full h-[391px] bg-secondary rounded"
                    >
                        <Image
                            className='m-auto'
                            src={Test}
                            alt='person image'
                            quality={80}
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>

                    <div className="mt-[32px] w-full" >
                        <p className=" text-[32px] not-italic font-medium leading-[30px] tracking-[1.28px]" >Tom Cruise</p>
                        <p className="mt-[8px] font-poppins text-base not-italic font-normal" >Founder & Chairman</p>

                        <div className="mt-[16px] w-full h-fit flex flex-row gap-[16px]" >
                            <Image
                                className="w-auto h-auto"
                                src={IconInstargram}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />

                            <Image
                                src={IconLinkedin}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-[370px] h-[564px] relative"
                >
                    <div
                        className="w-full h-[391px] bg-secondary rounded"
                    >
                        <Image
                            className='m-auto'
                            src={Test}
                            alt='person image'
                            quality={80}
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>

                    <div className="mt-[32px] w-full" >
                        <p className=" text-[32px] not-italic font-medium leading-[30px] tracking-[1.28px]" >Tom Cruise</p>
                        <p className="mt-[8px] font-poppins text-base not-italic font-normal" >Founder & Chairman</p>

                        <div className="mt-[16px] w-full h-fit flex flex-row gap-[16px]" >
                            <Image
                                className="w-auto h-auto"
                                src={IconInstargram}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />

                            <Image
                                src={IconLinkedin}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-[370px] h-[564px] relative"
                >
                    <div
                        className="w-full h-[391px] bg-secondary rounded"
                    >
                        <Image
                            className='m-auto'
                            src={Test}
                            alt='person image'
                            quality={80}
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>

                    <div className="mt-[32px] w-full" >
                        <p className=" text-[32px] not-italic font-medium leading-[30px] tracking-[1.28px]" >Tom Cruise</p>
                        <p className="mt-[8px] font-poppins text-base not-italic font-normal" >Founder & Chairman</p>

                        <div className="mt-[16px] w-full h-fit flex flex-row gap-[16px]" >
                            <Image
                                className="w-auto h-auto"
                                src={IconInstargram}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />

                            <Image
                                src={IconLinkedin}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-[370px] h-[564px] relative"
                >
                    <div
                        className="w-full h-[391px] bg-secondary rounded"
                    >
                        <Image
                            className='m-auto'
                            src={Test}
                            alt='person image'
                            quality={80}
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>

                    <div className="mt-[32px] w-full" >
                        <p className=" text-[32px] not-italic font-medium leading-[30px] tracking-[1.28px]" >Tom Cruise</p>
                        <p className="mt-[8px] font-poppins text-base not-italic font-normal" >Founder & Chairman</p>

                        <div className="mt-[16px] w-full h-fit flex flex-row gap-[16px]" >
                            <Image
                                className="w-auto h-auto"
                                src={IconInstargram}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />

                            <Image
                                src={IconLinkedin}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-[370px] h-[564px] relative"
                >
                    <div
                        className="w-full h-[391px] bg-secondary rounded"
                    >
                        <Image
                            className='m-auto'
                            src={Test}
                            alt='person image'
                            quality={80}
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>

                    <div className="mt-[32px] w-full" >
                        <p className=" text-[32px] not-italic font-medium leading-[30px] tracking-[1.28px]" >Tom Cruise</p>
                        <p className="mt-[8px] font-poppins text-base not-italic font-normal" >Founder & Chairman</p>

                        <div className="mt-[16px] w-full h-fit flex flex-row gap-[16px]" >
                            <Image
                                className="w-auto h-auto"
                                src={IconInstargram}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />

                            <Image
                                src={IconLinkedin}
                                alt='icon'
                                quality={80}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
               
                
            </Slider>
        </div>


    )
}
