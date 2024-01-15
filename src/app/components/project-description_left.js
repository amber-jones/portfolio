"use client";

import Link from 'next/link'
import React from 'react'

import LinkItem from './link-item';

export default function ProjectDescriptionLeft({number, title, description, href}){
    return(
        <div className='relative mx-6 sm:mx-16 md:mx-0 md: md:w-1/2 flex flex-col justify-center items-start'>
            <img 
                src='../../icons/progress.svg'
                className='absolute top-10 right-0 md:-top-24 md:right-44'
                alt='Profile image'
              />
            <div className='flex flex-col sm:flex-row items-baseline gap-3 md:gap-0 pt-10 pb-8 md:pb-20 md:pl-14 xl:pl-40'>
                <div className='text-[60px] sm:text-[80px] md:text-[140] xl:text-[150px] heading font-light text-left'>{number}</div>
                <div className='md:origin-bottom md:-rotate-12'>
                    <h2 className='text-[30px] md:text-[40px] lg:text-[50px] bg-darkpurple inline project-heading px-2 whitespace-nowrap'>{title}</h2>
                    <p className='pt-2 pb-5 lg:pb-6 text-body'>{description}</p>
                    <LinkItem href={href}>View project</LinkItem>
                </div>
            </div>
        </div>
    )
}