import React from 'react'


interface PreviousButtonProps {
    onClick: () => void,
}

export const PreviousButton = (props: PreviousButtonProps) => {
    return (
        <div
            className="w-[46px] h-[46px] bg-secondary flex justify-center items-center
            rounded-[50%] hover:cursor-pointer"
            onClick={() => props.onClick()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L4 12L11 19M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}
