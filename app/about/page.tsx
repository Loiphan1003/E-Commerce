import React from 'react';

import Portrait from '../images/about.png';
import Image from 'next/image';
import { Policy } from '@/components/Policy';
import { PersonIntro } from '@/components/PersonIntro';



const page = () => {

    return (
        <div className="mt-[80px] w-full h-fit" >
            <div className="2xl:mx-auto pl-[130px] max-w-[1440px] flex flex-row gap-[12px]" >
                <p>Home</p>
                <p>/</p>
                <p>About</p>
            </div>

            <div
                className="mt-[42px] 2xl:mx-auto pl-[130px] max-w-[1440px]
                flex flex-row items-center gap-[75px]"
            >
                <div className="w-[525px] h-[336px]" >
                    <h1
                        className="font-inter text-[54px] not-italic
                        font-semibold leading-[64px] tracking-[3.24px]"
                    >
                        Out Story
                    </h1>
                    <p
                        className="mt-[40px] font-poppins text-[16px] not-italic font-normal
                        leading-[26px]"
                    >
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>
                    <p
                        className="mt-[24px] font-poppins text-[16px] not-italic font-normal leading-[26px]"
                    >
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>

                <Image
                    src={Portrait}
                    alt='portrait'
                    quality={80}
                    priority={true}
                />
            </div>

            <div
                className="mt-[140px] 2xl:mx-auto max-w-[1440px] px-[130px] h-fit
                flex flex-row gap-[30px]"
            >
                <div
                    className="w-fit h-fit border border-solid border-[rgba(0, 0, 0, 0.30)]
                    rounded py-[30px] px-[50px] box-border flex flex-col items-center"
                >
                    <div className="bg-primary_1 w-[80px] p-[10px] box-border h-[80px] rounded-[50%]" >
                        <div className="w-full h-full bg-black rounded-[50%] flex justify-center items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                <path d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="white" strokeWidth="2" />
                                <path d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="16" />
                            </svg>
                        </div>
                    </div>

                    <p className="mt-[24px] text-[32px] not-italic font-bold leading-[30px]" >10.5k</p>
                    <p className="mt-[12px] text-base font-poppins not-italic font-normal" >Sallers active our site</p>
                </div>

                <div
                    className="w-fit h-fit border border-solid border-[rgba(0, 0, 0, 0.30)]
                    rounded py-[30px] px-[50px] box-border flex flex-col items-center"
                >
                    <div className="bg-primary_1 w-[80px] p-[10px] box-border h-[80px] rounded-[50%]" >
                        <div className="w-full h-full bg-black rounded-[50%] flex justify-center items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                <path d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="white" strokeWidth="2" />
                                <path d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="16" />
                            </svg>
                        </div>
                    </div>

                    <p className="mt-[24px] text-[32px] not-italic font-bold leading-[30px]" >10.5k</p>
                    <p className="mt-[12px] text-base font-poppins not-italic font-normal" >Mopnthly Produduct Sale</p>
                </div>

                <div
                    className="w-fit h-fit border border-solid border-[rgba(0, 0, 0, 0.30)]
                    rounded py-[30px] px-[50px] box-border flex flex-col items-center"
                >
                    <div className="bg-primary_1 w-[80px] p-[10px] box-border h-[80px] rounded-[50%]" >
                        <div className="w-full h-full bg-black rounded-[50%] flex justify-center items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                <path d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="white" strokeWidth="2" />
                                <path d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="16" />
                            </svg>
                        </div>
                    </div>

                    <p className="mt-[24px] text-[32px] not-italic font-bold leading-[30px]" >10.5k</p>
                    <p className="mt-[12px] text-base font-poppins not-italic font-normal" >Customer active in our site</p>
                </div>

                <div
                    className="w-fit h-fit border border-solid border-[rgba(0, 0, 0, 0.30)]
                    rounded py-[30px] px-[50px] box-border flex flex-col items-center"
                >
                    <div className="bg-primary_1 w-[80px] p-[10px] box-border h-[80px] rounded-[50%]" >
                        <div className="w-full h-full bg-black rounded-[50%] flex justify-center items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                <path d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="white" strokeWidth="2" />
                                <path d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="#FAFAFA" strokeWidth="2" />
                                <path d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="16" />
                            </svg>
                        </div>
                    </div>

                    <p className="mt-[24px] text-[32px] not-italic font-bold leading-[30px]" >10.5k</p>
                    <p className="mt-[12px] text-base font-poppins not-italic font-normal" >Anual gross sale in our site</p>
                </div>
            </div>


            <PersonIntro />

            <div className="2xl:mx-auto max-w-[1440px] px-[130px]" >
                <Policy />
            </div>
        </div>
    )
}

export default page;
