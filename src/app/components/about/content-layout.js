"use client";
import React from 'react'

export default function ContentLayout({children}){
    return(
        <div className='flex flex-col-reverse md:flex-row mt-10 md:mt-24 lg:mt-40 xl:mt-64 text-body'>
            {children}
        </div>
    )
}