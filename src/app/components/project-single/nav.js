"use client";
import React from 'react'
import Link from 'next/link';

export default function Nav({prevurl, nexturl}){
    return(
        <div className='flex flex-row justify-between mt-20 lg:mt-40 mb-10 lg:mb-20 font-light'>
            <Link 
                className='hover:underline' 
                href={prevurl}>&#8592; Go Back
            </Link>
            <Link 
                className='hover:underline'
                href={nexturl}>Next Project &#8594;
            </Link>
        </div>
    )
}