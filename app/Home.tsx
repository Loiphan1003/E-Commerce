"use client"
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Cart } from '@/components/Cart';
import { CountDownTime } from '@/components/CountDownTime';
import { NextButton } from '@/components/NextButton';
import { PreviousButton } from '@/components/PreviousButton';
import { SliderBanner } from '@/components/SliderBanner';
import { Button } from '@/components/Button';
import { Category } from '@/components/Category';
import { CategoryBrowe } from '@/type';
import { CategoryPhone, CategoryCamera, CategoryComputer, CategoryGaming, CategoryHeadPhone, CategoryWatch } from './images';
import Hero from '../app/images/JBL_BOOMBOX_2_HERO.png';
import PSFive from './images/ps5.png';
import Image from 'next/image';
import { Policy } from '@/components/Policy';
import { getBannerSlideData, getHeaderMenuData } from '@/redux/slice/webPageInfo/asyncThunks';



const category = ["Women Fashion", "Men Colection", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor"
  , "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"];


const categoryBrowes: CategoryBrowe[] = [
  {
    text: 'Phone',
    icon: CategoryPhone
  },
  {
    text: 'Computers',
    icon: CategoryComputer
  },
  {
    text: 'SmartWatch',
    icon: CategoryWatch
  },
  {
    text: 'Camera',
    icon: CategoryCamera
  },
  {
    text: 'HeadPhones',
    icon: CategoryHeadPhone
  },
  {
    text: 'Gaming',
    icon: CategoryGaming
  },
]

export function Heading(props: { text: string, header: string }) {
  return (
    <div>
      <div
        className="w-fit h-fit border-l-[20px] border-solid border-secondary_2
              rounded"
      >
        <p
          className="font-poppins pl-[16px] py-[10px] text-[16px] text-secondary_2 not-italic font-semibold 
                leading-5"
        >
          {props.header}
        </p>
      </div>
      {props.text !== undefined &&
        <p
          className="mt-[24px] font-inter text-4xl not-italic font-semibold 
              leading-[48px] tracking-[1.44px]"
        >
          {props.text}
        </p>
      }
    </div>
  )
}

