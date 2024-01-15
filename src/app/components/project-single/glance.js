"use client";
import React from 'react'

export default function Glance({children}){
    return(
        
        <div className='flex flex-col sm:flex-row justify-between pt-10 text-body gap-5 sm:gap-0'>
            {children}
        </div>
    )
}