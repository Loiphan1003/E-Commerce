import React from 'react'


interface InputProps {
    type: "text" | "password",
    placeholder: string,
}

export const Input = (props: InputProps) => {
    return (
        <div
            className="w-auto h-fit"
        >
            <input 
                className="mb-[8px] outline-none w-full text-black
                font-poppins text-base not-italic font-normal opacity-40"
                type={props.type} 
                placeholder={props.placeholder}
            />

            <hr />
        </div>
    )
}
