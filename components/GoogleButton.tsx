"use client"
import React from 'react';
import Image from 'next/image';
import IconGoogle from '../app/images/Icon-Google.png';
import { useSession, signIn } from 'next-auth/react';


interface GoogleButtonProps {
    type: "log in"
}


export const GoogleButton = (props: GoogleButtonProps) => {

    const { data:sesstion } = useSession();

    // console.log(sesstion?.user.jwt);

    return (
        <div
            className="mt-[16px] w-auto h-fit flex flex-row gap-[16px] justify-center items-center
            py-[16px] rounded border border-solid border-[rgba(0, 0, 0, 0.40)] hover:cursor-pointer"
            onClick={() => signIn('google')}
        >
            <Image
                src={IconGoogle}
                alt='icon google'
                quality={80}
            />
            <p className="font-poppins text-base not-italic font-normal" >Sign up with Google</p>
        </div>
    )
}
