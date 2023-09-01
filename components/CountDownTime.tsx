import React from 'react'
import { Colon } from './Colon'

export const CountDownTime = () => {
    return (
        <div
            className="pb-[10px] box-border flex flex-row items-end gap-[17px]"
        >
            <div>
                <p
                    className="font-poppins text-[12px] not-italic font-medium
                    leading-[18px]"
                >
                    Days
                </p>
                <p 
                    className="mt-[4px] font-inter text-[32px] not-italic font-bold
                    leading-[30px] tracking-[1.28px]" 
                >
                    03
                </p>
            </div>

            <Colon />

            <div>
                <p
                    className="font-poppins text-[12px] not-italic font-medium
                    leading-[18px]"
                >
                    Hours
                </p>
                <p 
                    className="mt-[4px] font-inter text-[32px] not-italic font-bold
                    leading-[30px] tracking-[1.28px]" 
                >
                    23
                </p>
            </div>

            <Colon />

            <div>
                <p
                    className="font-poppins text-[12px] not-italic font-medium
                    leading-[18px]"
                >
                    Minutes
                </p>
                <p 
                    className="mt-[4px] font-inter text-[32px] not-italic font-bold
                    leading-[30px] tracking-[1.28px]" 
                >
                    19
                </p>
            </div>

            <Colon />

            <div>
                <p
                    className="font-poppins text-[12px] not-italic font-medium
                    leading-[18px]"
                >
                    Seconds
                </p>
                <p 
                    className="mt-[4px] font-inter text-[32px] not-italic font-bold
                    leading-[30px] tracking-[1.28px]" 
                >
                    56
                </p>
            </div>
        </div>
    )
}
