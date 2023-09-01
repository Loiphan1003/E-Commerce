import React from 'react'


interface NextButtonProps {
    onClick: () => void,
}

export const NextButton = (props: NextButtonProps) => {
    return (
        <div
            className="w-[46px] h-[46px] bg-secondary flex justify-center items-center
            rounded-[50%] hover:cursor-pointer"
            onClick={() => props.onClick()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}
