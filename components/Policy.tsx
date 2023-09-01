import Image from 'next/image'
import React from 'react';
import Custom from '../app/images/Icon-Customer service.png';


export const Policy = () => {
    return (
        <div
            className="mt-[140px] w-auto h-[161px] flex 
            flex-row justify-center gap-[88px] mb-[140px]"
        >
            <div className="font-poppins w-fit flex flex-col items-center" >
                <div className="w-[80px] h-[80px] rounded-[50%] bg-primary_1 p-[10px] box-border" >
                    <div className='w-full h-full rounded-[50%] bg-black flex justify-center items-center' >
                        <Image
                            src={Custom}
                            alt='icon'
                            loading='lazy'
                            placeholder='blur'
                        />
                    </div>
                </div>

                <p className=" mt-[24px] text-xl not-italic font-semibold" >24/7 CUSTOMER SERVICE</p>
                <p className="mt-2 text-[14px] not-italic font-normal leading-[21px]" >Friendly 24/7 customer support</p>
            </div>

            <div className="font-poppins w-fit flex flex-col items-center" >
                <div className="w-[80px] h-[80px] rounded-[50%] bg-primary_1 p-[10px] box-border" >
                    <div className='w-full h-full rounded-[50%] bg-black flex justify-center items-center' >
                        <Image
                            src={Custom}
                            alt='icon'
                            placeholder='blur'
                            loading='lazy'
                        />
                    </div>
                </div>

                <p className=" mt-[24px] text-xl not-italic font-semibold" >24/7 CUSTOMER SERVICE</p>
                <p className="mt-2 text-[14px] not-italic font-normal leading-[21px]" >Friendly 24/7 customer support</p>
            </div>

            <div className="font-poppins w-fit flex flex-col items-center" >
                <div className="w-[80px] h-[80px] rounded-[50%] bg-primary_1 p-[10px] box-border" >
                    <div className='w-full h-full rounded-[50%] bg-black flex justify-center items-center' >
                        <Image
                            src={Custom}
                            alt='icon'
                            placeholder='blur'
                            loading="lazy"
                        />
                    </div>
                </div>

                <p className=" mt-[24px] text-xl not-italic font-semibold" >24/7 CUSTOMER SERVICE</p>
                <p className="mt-2 text-[14px] not-italic font-normal leading-[21px]" >Friendly 24/7 customer support</p>
            </div>
        </div>
    )
}
