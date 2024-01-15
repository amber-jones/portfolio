"use client";

import Link from 'next/link'
import React from 'react'

export default function Card({href, url}){
    return(
        <div className='mx-8 sm:mx-16 md:mx-5 lg:mx-16 xl:mx-24 card-bg p-5 md:px-8 md:p-8 md:w-2/4 hover:opacity-80 transition duration-300'>
            <Link href={href}>
                <img 
                    src={url}
                    className='h-full object-cover rounded-2xl'>
                </img>
            </Link>
        </div>
    )
}