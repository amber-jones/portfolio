"use client";

import Link from 'next/link'
import React from 'react'

import LinkItem from './link-item';
import TabLinkItem from './tab-link-item';
import HeadingLarge from './heading-large';
import Marquee from './marquee';

export default function Footer({}){
    return(
        <footer className='max-w-8xl'>
            <div className='mt-10 lg:mt-20 pb-14 md:pb-24'>
                <Marquee></Marquee>
                <div className='pt-10 lg:pt-40 px-5 sm:px-20'>
                    <div className='relative flex flex-col md:flex-row text-center md:text-left items-center md:items-end gap-5'>
                        <HeadingLarge>Lets Chat</HeadingLarge>
                        <h1 className='md:ml-0 lg:-mt-20 text-[16px] leading-[14px] md:text-[22px] lg:text-[28px] md:leading-[24px] w-1/3 sm:w-1/5 text-black absolute -bottom-10 right-40 md:right-20 lg:right-72 2xl:left-96 p-3 md:p-5 sticky-note-right whitespace-normal'>& create cool things together!</h1>
                    </div>
                </div>

                <div className='mt-6 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center md:items-end'>
                    <div className='order-2 md:order-1 text-sm pt-20 text-cream'>
                        <p>2025 Amber Jones. All rights reserved.</p>
                        <p>Designed and developed by me - on <strong>Next.js</strong> with too much coffee,love and components :)</p>
                    </div>
                    <div className='md:col-span-1 flex flex-col md:flex-row gap-0 md:gap-6 order-1 md:order-2'>
                        <LinkItem href='/#work'>My Work</LinkItem>
                        <LinkItem href='/about'>About</LinkItem>
                        <TabLinkItem href='https://www.linkedin.com/in/amber-jones-014' target="_blank">LinkedIn</TabLinkItem>
                    </div>
                </div>
            </div>
        </footer>
    )
}