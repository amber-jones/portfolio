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
        description='We redesigned and developed a client adventure tour website with the goal of increasing conversions. With the udpated site look and feel, we were tasked to update the booking engine experience to create a seamless user journey from website to booking engine.'
        note='note: keep intro short, to the point and engaging'
      >
        <Glance>
          <div className='sm:w-1/3'>
            <h2>Contribution</h2>
            <p>UX Strategy</p>
            <p>Updated UI</p>
          </div>
          <div className='sm:w-1/3'>
            <h2>Tools</h2>
            <p>Whimsical</p>
            <p>Figma</p>
          </div>
          <div className='sm:w-1/3'>
            <h2>Team</h2>
            <p>Collaboration with design team at Flux Full Circle</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>
          <Content title='Overview'>
            <p>To enhance the booking experience, we strategically implemented improvements to the booking engine. Recognising user challenges with the outdated system, our objective was clear: elevate user satisfaction and streamline the tour booking process. By focusing on a robust UX strategy, we aimed not only to address pain points but also to drive increased booking conversions, ultimately maximising ROI for our client.</p>
          </Content>
          <Image
            src='../../images/projects/booking/before.png'
            caption='Image 1: Old booking engine design'
          ></Image>

         

          <Content title='Challenges'>
            <p>Among the challenges encountered were limitations in implementing an optimal UX/UI due to the constraints of a third-party booking engine. A particular concern arose around user adoption of the enhanced booking engine, especially in the case of returning travellers.</p>
          </Content>


          <Content title='Solution'>
            <p>To tackle the challenges arising from the constraints of the third-party booking engine and concerns over user adoption, we implemented a robust UX strategy. A key component of this strategy involved refining the user interface (UI) to seamlessly integrate with the existing site design. This not only ensured a cohesive visual experience but also addressed potential usability issues.</p>

            <p className='pt-5'>Furthermore, we enhanced the clarity and intuitiveness of the form steps, recognising the importance of a straightforward and user-friendly booking process. By making the steps more transparent and intuitive, we aimed to eliminate confusion and friction, ultimately fostering a positive user experience. These strategic improvements were instrumental in optimising the booking journey and alleviating the apprehensions, particularly for returning travellers.</p>
          </Content>

          <Image
            src='../../images/projects/booking/after.png'
            caption='Enhanced booking experience through updated UX and UI.'
          ></Image>


        {/* Next and Back Navigation */}
        <Nav
        prevurl='/'
        nexturl='/projects/redesign'
        >
        </Nav>

      </ContentLayout>
    </div>
       
  )
}
