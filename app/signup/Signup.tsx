"use client"
import React from 'react';
import SideImage from '../images/login_signup_side.png';
import IconGoogle from '../images/Icon-Google.png';
import Image from 'next/image';
import { Input } from '@/components/Input';
import { useRouter } from 'next/navigation';

export const Signup = () => {

    const router = useRouter();

    return (
        <div
            className="2xl:mx-auto h-fit w-fit pt-[60px] pb-[140px] box-border
            flex flex-row items-center gap-[129px]"
        >

            <Image
                className="rounded-r-[4px] 2xl:rounded "
                src={SideImage}
                alt="side image"
                placeholder='blur'
                quality={80}
                loading='lazy'
            />

            <div>
                <div>
                    <p className="font-inter text-[36px] font-medium not-italic
                    tracking-[1.44px] leading-[30px]"
                    >
                        Create an account
                    </p>

                    <p
                        className="mt-[24px] font-poppins text-base not-italic font-normal"
                    >
                        Enter your details below
                    </p>

                    <div className="mt-[48px] flex flex-col gap-[40px]" >
                        <Input
                            type='text'
                            placeholder='Name'
                        />

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

                <div
                    className="mt-[40px] w-full flex flex-col"
                >
                    <div 
                        className="w-auto h-fit flex justify-center items-center
                        bg-buttonBg rounded py-[16px] hover:cursor-pointer" 
                    >
                        <p className="text-text font-poppins text-base not-italic font-medium" >Create Account</p>
                    </div>

                    <div 
                        className="mt-[16px] w-auto h-fit flex flex-row gap-[16px] justify-center items-center
                        py-[16px] rounded border border-solid border-[rgba(0, 0, 0, 0.40)] hover:cursor-pointer" 
                    >
                        <Image 
                            src={IconGoogle}
                            alt='icon google'
                            quality={80}
                        />
                        <p className="font-poppins text-base not-italic font-normal" >Sign up with Google</p>
                    </div>

                    <div 
                        className="mt-[32px] w-auto h-fit flex flex-row justify-center items-center
                        gap-[16px] font-poppins opacity-70" 
                    >
                        <p className="text-base not-italic font-normal hover:cursor-pointer" >Already have account?</p>
                        <p 
                            className="text-base not-italic font-medium underline hover:cursor-pointer" 
                            onClick={() => router.push('/login')}
                        >
                            Log in
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
