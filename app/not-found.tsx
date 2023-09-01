"use client"
import { Button } from "@/components/Button";
import { useRouter } from 'next/navigation';


export default function NotFound() {

  const router = useRouter();

  return (
    <div className="mt-[80px] mb-[140px] 2xl:mx-auto max-w-[1440px] px-[130px]" >
      <div className="flex flex-row gap-[12px] h-fit" >
        <p>Home</p>
        <p>/</p>
        <p>404 Error</p>
      </div>

      <div className="mt-[140px] w-full flex flex-col justify-center items-center" >
        <h1
          className="text-[110px] not-italic font-inter font-medium
          leading-[115px] tracking-[3.3px]"
        >
          404 Not Found
        </h1>

        <p
          className="mt-[40px] mb-[80px] font-poppins text-base not-italic font-normal"
        >
          Your visited page not found. You may go home page.
        </p>
        <Button
          onClick={() => router.push('/')}
          text="Back to home page"
        />
      </div>
    </div>
  );
}
