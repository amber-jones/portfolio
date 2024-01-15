"use client";
import React from 'react'

export default function ContentLeft({title, content}){
    return(
        <div className='relative xl:w-5/6 flex flex-col justify-center'>
            <img 
                src='../../../icons/stars.svg'
                className='absolute w-1/6 md:w-1/4 top-5 right-5 md:-top-36 md:right-44'
                alt='Profile image'
              />

            <div className='mx-10 pt-16 sm:pt-20 lg:pt-24 xl:pt-32 pb-10 lg:pb-20 lg:pl-14 xl:pl-20 2xl:pl-60'>
                <div className='lg:origin-bottom lg:-rotate-12'>
                    <h2 className='text-[32px] md:text-[40px] lg:text-[50px] bg-darkorange project-heading px-2 inline'>{title}</h2>
                    <p className='pt-2'>{content}</p>
                  </div>
            </div>
        </div>
    )
}