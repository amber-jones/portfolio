"use client";

import Image from 'next/image';

import Link from 'next/link'
import React from 'react'

import logo from '../../../public/images/logo-arrow.svg'

export default function Nav({}){
    return(
        <nav className="flex flex-row gap:2 md:gap-5 justify-center sm:justify-between items-center py-5 px-2 sm:px-10 md:px-20 fixed top-0 z-50 w-full max-w-8xl">
          <div className='hidden sm:inline-block z-50'>
            <Link href='/'>
              <Image
                  src={logo}
                  alt="Amber Jones logo"
              />
            </Link>
          </div>
          <div className='nav'>
            <ul className='flex flex-row gap-8 sm:gap-5 text-white'>
              <li><Link href="/#work">My work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li className=''>
                <a href="https://www.linkedin.com/in/amber-jones-014?" target="_blank" rel="noopener noreferrer">
                  <img
                    src='../../../../icons/linkedin-white.svg'
                    alt="Amber Jones logo"
                  />
                </a>
              </li>
              <li className=''>
                <a href="mailto:ambergjones14@gmail.com">
                  <img
                    src='../../../../icons/mail-white.svg'
                    alt="Amber Jones logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
    )
}