"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from './Search';
import { HeaderMenu } from '@/type';
import { WishlistButton } from './WishlistButton';
import { CartButton } from './CartButton';
import { AccountButton } from './AccountButton';
import { useSession } from 'next-auth/react';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const menu: HeaderMenu[] = [
    {
        "id": "64e86bcbaf558f737d4c51db",
        "name": "Home"
    },
    {
        "id": "64e86bdcaf558f737d4c51dc",
        "name": "Contact"
    },
    {
        "id": "64e86be2af558f737d4c51dd",
        "name": "About"
    },
    {
        "id": "64e86be7af558f737d4c51de",
        "name": "Sign Up"
    }
]

export const Header = () => {

    // const menu = useSelector((state: RootState) => state.HeaderMenu.data);

    const {data: sesstion } = useSession();

    const router = useRouter();

    const handleRouter = (name: string) => {
        const path = name.toLowerCase().split(' ').join('');
        if (path === 'home') return router.push('/');
        return router.push(path);
    }


    return (
        <div
            className="md:mx-auto max-w-[1440px] px-[135px] pt-[38px] box-border flex flex-row
            justify-between items-center mb-4"
        >
            <h1
                className="font-poppins text-[16px] font-bold leading-6 not-italic
                hover:cursor-pointer"
                onClick={() => router.push('/')}
            >
                Exclusive
            </h1>

            <div
                className="w-fit flex flex-row gap-[48px]"
            >
                {menu !== undefined && menu.map((i) => (
                    <p
                        key={i.id}
                        className="font-poppins text-base font-normal not-italic
                        leading-6 hover:cursor-pointer"
                        onClick={() => handleRouter(i.name)}
                    >
                        {i.name}
                    </p>
                ))}
            </div>

            <div className="flex flex-row h-fit w-fit items-center gap-[24px]" >
                <Search />

                <div className="flex flex-row w-fit h-fit gap-[16px]" >
                    <WishlistButton />
                    <CartButton />
                    { sesstion !== null && <AccountButton /> }
                </div>
            </div>
        </div>
    )
}
