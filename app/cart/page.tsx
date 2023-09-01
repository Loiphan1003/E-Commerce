"use client"
import Image from 'next/image';
import React from 'react';
import Test from '../images/produc_dev.png'
import { Quantity } from '@/components/Quantity';
import { ButtonOutLine } from '@/components/ButtonOutLine';
import { Button } from '@/components/Button';

const page = () => {
    return (
        <div
            className="2xl:mx-auto max-w-[1440px] px-[130px] pt-[80px] pb-[140px]
            box-border"
        >
            <div className="w-auto h-fit flex flex-row gap-[12px]" >
                <p>Home</p>
                <p>/</p>
                <p>Cart</p>
            </div>

            <div
                className="mt-[80px] w-full h-fit"
            >
                <table
                    className="w-full"
                    cellPadding="40"
                >
                    <thead>
                        <tr>
                            <th
                                className="text-left pl-[40px] box-border"
                            >Product</th>
                            <th
                                className="text-left"
                            >Price</th>
                            <th
                                className="text-left"
                            >Quantity</th>
                            <th
                                className="text-left"
                            >Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div
                                    className="flex flex-row gap-[20px] items-center"
                                >
                                    <Image
                                        src={Test}
                                        alt='image product'
                                        width={50}
                                        height={39}
                                    />
                                    <p>name</p>
                                </div>
                            </td>
                            <td>$100</td>
                            <td>
                                <Quantity />
                            </td>
                            <td>$100</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-[24px] w-full h-fit flex flex-row justify-between" >
                    <ButtonOutLine text="Return To Shop" />
                    <ButtonOutLine text="Update Cart" />
                </div>
            </div>

            <div
                className="mt-[80px] w-full flex flex-row gap-[173px]"
            >
                <div className="w-fit h-fit flex flex-row gap-[16px]" >
                    <div
                        className="w-[300px] h-[56px] py-4 pl-[24px] pr-[164px]
                        box-border rounded border border-solid border-black"
                    >
                        <input
                            className="outline-none w-auto"
                            type="text"
                            placeholder="Coupon Code"
                        />
                    </div>
                    <Button
                        text="Apply Coupon"
                        onClick={() => console.log('click')}
                    />
                </div>

                <div
                    className="w-[470px] h-[324px] rounded border-[1.5px] border-solid
                    py-[32px] px-[24px] box-border border-black"
                >
                    <p
                        className="font-poppins text-[20px] not-italic
                        font-medium leading-[28px]"
                    >
                        Cart Total
                    </p>

                    <div className="mt-[24px] w-full h-fit flex flex-col gap-[16px]" >
                        <div
                            className="flex flex-row justify-between items-center
                        border-b-[1px] border-solid border-black pb-[16px] box-border"
                        >
                            <p>Subtotal</p>
                            <p>$1750</p>
                        </div>

                        <div
                            className="flex flex-row justify-between items-center
                        border-b-[1px] border-solid border-black pb-[16px] box-border"
                        >
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                    </div>

                    <div className="mt-[16px] flex flex-row justify-between items-center" >
                        <p>Total</p>
                        <p>$1750</p>
                    </div>

                    <div className="mt-[16px] w-full flex justify-center" >
                        <Button
                            text="Procees to checkout"
                            onClick={() => console.log('click')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
