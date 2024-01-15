"use client";

import Link from 'next/link'
import React from 'react'

import LinkItem from './link-item';

export default function ProjectDescriptionRight({number, title, description, href}){
    return(
        <div className='relative mx-6 sm:mx-16 md:mx-0 md:w-1/2 flex flex-col justify-center items-end'>
            {/* <div className='hidden md:flex flex-row text-right items-center gap-4 md:pt-5 lg:pt-14'>
                <p className='text-2xl subheading text-cream'>Featured Project</p>
                <div className='border-b-2 border-orange w-40'></div>
            </div> */}
            <img 
                src='../../icons/stars.svg'
                className='absolute top-0 right-0 md:-top-20 md:right-20 lg:-top-36 lg:right-44'
                alt='Profile image'
              />
            <div className='flex flex-col sm:flex-row items-baseline gap-3 md:gap-0 pt-10 lg:pt-0 xl:pt-14 pb-8 md:pb-5 xl:pb-20 pr-0 md:pr-5 xl:pr-40'>
                <div className='text-[60px] md:text-[80px] md:text-[140] xl:text-[150px] heading font-light text-left'>{number}</div>
                <div className='md:-mt-14 md:pl-8 md:origin-top-left md:rotate-12'>
                    <h2 className='z-50 text-[30px] md:text-[40px] lg:text-[50px] bg-darkpurple project-heading inline px-2 whitespace-nowrap'>{title}</h2>
                    <p className='pt-3 pb-5 lg:pb-6 text-body'>{description}</p>
                    <LinkItem href={href}>View project</LinkItem>
                </div>
            </div>
        </div>
    )
}