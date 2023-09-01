import React from 'react'

export const Quantity = () => {
    return (
        <div
            className="w-[72px] h-[44px] px-[6px] py-3 flex flex-row gap-[16px]
            justify-center items-center rounded border-[1.5px] border-solid border-[rgba(0, 0, 0, 0.40)]"
        >
            <p>01</p>
            <div className="w-fit h-fit" >
                <svg 
                    className="hover:cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                    <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="black" />
                </svg>

                <svg 
                    className="hover:cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                    <path d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z" fill="black" />
                </svg>
            </div>
        </div>
    )
}
