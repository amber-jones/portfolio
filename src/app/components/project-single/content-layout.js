"use client";
import React from 'react'

export default function ContentLayout({children}){
    return(
        <div className='flex flex-col bg-lightcream mt-5 py-8 lg:py-10 px-8 sm:px-20 lg:px-32 text-black pb-14'>
            <div className='max-w-6xl mx-auto'>
                {children}
            </div>
        </div>
    )
}