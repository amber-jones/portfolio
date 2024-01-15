'use client'
import Image from 'next/image'

import Nav from './components/navbar'
import HeadingLarge from './components/heading-large'
import LinkItem from './components/link-item'
import Card from './components/card'
import ProjectDescriptionRight from './components/project-description_right'
import ProjectDescriptionLeft from './components/project-description_left'
import Marquee from './components/marquee'
import TextReveal from './components/text-reveal'

import Circles from '../../public/images/circles.png'


import './globals.css';


export default function Home() {

  return (
    <main className=''>
        <section className='text-body -z-50'>
          <div className='mt-5 sm:mt-10 pt-32 px-5 md:pt-36 flex flex-col justify-center w-full text-center'>
            <HeadingLarge>
              Creative <br></br>developer
            </HeadingLarge>
            <img
                src='../../icons/plus.svg'
                className='absolute top-96 right-5 md:right-32 md:top-60 2xl:right-96 h-auto'
                alt='Decorative plus icon'
              />
            {/* <TextReveal></TextReveal> */}
            <h1 className='pt-3 subheading origin-bottom -rotate-12 bg-darkpurple inline whitespace-nowrap mx-auto text-white text-[60px] sm:text-[100px] md:text-[120px] xl:text-[180px] leading-[40px] md:leading-[60px] tracking-tighter text-center'>former chemist</h1>
            
            <div className='relative flex flex-col md:flex-row gap-10 xl:gap-0 items-center md:w-2/3 lg:w-3/5 xl:w-3/6 2xl:w-2/5 mt-10 md:mt-32 lg:mt-52 mx-auto text-left'
            >
              <img 
                src='../../images/home/profile.png'
                className='w-3/5 sm:w-1/3 md:w-2/5 -z-20 h-auto'
                alt='Profile image'
              />
              <div className='z-20 px-5 sm:px-32 md:px-5 lg:px-10'>
                <p className='pb-6'>Thats right, from lab to labtop. I still enjoy crafting solutions, just digital ones that matter - creative, meaningful solutions that are intuitive, user-friendly, and solve real life problems.</p>
                  <LinkItem href="/about">So what is my story?</LinkItem>
              </div>
              <img
                src='../../images/circles.png'
                className='absolute top-52 sm:top-20 md:-top-20 md:left-24 -z-50 h-auto'
                alt='Decorative circles'
              />
              
            </div>
            
          </div>
        </section>

        {/* Skills Marquee section */}

        <Marquee></Marquee>

        {/* Portfolio Section - My Work */}
        
        <section id='work'>
          <div className='pt-24 md:pt-32 xl:pt-40'>
            <div className='-z-50 relative flex flex-col md:flex-row justify-center items-center md:items-end gap-5'>
              <HeadingLarge>Portfolio</HeadingLarge>
              
              <p className='pb-5 md:pb-16 sticky-note absolute top-10 right-10 md:right-10 lg:right-32 p-2 md:p-5 text-[16px] leading-[14px] md:text-[22px] lg:text-[28px] md:leading-[24px] w-1/3 sm:w-1/5'>scroll through some of my work</p>
              <img
                src='../../icons/plus.svg'
                className='absolute -z-50 md:left-32 md:-top-10 h-auto'
                alt='Decorative icon'
              />
            </div>
              <img
                src='../../images/home/underline.png'
                className='w-1/2 mx-auto pt-10 h-auto'
                alt='Decorative underline'
              />
          </div>

          {/* Card Section - Showcasing Four Projects */}

          {/* Project One Start */}
          
            <div className='flex flex-col-reverse md:flex-row justify-between md:mt-24 lg:mt-40'>
              
              {/* Card */}
              <Card 
                href='/projects/booking'
                url='../../images/home/booking-featured-image.png'>
              </Card>

              {/* Project Description */}
              <ProjectDescriptionRight
                number='01'
                title='Book a tour'
                description='Enhancing the booking experience for an adventure tour company through UX/UI enhancements.'
                href='/projects/booking'
                >
              </ProjectDescriptionRight>
            </div>
         
          {/* Project One End */}

          {/* Project Two Start */}
            <div className='flex flex-col md:flex-row justify-between mt-0 md:mt-20 lg:mt-32 xl:mt-52'>
            
              {/* Project Description */}
              <ProjectDescriptionLeft
                number='02'
                title='A luxury stay'
                description='UX strategy implemented to improve the user journey through product clarification and updated UI.'
                href='/projects/redesign'
                >
              </ProjectDescriptionLeft>

              {/* Card */}
              <Card 
                href='/projects/redesign'
                url='../../images/home/ffs-featured-img.png'>
              </Card>

            </div>
          {/* Project Two End */}

          {/* Project Three Start */}
            <div className='flex flex-col-reverse md:flex-row justify-between mt-0 md:mt-20 lg:mt-32 xl:mt-52'>
            {/* Card */}
            <Card 
              href='/projects/rescuedpaws'
              url='../../images/home/rescuedpaws-featured-img.png'>
            </Card>

            {/* Project Description */}
            <ProjectDescriptionRight
              number='03'
              title='My forever home'
              description='Personal project: A mobile app designed to address the critical issue of overpopulation and euthanization in animal shelters, focusing specifically on dog adoptions.'
              href='/projects/rescuedpaws'
              >
            </ProjectDescriptionRight>
            
            </div>
            {/* Project Three End */}

            {/* Project Two Start */}
              <div className='flex flex-col md:flex-row justify-between mt-0 md:mt-20 lg:mt-32 xl:mt-52'>
            
              {/* Project Description */}
              <ProjectDescriptionLeft
                number='04'
                title='Choose Creativity'
                description='Personal project: Designed and developed an e-commerce site for unique sneakers. For those sneaker addicts looking to add to their one-of-a-kind collection.'
                href='/projects/theplug'
                >
              </ProjectDescriptionLeft>

              {/* Card */}
              <Card 
                href='/projects/theplug'
                url='../../images/home/theplug-featured-img.png'>
              </Card>

             </div>
            {/* Project Two End */}
        </section>
    </main>
  )
}
