"use client";
import React from 'react'

export default function ContentRight({title, content}){
    return(
        <div className='relative md:w-full lg:w-4/5 xl:w-1/2 flex flex-col justify-center'>
            <img 
                src='../../../icons/progress.svg'
                className='absolute w-1/6 md:w-1/4 top-0 right-5 md:-top-10 md:right-10 xl:-top-24 xl:right-44'
                alt='Profile image'
              />

            <div className='mx-10 md:mx-5 pt-10 sm:pt-20 xl:pt-24 pb-10 lg:pr-14 xl:pr-28 2xl:pr-60'>
                <div className='lg:origin-bottom lg:rotate-12'>
                    <h2 className='z-50 text-[32px] md:text-[40px] lg:text-[50px] bg-darkorange inline project-heading px-2'>{title}</h2>
                    <p className='pt-3'>{content}</p>
                </div>
            </div>
        </div>
    )
}