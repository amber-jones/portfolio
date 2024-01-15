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
      >
        <Glance>
          <div>
            <h2>Contribution</h2>
            <p>UX Design</p>
            <p>UI Designer</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p>Figma</p>
          </div>
          <div>
            <h2>Role</h2>
            <p>UX/UI Designer</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>

          <Content title='Background'>
            In South Africa alone, around 1 million dogs and cats face euthanization yearly due to overpopulation and inadequate nutrition. By focusing on dog adoptions, the app seeks to make a positive impact by increasing awareness, accessibility, and successful placements for these deserving animals.
          </Content>

          <Image
            src='../../images/projects/rescuedpaws/rescuedpaws-one.png'
          ></Image>

          <Content title='Problem'>
            <p>Limited dedicated platforms for dog adoptions is intensified by the fact that shelters, often non-profits reliant on donations, lack a robust digital presence and struggle to build trust online. Without dedicated spaces, shelters face difficulty showcasing available dogs and connecting with potential adopters. This hampers visibility and accessibility for these deserving animals, impacting their chances of finding forever homes. The challenge extends to financial constraints, as a weak digital presence can impede shelters' ability to attract donations. Addressing this involves creating a trusted digital platform that amplifies shelter efforts and facilitates meaningful connections between adopters and rescue dogs.</p>
          </Content>

          <Content
            title='Process'>
              <p><strong>research and discovery</strong> to gather insights into the unique challenges and opportunities within the dog adoption landscape. This foundational step involves understanding current adoption practices, identifying pain points for adopters and rescue organizations, and researching technological trends in the animal welfare sector.</p>

              <p className='pt-5'>This research sets the stage for the subsequent creation of detailed <strong>user personas</strong>, ensuring that the app is informed by a comprehensive understanding of the diverse needs and preferences of its target audience.</p>
              
              <p className='pt-5'><strong>Scamps, or rough sketches,</strong> are then developed to visualize the app's layout and key features, facilitating brainstorming and early conceptualization. Low-fidelity wireframing refines these ideas into a skeletal structure, focusing on user interface essentials and ensuring a clear, intuitive design.</p>
              
              <p className='pt-5'>The <strong>user journey sitemap</strong> is crafted to map out the navigation flow, ensuring a seamless and logical experience for users interacting with the app. Finally, high-fidelity wireframes bring the envisioned design to life, incorporating visual elements and refining the user interface for a polished and engaging user experience.</p>
              
              <p className='pt-5'>Each step aligns with the app's mission, emphasizing <strong>user-centric design</strong> to simplify dog adoptions, raise awareness, and create a supportive community for rescue animals.</p>
          </Content>

          <Content title='Solution'>
          Create an app that: 
          <ul className='flex flex-col gap-5 pt-2'>
            <li><strong>Facilitates adoptions:</strong> a user-friendly interface that simplifies the adoption process, allowing potential adopters to connect with rescue dogs easily.</li>
            <li><strong>Raise awareness:</strong> Increase awareness about the overpopulation problem in shelters, the euthanization rates, and the specific nutritional needs of rescue dogs.</li>
            <li><strong>Educate on nutrition:</strong> Provide information and resources about proper nutrition for rescue dogs, promoting their overall well-being.</li>
            <li><strong>Unique app features:</strong> Full profile of dog, video calling, donations, quick adoption</li>
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
        prevurl='/'
        nexturl='#'
        >
        </Nav>

      </ContentLayout>
    </div>
       
  )
}