export const Home = () => {

    // const dispatch = useDispatch<any>();

    // useEffect(() => {
    //   dispatch(getHeaderMenuData());
    //   dispatch(getBannerSlideData())
    // }, [dispatch]);


    const scrollableContainerRef = useRef<HTMLDivElement>(null);
    const [initialStateScroll, setInitialStateScroll] = useState<number>(0);



    const handleNextOrPreviousButton = (type: 'next' | 'previous') => {
        if (!scrollableContainerRef.current) return;
        let initialScroll = initialStateScroll
        if (type === 'next') {
            initialScroll + 120;
            setInitialStateScroll(initialStateScroll + 120)
            scrollableContainerRef.current.scroll({
                left: initialStateScroll,
                behavior: 'smooth'
            });
        }
        if (type === 'previous') {
            if (initialScroll > 0) {
                initialScroll - 120;
                setInitialStateScroll(initialStateScroll - 120)
            }
            scrollableContainerRef.current.scroll({
                left: initialStateScroll,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div
            className="md:mx-auto max-w-[1440px] px-[135px] box-border"
        >

            <div
                className="w-auto  flex flex-row h-fit"
            >
                <ul
                    className="pt-[40px] pr-[16px] mb-[140px] box-border flex flex-col gap-4
          border-r-[0.5px] border-solidborder-black"
                >
                    {category.map((i) => (
                        <li
                            key={i}
                            className="w-[217px] font-poppins text-base not-italic font-normal
              hover:cursor-pointer"
                        >
                            {i}
                        </li>
                    ))}
                </ul>

                <div
                    className="w-full h-auto pt-[40px] pl-[45px] box-border"
                >
                    <SliderBanner />
                </div>
            </div>

            <div
                className="w-full h-fit"
            >

                <div
                    className="w-auto h-fit flex flex-row justify-between items-end
          " >
                    <div
                        className="flex flex-row items-end gap-[87px]"
                    >
                        <Heading header="Today's" text="Flash Sales" />
                        <CountDownTime />
                    </div>

                    <div
                        className="flex flex-row gap-2"
                    >
                        <PreviousButton
                            onClick={() => handleNextOrPreviousButton('previous')}
                        />

                        <NextButton
                            onClick={() => handleNextOrPreviousButton('next')}
                        />
                    </div>
                </div>

                <div
                    className="mt-[40px]  w-100% flex flex-row gap-[30px] 
          overflow-y-hidden overflow-x-hidden"
                    ref={scrollableContainerRef}
                >
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                    <Cart isDiscount={true} isInWishlist={false} />
                </div>

                <div className="w-full my-[60px] flex justify-center items-center" >
                    <Button
                        onClick={() => console.log("View all products")}
                        text="View all products"
                    />
                </div>

                <hr className="mb-[80px]" />

                <div>
                    <div className="w-full flex flex-row justify-between items-end" >
                        <Heading text='Browse By Category' header='Categories' />
                        <div
                            className="flex flex-row gap-2"
                        >
                            <PreviousButton
                                onClick={() => handleNextOrPreviousButton('previous')}
                            />

                            <NextButton
                                onClick={() => handleNextOrPreviousButton('next')}
                            />
                        </div>
                    </div>

                    <div className="w-auto mt-[60px] flex flex-row gap-[30px]" >
                        {categoryBrowes.map((i) => (
                            <Category key={i.text} text={i.text} icon={i.icon} />
                        ))}
                    </div>
                </div>

                <hr className="mt-[70px]" />

                <div className="w-auto mt-[70px]" >
                    <div className="flex flex-row justify-between items-end" >
                        <Heading
                            header='This Month'
                            text='Best Selling Products'
                        />

                        <Button
                            text="View All"
                            onClick={() => console.log('click')}
                        />
                    </div>

                    <div className="w-auto mt-[60px] grid grid-cols-4 gap-[30px]" >
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                    </div>
                </div>

                <div
                    className="mt-[140px] w-auto h-[500px] flex flex-row items-center justify-center
          pl-[56px] pr-[60px] box-border bg-black"
                >
                    <div className='' >
                        <p className="font-poppins text-[16px] not-italic font-semibold leading-[20px] text-button_1" >Categories</p>
                        <p className="mt-[32px] font-inter w-[443px] text-text text-[48px] not-italic font-semibold leading-[60px]" >Enhance Your Music Experience</p>
                        {/*  */}
                        <div
                            className="mt-[40px] w-fit h-fit px-[48px] py-[16px] rounded bg-button_1
              hover:cursor-pointer"
                            placeholder='Buy now!'
                        >
                            <p className="text-text font-poppins text-base not-italic font-medium" >Buy now!</p>
                        </div>
                    </div>

                    <div className="w-[1170px] h-[500px] pt-[82px] pb-[88px] box-border relative">
                        <div
                            className="w-[504px] h-[500px] rounded-[504px] top-0 bg-[#D9D9D9]
                blur-[100px] opacity-30 absolute"
                        />

                        <Image
                            src={Hero}
                            className='w-auto h-auto'
                            alt='Hero background'
                            quality={80}
                            loading="lazy"
                        />

                    </div>
                </div>

                <div className="w-auto mt-[71px] h-fit" >
                    <div className="flex flex-row justify-between items-end" >
                        <Heading
                            text='Explore Our Products'
                            header='Our Products'
                        />

                        <div className="flex flex-row gap-[8px]" >
                            <PreviousButton onClick={() => console.log('click')} />
                            <NextButton onClick={() => console.log('click')} />
                        </div>
                    </div>

                    <div className="mt-[60px] grid grid-cols-4 grid-rows-2 gap-[30px] gap-y-[60px]" >
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                        <Cart isDiscount={false} isInWishlist={false} />
                    </div>

                    <div className="mt-[76px] w-auto h-fit flex justify-center items-center" >
                        <Button
                            text='View All Products'
                            onClick={() => console.log('click')}
                        />
                    </div>
                </div>

                <div className="mt-[140px] w-auto h-fit" >
                    <Heading
                        header='Featured'
                        text='New Arrival'
                    />

                    <div className="mt-[60px] w-auto h-[600px] grid grid-cols-4 grid-rows-2 gap-4" >
                        <div
                            className="row-span-2 col-span-2 bg-black flex justify-center 
                relative items-end"
                        >
                            <Image
                                src={PSFive}
                                alt='product new arrival'
                            />

                            <div className="text-text absolute flex flex-col gap-2 left-[32px] bottom-[32px]" >
                                <p className="font-inter text-[24px] not-italic font-semibold leading-[24px]" >PlayStation 5</p>
                                <p className="w-[242px] font-poppins text-[14px] not-italic font-normal leading-[21px]" >Black and White version of the PS5 coming out on sale.</p>
                                <p className="font-poppins text-white text-base not-italic font-medium" >Shop Now</p>
                            </div>
                        </div>

                        <div
                            className="col-span-2 bg-black flex justify-center 
                relative items-end"
                        >
                            <Image
                                src={PSFive}
                                className="h-full"
                                // height={100}
                                alt='product new arrival'
                            />

                            <div className="text-text absolute flex flex-col gap-2 left-[32px] bottom-[32px]" >
                                <p className="font-inter text-[24px] not-italic font-semibold leading-[24px]" >PlayStation 5</p>
                                <p className="w-[242px] font-poppins text-[14px] not-italic font-normal leading-[21px]" >Black and White version of the PS5 coming out on sale.</p>
                                <p className="font-poppins text-white text-base not-italic font-medium" >Shop Now</p>
                            </div>
                        </div>

                        <div
                            className="bg-black flex justify-center 
                relative items-end"
                        >
                            <Image
                                src={PSFive}
                                alt='product new arrival'
                            />

                            <div className="text-text absolute flex flex-col gap-2 left-[32px] bottom-[32px]" >
                                <p className="font-inter text-[24px] not-italic font-semibold leading-[24px]" >PlayStation 5</p>
                                <p className="w-[242px] font-poppins text-[14px] not-italic font-normal leading-[21px]" >Black and White version of the PS5 coming out on sale.</p>
                                <p className="font-poppins text-white text-base not-italic font-medium" >Shop Now</p>
                            </div>
                        </div>

                        <div
                            className="bg-black flex justify-center 
                relative items-end"
                        >
                            <Image
                                src={PSFive}
                                alt='product new arrival'
                            />

                            <div className="text-text absolute flex flex-col gap-2 left-[32px] bottom-[32px]" >
                                <p className="font-inter text-[24px] not-italic font-semibold leading-[24px]" >PlayStation 5</p>
                                <p className="w-[242px] font-poppins text-[14px] not-italic font-normal leading-[21px]" >Black and White version of the PS5 coming out on sale.</p>
                                <p className="font-poppins text-white text-base not-italic font-medium" >Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Policy />
            </div>
        </div>
    )
}
