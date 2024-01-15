"use client";
import React from 'react'

export default function AboutImage({src, caption}){
    return(
        <div>
            <img 
                className='h-auto object-cover'
                src={src}
            >
            </img> 
            <figcaption className='mt-2'>{caption}</figcaption>
        </div>
    )
}