"use client";

import React from 'react'

export default function TabLinkItem({children, href}){
    return(
        <div className='mt-10 uppercase text-white link text-[20px] hover:rounded-full hover:underline hover:opacity-85 inline'>
                <a href={href} target="_blank" rel="noopener noreferrer">{children} &#8599;</a>
        </div>
    )
}