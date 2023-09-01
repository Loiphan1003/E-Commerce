"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import SideImage from '../images/login_signup_side.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { GoogleButton } from '@/components/GoogleButton';


const page = () => {

    const handleLogin = () => {
        console.log("Log in click!")
    }
    
    return (
        <div
            className="2xl:mx-auto h-fit w-fit pt-[60px] pb-[140px] box-border
            flex flex-row items-center gap-[129px]"
        >

            <Image
                className="rounded-r-[4px] 2xl:rounded "
                src={SideImage}
                alt="side image"
                quality={80}
                placeholder='blur'
                loading='lazy'
            />

            <div>
                <div>
                    <p className="font-inter text-[36px] font-medium not-italic
                    tracking-[1.44px] leading-[30px]"
                    >
                        Log in to Exclusive
                    </p>

                    <p
                        className="mt-[24px] font-poppins text-base not-italic font-normal"
                    >
                        Enter your details below
                    </p>

                    <div className="mt-[48px] flex flex-col gap-[40px]" >
                        <Input
                            type='text'
                            placeholder='Email or Phone Number'
                        />

                        <Input
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                </div>

                <GoogleButton type='log in'/>

                <div
                    className="mt-[40px] w-auto flex flex-row items-center justify-between"
                >
                    <Button
                        text='Log in'
                        onClick={() => handleLogin()}
                    />

                    <p className="text-secondary_2 font-poppins text-base not-italic font-normal" >Forget Password?</p>
                </div>
            </div>
        </div>
    )
}

export default page