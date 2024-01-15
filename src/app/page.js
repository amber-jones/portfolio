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
            <Image
                src='../../icons/plus.svg'
                className='absolute top-96 right-5 md:right-32 md:top-60 2xl:right-96'
                alt='Decorative plus icon'
              />
            {/* <TextReveal></TextReveal> */}
            <h1 className='pt-3 subheading origin-bottom -rotate-12 bg-darkpurple inline whitespace-nowrap mx-auto text-white text-[60px] sm:text-[100px] md:text-[120px] xl:text-[180px] leading-[40px] md:leading-[60px] tracking-tighter text-center'>former chemist</h1>
            
            <div className='relative flex flex-col md:flex-row gap-10 xl:gap-0 items-center md:w-2/3 lg:w-3/5 xl:w-3/6 2xl:w-2/5 mt-10 md:mt-32 lg:mt-52 mx-auto text-left'
            >
              <Image 
                src='../../images/home/profile.png'
                className='w-3/5 sm:w-1/3 md:w-2/5 -z-20'
                alt='Profile image'
              />
              <div className='z-20 px-5 sm:px-32 md:px-5 lg:px-10'>
                <p className='pb-6'>Thats right, from lab to labtop. I still enjoy crafting solutions, just digital ones that matter - creative, meaningful solutions that are intuitive, user-friendly, and solve real life problems.</p>
                  <LinkItem href="/about">So what is my story?</LinkItem>
              </div>
              <Image
                src='../../images/circles.png'
                className='absolute top-52 sm:top-20 md:-top-20 md:left-24 -z-50'
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
              <Image
                src='../../icons/plus.svg'
                className='absolute -z-50 md:left-32 md:-top-10'
                alt='Profile image'
              />
            </div>
              <Image
                src='../../images/home/underline.png'
                className='w-1/2 mx-auto pt-10'
                alt='Profile image'
              />
          </div>

          {/* Card Section - Showcasing Four Projects */}

          {/* Project One Start */}
          
            <div className='flex flex-col-reverse md:flex-row justify-between md:mt-24 lg:mt-40'>
              
              {/* Card */}
              <Card 
                href='/projects/booking'
                url='../../images/home/booking-featured-image.png'
                // title='Mobile App Design' 
                description='ChecMed offers personalised, expert psychiatric consultations to provide accessible mental healthcare, fostering well-being and a better quality of life. Connecting patients to doctors virtually.'>
              </Card>

              {/* Project Description */}
              <ProjectDescriptionRight
                number='01'
                title='Book a tour!'
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
                title='Website Redesign'
                description='UX/UI Design: Refresh of the UX and updated UI from exisiting brand CI. UX wireframing and UI design was implemented.'
                href='/projects/redesign'
                >
              </ProjectDescriptionLeft>

              {/* Card */}
              <Card 
                href='/projects/redesign'
                url='../../images/home/ffs-featured-img.png'
                title='Website Re-Design' 
                description='This client is a property group that consists of 2 luxury villas. Wellness retreats are offered and luxury concierge.'>
              </Card>

            </div>
          {/* Project Two End */}

          {/* Project Three Start */}
            <div className='flex flex-col-reverse md:flex-row justify-between mt-0 md:mt-20 lg:mt-32 xl:mt-52'>
            {/* Card */}
            <Card 
              href='/projects/rescuedpaws'
              url='../../images/home/rescuedpaws-featured-img.png'
              // title='Mobile App Design' 
              description='RescuedPaws mission is for rescue dogs all over the world to find their forever companions and live in a safe and loving home. They deserve security and happiness just like you and me.'>
            </Card>

            {/* Project Description */}
            <ProjectDescriptionRight
              number='03'
              title='Social App Design'
              description='Case Study: A mobile application designed to address the critical issue of overpopulation and euthanization in animal shelters, focusing specifically on dog adoptions.'
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
                title='E-commerce Site'
                description='The Plug is an e-commerce website that is targeted to a higher earning target market - The Plug not only sells sneakers but allows for collectables and creates a community'
                href='/projects/theplug'
                >
              </ProjectDescriptionLeft>

              {/* Card */}
              <Card 
                href='/projects/theplug'
                url='../../images/home/theplug-featured-img.png'
                title='Website Re-Design' 
                description='Lorem ipsum dolor sit amet consectetur. Iaculis nullam lorem malesuada duis tortor pellentesque dictum ipsum massa.'>
              </Card>

             </div>
            {/* Project Two End */}
        </section>
    </main>
  )
}
