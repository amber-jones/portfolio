import '../../globals.css';

import ContentLayout from '@/app/components/project-single/content-layout';
import Hero from '@/app/components/project-single/hero';
import Glance from '@/app/components/project-single/glance';
import Content from '@/app/components/project-single/content';
import Image from '@/app/components/project-single/image';
import Nav from '@/app/components/project-single/nav';


export default function BookingEngine() {
  return (
  
    <div>
      {/* Hero Intro */}
      <Hero 
        title='A seamless booking experience'
        description='We redesigned and developed a client adventure tour website with the goal of increasing conversions. With the udpated site look and feel, we were tasked to update the booking engine experience to create a seamless user journey.'
        note='note: keep intro short, to the point and engaging'
      >
        <Glance>
          <div className='sm:w-1/3'>
            <h2>Contribution</h2>
            <p>User research</p>
            <p>Updated UX and UI</p>
          </div>
          <div className='sm:w-1/3'>
            <h2>Tools</h2>
            <p>Whimsical</p>
            <p>Figma</p>
          </div>
          <div className='sm:w-1/3'>
            <h2>Team</h2>
            <p>Collaboration with design team at Flux Full Circle to ensure brand consistency.</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>
          <Content title='Overview'>
            <p>Enhancement of the booking engine needed to be implemented. We saw how users were struggling to book a tour through the outdated booking engine. Our goal was to increase booking conversions and ROI.</p>
          </Content>
          <Image
            src='../../images/projects/booking/before.png'
            caption='Image 1: Old booking engine design'
          ></Image>

         

          <Content title='Challenges'>
            <p>A few of the challenges included: Limitations on UX/UI implementation due to third party booking engine. The adoption of the booking engine more for returning travellers.</p>
          </Content>


          <Content title='Solution'>
            <p>The solution was to enhance the full stepped booking engine form experience. The UX was</p>
          </Content>

          <Image
            src='../../images/projects/booking/after.png'
            caption='test'
          ></Image>

          <Content
            title='Takeaways'
            content='CONTENT A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

        {/* Next and Back Navigation */}
        <Nav
        prevurl='/'
        nexturl='#'
        >
        </Nav>

      </ContentLayout>
    </div>
       
  )
}
