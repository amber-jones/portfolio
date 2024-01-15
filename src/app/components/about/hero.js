"use client";
import React from 'react'

export default function Hero({children, description}){
    return(
        <div className='mt-14 pt-24 md:pt-28 flex flex-col justify-center place-items-center w-full'>
            <h1 className='relative flex flex-row gap-8 font-bold justify-center heading text-[60px] md:text-[100px] lg:text[150px] xl:text-[200px] leading-[60px] md:leading-[100px] xl:leading-[184px]'>{children}</h1>
            <p className='absolute top-20 right-0 sm:right-32 md:top-40 md:right-32 lg:top-80 lg:right-44 p-2 md:p-5 sticky-note text-[16px] leading-[14px] md:text-[22px] lg:text-[28px] md:leading-[24px] w-1/3 sm:w-1/5'>{description}</p>
        </div>
    )
}