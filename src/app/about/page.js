"use client";
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import '../globals.css';
import 'swiper/css';
import 'swiper/css/navigation';

import Hero from '../components/about/hero';
import ContentLayout from '../components/about/content-layout';
import AboutImage from '../components/about/about-image';
import ContentRight from '../components/about/content-right';
import ContentLeft from '../components/about/content-left';
import SwiperNav from '../components/about/swiper-nav';

import swiperone from "../../../public/images/about/swiper-one.png";
import swipertwo from "../../../public/images/about/swiper-two.png";
import swiperthree from "../../../public/images/about/swiper-three.png";
import swiperfour from "../../../public/images/about/swiper-four.png";
import swiperfive from "../../../public/images/about/swiper-five.png";
import swipersix from "../../../public/images/about/swiper-six.png";
import swiperseven from "../../../public/images/about/swiper-seven.png";
import swipereight from "../../../public/images/about/swiper-eight.png";
import swipernine from "../../../public/images/about/swiper-nine.png";

export default function About() {
  return (
    <div className='relative'>
        <Hero description='note: find a more engaging about page title'>
          Get to <br></br> know me
            <img
                src='../../../icons/plus.svg'
                className='absolute -left-10 -top-10 md:-left-20 md:top-0'
                alt='Plus icon'
              />
              <img
                src='../../../images/about/squiggle.png'
                className='absolute left-0 -bottom-10 md:-bottom-16 lg:-bottom-24 xl:-bottom-32 w-2/3'
                alt='Decorative underline'
              />
          
        </Hero>

        {/* Section One */}
        <ContentLayout>
          <div className='mx-8 lg:mx-20 xl:mx-40 card-bg p-5 xl:p-8 lg:w-3/5 xl:w-2/5'>
            <AboutImage
              src='../../images/about/about-one.png'
              alt='Portait profile image'
              caption='An awkward profile pic'>
            </AboutImage>
          </div>

          <ContentRight
            tagline='A bit of background'
            title='Background'
            content='My academic journey kicked off with a BSc in Chemistry and Genetics, where I delved into the fascinating world of molecules and genetic intricacies. Yet, a pivotal shift occurred when I decided to explore web design and development at The Academy of Digital Arts (#CovidMadeMeDoIt). It was during this time that I stumbled upon an unexpected love affair with UX/UI, front end dev and problem-solving.'>
          </ContentRight>
        </ContentLayout>
        {/* Section One */}

       {/* Section Two */}
        <ContentLayout>
            <ContentLeft
              tagline='#challengeaccepted'
              title='Drive drive drive'
              content='The challenge of creating seamless user experiences and translating complex ideas into visually compelling interfaces sparked my passion. Combining scientific grounding with creative exploration has expanded my skills and deepened my commitment to crafting innovative, user-focused digital solutions.'>
            </ContentLeft>

            <div className='mt-5 md:mt-0 mx-8 lg:mx-20 card-bg p-5 xl:p-8 xl:w-full'> 
              <AboutImage
                src='../../images/about/about-two.png'
                alt='Table Mountain beach sunset'
                caption='Cape Town sunset #phonephotography'>
              </AboutImage>
            </div>
        </ContentLayout>
        {/* Section Two */}

        {/* Section Three */}
        <ContentLayout>
          <div className='mx-8 lg:mx-20 xl:mx-30 card-bg p-5 lg:p-8 lg:w-3/6 xl:w-4/6'>
            <AboutImage
              src='../../images/about/about-three.png'
              alt='Yosemite National Park'
              caption='Yosemite National Park - One of my favourite places.'>
            </AboutImage>
          </div>

          <ContentRight
            tagline='test tagline'
            title='Heading'
            content='Test sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>
          </ContentRight>
        </ContentLayout>
        {/* Section three */}

        {/* Section Four */}
        <ContentLayout>
          <ContentLeft
            tagline='Added Extras'
            title='Hobbies?'
            content='I am probably out for a run or beating up the boxing bag at gym. A few of my favourite words: friends, family, sushi, music, hockey, dogs, components. A few words I dislike: traffic, coriander'>
          </ContentLeft>
    
          <div className='mt-5 md:mt-0 mx-8 lg:mx-20 xl:mx-40 card-bg p-5 xl:p-8 xl:w-2/3'>
            <AboutImage
              src='../../images/about/about-four.png'
              caption='Fun fact: I Au Paired in the US in 2019/2020'>
            </AboutImage>
          </div>
        </ContentLayout>
        {/* Section Four */}

        {/* Experience Section */}
        <section>
          <div className='relative mt-10 md:mt-24 xl:pt-36 flex flex-col justify-center place-items-center w-full'>
              <h1 className='flex flex-row gap-8 font-bold justify-center heading text-[60px] md:text-[80px] lg:text[150px] xl:text-[200px] leading-[60px] md:leading-[84px] lg:leading-[184px]'>Right Now</h1>
              <h1 className='absolute top-14 md:top-10 md:right-20 lg:top-32 xl:top-80 p-3 md:p-5 lg:pb-10 text-center sticky-note text-[16px] leading-[14px] md:text-[22px] lg:text-[28px] md:leading-[24px] w-1/3 sm:w-1/5'>work & life lately :)</h1>
              <img
                src='../../../icons/plus.svg'
                className='hidden md:block absolute -top-10 md:left-3 lg:top-0 lg:left-52 xl:top-20'
                alt='Profile image'
              />
          </div>

          <div className='flex flex-col gap-5 py-5 md:py-16 mx-10 md:mx-auto max-w-xl pt-20 lg:pt-10 xl:pt-36'>
            <p className='text-cream'>I currently work at Flux Full Cicle, a leading luxury travel digital industry that creates the best digital presence for brands. I am the UX/UI designer and developer that creates user experiences for new website builds and features. I do research, testing and UX improvements. I also take on design and dev freelance projects.</p>
          </div>

          <div className='lg:mt-10 px-5 md:px-16'>
          <Swiper 
            breakpoints={{
            // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
            
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swiperone}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swipertwo}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swiperthree}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swiperfour}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swiperfive}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swipersix}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swiperseven}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swipereight}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full card-bg p-3" src={swipernine}/>
            </SwiperSlide> 
            
            <SwiperNav></SwiperNav>
          </Swiper>
          </div>
          <div className='flex flex-row pt-10 justify-center place-items-center'>
            <img
                src='../../../icons/up-arrow.svg'
                className='w-1/5'
                alt='Profile image'
              />
            <p className='subheading w-1/2 md:w-1/4 text-[20px] leading-[20px] md:text-[28px]'>don't forget life is all about doing the things you enjoy most!</p>
          </div>
        </section>
    </div>
  )
}
