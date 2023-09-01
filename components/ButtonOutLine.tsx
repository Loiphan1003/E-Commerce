import React from 'react'


interface ButtonOutLineProps {
    text: string,
}

export const ButtonOutLine = (props: ButtonOutLineProps) => {
    return (
        <div
            className="w-fit h-fit px-[48px] py-[16px] box-border rounded
            border border-solid border-[rgba(0, 0, 0, 0.50)] hover:cursor-pointer"
        >
            <p className="font-poppins text-base not-italic font-medium" >{props.text}</p>
        </div>
    )
}
