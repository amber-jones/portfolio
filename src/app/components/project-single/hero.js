"use client";
import React from 'react'

export default function Hero({title, description, note, children}){
    return(
        <div className='mt-6 pt-32 pb-10 lg:pb-20 flex flex-col place-content-start max-w-4xl mx-auto px-8 sm:px-20 lg:px-0'>
            <h1 className='project-title text-[60px] md:text-[80px] lg:text-[100px] leading-[65px] md:leading-[84px] lg:leading-[100px] md:mx-auto'>{title}</h1>
            <p className='pt-10 text-body'>{description}</p>
            <p className='absolute top-60 right-5 sm:right-14 md:right-24 p-2 md:p-5 sticky-note text-[16px] leading-[14px] md:text-[22px] lg:text-[28px] md:leading-[24px] w-1/3 sm:w-1/5'>{note}</p>
            {children}
        </div>
    )
}