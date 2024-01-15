"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperNav({}){
    const swiper = useSwiper();

    return(
        <div className="flex flex-row justify-between md:justify-end gap-5 pt-8 text-cream">
            <button className='swiper-button' onClick={() => swiper.slidePrev()}>&#8592; Prev</button>
            <button className='swiper-button' onClick={() => swiper.slideNext()}>Next &#8594;</button>
        </div>
    )
}