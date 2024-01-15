"use client";

import Link from 'next/link'
import React from 'react'

export default function HeadingLarge({children}){
    return(
        <h1 className='flex flex-row gap-8 font-bold justify-center heading text-[70px] sm:text-[80px] md:text-[100px] lg:text[190px] xl:text-[200px] leading-[80px] md:leading-[100px] xl:leading-[184px]'>
           {children}
        </h1>
    )
}