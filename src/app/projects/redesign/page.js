import '../../globals.css';

import ContentLayout from '@/app/components/project-single/content-layout';
import Hero from '@/app/components/project-single/hero';
import Glance from '@/app/components/project-single/glance';
import Content from '@/app/components/project-single/content';
import Image from '@/app/components/project-single/image';
import Nav from '@/app/components/project-single/nav';


export default function Redesign() {
  return (
  
    <div>
      {/* Hero Intro */}
      <Hero 
        title='Book your luxury retreat stay'
        description='In response to guest confusion regarding the product offerings for various stay types, we undertook a crucial UX update for our client. The previous suboptimal user experience had led to misunderstandings, prompting our commitment to enhancing clarity and usability.'
        note='NB: update to a more enticing title'
      >
        <Glance>
          <div>
            <h2>Contribution</h2>
            <p>UX Strategy</p>
            <p>Updated UI</p>
            <p>Dev assistance</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p>Figma</p>
            <p>Whimsical</p>
          </div>
          <div>
            <h2>Team</h2>
            <p>Collaboration with design team at Flux Full Circle</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>

          <Content title='Overview'>
            <p>This project focused on elevating the overall user experience through a strategic approach to UX design and thoughtful UI enhancements. The primary goal was to inspire and educate guests about the stay types right upon landing on the homepage to ultimately increase website enquiries. Our strategy involved creating an intuitive and engaging user interface that not only captivates users upon arrival but also seamlessly guides them through a journey of exploration and understanding, ensuring an optimal and enlightening experience with the array of product offerings.</p>
          </Content>

          <Image
            src='../../images/projects/redesign/redesign-home.png'
            caption='Homepage updates with clear product representation.'
          ></Image>

          <Content
            title='Challenges'>
            <p>Addressing challenges in this project involved describing the stay types without bias, ensuring equitable representation. Additionally, clarity in product location was crucial to prevent user confusion. Another challenge was optimising website copy content which required meticulous attention for an optimal blend of formality and user-friendly communication to convey product details effectively while sticking to brand. Overcoming these challenges demanded a balanced and strategic approach, focusing on clarity and impartial representation.</p>
          </Content>


          <Content
            title='Solution'
          >
            <p>Initiating with user research (Google analytics and Microsoft Clarity) and early-stage testing with multiple iterations from, we laid the foundation for our UX strategy. The updated UI not only enhanced the user experience but ensured that the product offering was clear. A few features enhanced the overall experience and user journey - to name a few: interactive hovers for more product information, at-a-glance room facts exposed on stay sliders and relative imagery with updated SEO-friendly content.</p>
          </Content>

          <Image
            src='../../images/projects/redesign/redesign-stay.png'
            caption='Updated UX/UI across the site to improve product clarity.'
          ></Image>

        {/* Next and Back Navigation */}
        <Nav
        prevurl='/projects/booking'
        nexturl='/projects/rescuedpaws'
        >
        </Nav>

      </ContentLayout>
    </div>
       
  )
}