import React from 'react';
import Phone from '../app/images/CategoryCellPhone.png'
import Image from 'next/image';

interface CategoryProps {
    text: string,
    icon: any,
}

export const Category = (props: CategoryProps) => {
    return (
        <div
            className="w-[170px] h-[145px] rounded border flex flex-col gap-4 justify-center items-center
            border-solid border-[rgba(0, 0, 0, 0.30)] group hover:cursor-pointer hover:bg-secondary_2"
        >
            <div>
                <Image
                    src={props.icon}
                    alt='icon'
                />
            </div>
            <p 
                className="group-hover:text-text font-poppins
                text-base not-italic font-normal"
            >
                {props.text}
            </p>
        </div>
    )
}
