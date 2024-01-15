"use client";
import React from 'react'
import Image from 'next/image';

export default function AboutImage({src, caption}){
    return(
        <div>
            <Image 
                className='h-full object-cover'
                src={src}
            >
            </Image> 
            <figcaption className='mt-2'>{caption}</figcaption>
        </div>
    )
}