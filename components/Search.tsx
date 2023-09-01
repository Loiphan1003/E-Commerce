import React from 'react'

export const Search = () => {
  return (
    <div
      className="w-fit h-fit flex flex-row py-[7px] pl-[20px] pr-[12px] rounded
      bg-secondary justify-center items-center gap-[34px]"
    >
      <input 
        className="w-[153px] h-[18px] font-poppins text-xs font-normal leading-[18px]
        outline-none bg-secondary opacity-50"
        type="text" 
        placeholder="What are you looking for?" 
      />

      <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
