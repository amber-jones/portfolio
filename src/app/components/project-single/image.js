"use client";
import React from 'react'

export default function Image({src, caption}){
    return(
        <div className='card-bg p-2 md:p-5 mt-0 md:mt-10'>
            <img 
            className='w-full rounded-xl h-auto'
            src={src}>
            </img>
            <figcaption className='pl-5 lg:pl-10 pt-2 md:pt-5 text-[14px] md:text-[16px]'>{caption}</figcaption> 
        </div>
    )
}