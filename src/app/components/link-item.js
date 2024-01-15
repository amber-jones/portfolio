"use client";

import Link from 'next/link'
import React from 'react'

export default function LinkItem({children, href}){
    return(
        <div className='mt-10 uppercase text-white link text-[20px] hover:rounded-full hover:underline hover:opacity-85 inline'>
            <Link href={href}>
                {children} &#8599;
            </Link>
        </div>
    )
}