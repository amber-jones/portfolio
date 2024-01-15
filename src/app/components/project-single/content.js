"use client";
import React from 'react'

export default function Content({title, children}){
    return(
        <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-20 mt-8 lg:mt-20 pb-10 px-0 md:px-10'>
            <div className='flex flex-row place-items-baseline gap-5 md:gap-7'>
                <img
                    src='../../../icons/purple-plus.svg'
                    className='w-1/12 md:w-1/6'
                    alt='Profile image'
                />
                <h1 className='content-heading text-black text-[40px] lg:text-[60px]'>{title}</h1>
                
            </div>
            <p className='w-full lg:w-2/3 pt-0 lg:pt-4'>{children}</p>
        </div>
    )
}