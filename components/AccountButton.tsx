import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { signOut } from 'next-auth/react';



const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <div className="flex flex-row gap-[16px] items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Manage My Account</p>
            </div>
        ),
    },
    {
        key: '2',
        label: (
            <div className="flex flex-row gap-[16px] items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path d="M1 5.3V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H18C18.2652 20.5 18.5196 20.3946 18.7071 20.2071C18.8946 20.0196 19 19.7652 19 19.5V5.3H1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M19 5.3L16.1665 1.5H3.8335L1 5.3M13.7775 8.6C13.7775 10.699 12.0865 12.4 10 12.4C7.9135 12.4 6.222 10.699 6.222 8.6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>My Order</p>
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <div className="flex flex-row gap-[16px] items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1476_458)">
                        <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="11.25" stroke="black" strokeWidth="1.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1476_458">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p>My Cancellations</p>
            </div>
        ),
    },
    {
        key: '4',
        label: (
            <div className="flex flex-row gap-[16px] items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z" stroke="black" strokeWidth="1.5" />
                </svg>
                <p>My Reviews</p>
            </div>
        ),
    },
    {
        key: '5',
        label: (
            <div 
                className="flex flex-row gap-[16px] items-center" 
                onClick={() => signOut()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Logout</p>
            </div>
        ),
    },
];

export const AccountButton = () => {
    return (
        <Dropdown menu={{ items }} placement="bottomRight">
            <div
                className="group hover:cursor-pointer hover:bg-secondary_2 
                rounded-[50%]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                    className="group-hover:stroke-white stroke-black"
                >
                    <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Dropdown>
    )
}
