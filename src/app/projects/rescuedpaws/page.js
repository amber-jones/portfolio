"use client";

import 'swiper/css';
import 'swiper/css/navigation';

import '../../globals.css';

import ContentLayout from '@/app/components/project-single/content-layout';
import Hero from '@/app/components/project-single/hero';
import Glance from '@/app/components/project-single/glance';
import Content from '@/app/components/project-single/content';

import Nav from '@/app/components/project-single/nav';
import Image from '@/app/components/project-single/image';


export default function RescuedPaws() {
  return (
  
    <div>
      {/* Hero Intro */}
      <Hero 
        title='Saving lives through transformative adoption'
        description='With a scarcity of dedicated social platforms for canine adoption, RescuedPaws aims to provide a specialized space where rescue dogs can connect with potential forever homes. By leveraging technology, we seek to streamline the adoption process, increase awareness about shelter dogs, and significantly contribute to reducing the euthanization rates.'
        note='case study goal: to get as many readers to adopt'
      >
        <Glance>
          <div>
            <h2>Contribution</h2>
            <p>UX Strategy</p>
            <p>Mobile UI design</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p>Figma</p>
          </div>
          <div>
            <h2>Type</h2>
            <p>Personal Project</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>

          <Content title='Overview'>
            In South Africa alone, around 1 million dogs and cats face euthanization yearly due to overpopulation and inadequate nutrition. By focusing on dog adoptions, the app seeks to make a positive impact by increasing awareness, accessibility, and successful placements for these deserving animals.
          </Content>

          <Image
            src='../../images/projects/rescuedpaws/rescuedpaws-one.png'
          ></Image>

          <Content title='Challenges'>
            <p>Limited dedicated platforms for dog adoptions is intensified by the fact that shelters, often non-profits reliant on donations, lack a robust digital presence and struggle to build trust online. Without dedicated spaces, shelters face difficulty showcasing available dogs and connecting with potential adopters. This hampers visibility and accessibility for these deserving animals, impacting their chances of finding forever homes. The challenge extends to financial constraints, as a weak digital presence can impede shelters ability to attract donations. Addressing this involves creating a trusted digital platform that amplifies shelter efforts and facilitates meaningful connections between adopters and rescue dogs.</p>
          </Content>

          <Content title='Solution'>
          Create an app that: 
          <ul className='flex flex-col gap-5 pt-2'>
            <li><strong>Facilitates adoptions:</strong> a user-friendly interface that simplifies the adoption process, allowing potential adopters to connect with rescue dogs easily.</li>
            <li><strong>Raise awareness:</strong> Increase awareness about the overpopulation problem in shelters, the euthanization rates, and the specific nutritional needs of rescue dogs.</li>
            <li><strong>Educate on nutrition:</strong> Provide information and resources about proper nutrition for rescue dogs, promoting their overall well-being.</li>
            <li><strong>Unique app features:</strong> Full profile of dog, video calling, donations, direct messaging(with the dog of course), saved profile feature, galleries for imagery and video, ability to easily contact the shelter to adopt and interactive posts.</li>
          </ul>
          </Content>
        
          <Image
              src='../../images/projects/rescuedpaws/rescuedpaws-two.png'
              caption='Image 5: High fidelity wireframes'
          ></Image>

          <Content title='Learnings'>
            <p>This dog adoption app is a transformative solution that <strong>leverages technology</strong> to address a pressing community need. In the face of staggering euthanization rates and overpopulation challenges, the app harnesses the power of <strong>digital connectivity</strong> to streamline and revolutionize the adoption process. By centralizing information and utilizing user-friendly interfaces, potential adopters can <strong>seamlessly connect</strong> with rescue dogs. Moreover, the app employs innovative features to raise awareness, educate on proper nutrition, and build a supportive community. Through the strategic use of technology, this app not only saves lives but also exemplifies how <strong>digital solutions can be a catalyst for positive change</strong> in the realm of animal welfare, paving the way for a more compassionate and connected community.</p>
          </Content>

        {/* Next and Back Navigation */}
        <Nav
        prevurl='/projects/redesign'
        nexturl='/projects/theplug'
        >
        </Nav>

      </ContentLayout>
    </div>
       
  )
}
