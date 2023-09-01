"use client"
import Image from 'next/image'
import React from 'react'
import Icon from '../images/icons-phone.png';
import { Button } from '@/components/Button';

interface InputProps {
    placeholder: string,
}

const Input = (props: InputProps) => {
    return (
        <div
            className="w-[235px] h-[50px] bg-secondary rounded
                            py-[13px] px-[16px] box-border flex flex-row"
        >
            <input
                className="outline-none bg-secondary text-base
                not-italic font-normal"
                type="text"
                placeholder={props.placeholder}
            />
            <p className="text-secondary_2" >*</p>
        </div>
    )
}


const page = () => {
    return (
        <div
            className="2xl:mx-auto mt-[80px] mb-[140px] max-w-[1440px] px-[135px] "
        >
            <div className="flex flex-row gap-[12px]" >
                <p>Home</p>
                <p>/</p>
                <p>Contact</p>
            </div>

            <div
                className="mt-[80px] w-auto h-fit flex flex-row gap-[30px]"
            >
                <div
                    className="w-[270px] px-[35px] pt[40px] pb-[51px] box-border
                    rounded shadow-[0px_1px_13px_0px_rgba(0, 0, 0, 0.05)]"
                >
                    <div
                    >
                        <div
                            className="font-poppins flex
                        flex-col gap-[16px]"
                        >
                            <div className="w-fit h-fit flex flex-row items-center gap-[16px]" >
                                <Image
                                    src={Icon}
                                    alt='icon'
                                    quality={80}
                                    loading='lazy'
                                    placeholder='blur'
                                />
                                <p className="text-base not-italic font-medium" >Call To Us</p>
                            </div>
                            <p className="text-[14px] not-italic font-normal leading-[21px]" >We are available 24/7, 7 days a week.</p>
                            <p className="text-[14px] not-italic font-normal leading-[21px]" >Phone: +8801611112222</p>
                        </div>

                        <hr className="my-[32px]" />

                        <div
                            className="font-poppins flex
                        flex-col gap-[16px]"
                        >
                            <div className="w-fit h-fit flex flex-row items-center gap-[16px]" >
                                <Image
                                    src={Icon}
                                    alt='icon'
                                    quality={80}
                                    loading='lazy'
                                    placeholder='blur'
                                />
                                <p className="text-base not-italic font-medium" >Call To Us</p>
                            </div>
                            <p className="text-[14px] not-italic font-normal leading-[21px]" >We are available 24/7, 7 days a week.</p>
                            <p className="text-[14px] not-italic font-normal leading-[21px]" >Phone: +8801611112222</p>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full h-fit py-[40px] px-[32px] box-border flex flex-col gap-[32px] 
                    rounded shadow-[0px_1px_13px_0px_rgba(0, 0, 0, 0.05)] font-poppins"
                >
                    <div className='w-full flex flex-row justify-between' >
                        <Input placeholder="Your Name" />
                        <Input placeholder="Your Email" />
                        <Input placeholder="Your Phone" />
                    </div>

                    <textarea
                        className="w-full h-[207px] bg-secondary rounded text-base not-italic font-normal
                        outline-none resize-none px-[16px] py-[13px] box-border"
                        name=""
                        placeholder='Your Massage'
                    />

                    <div className="flex w-full justify-end" >
                        <Button
                            text='Send Massage'
                            onClick={() => console.log('Send')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page