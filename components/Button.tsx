"use client"
import React from 'react'

interface ButtonProps {
    text: string,
    onClick: () => void
}

export const Button = (props: ButtonProps) => {
    return (
        <div
            className="flex w-fit h-fit justify-between items-center px-[48px] py-[16px]
            bg-buttonBg text-text rounded hover:cursor-pointer"
            onClick={() => props.onClick()}
        >
            <p
                className="font-poppins text-base not-italic font-medium"
            >
                {props.text}
            </p>
        </div>
    )
}
