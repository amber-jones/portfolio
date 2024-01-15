import '../../globals.css';

import ContentLayout from '@/app/components/project-single/content-layout';
import Hero from '@/app/components/project-single/hero';
import Glance from '@/app/components/project-single/glance';
import Content from '@/app/components/project-single/content';
import Image from '@/app/components/project-single/image';
import Nav from '@/app/components/project-single/nav';


export default function Checmed() {
  return (
  
    <div>
      {/* Hero Intro */}
      <Hero 
        title='Empowering Minds, One Connection at a Time.'
        description='Checmed is a leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
      >
        <Glance>
          <div>
            <h2>Contribution</h2>
            <p>Brand CI Development</p>
            <p>Landing Page design & development</p>
            <p>UX research & design</p>
            <p>UI mobile app design</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p>Figma</p>
            <p>Next.js</p>
          </div>
          <div>
            <h2>Role</h2>
            <p>UX/UI Designer</p>
            <p>Front end developer (landing page)</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>

          <Image
            src='../../images/projects/checmed/checmed-one.png'
            caption='test'
          ></Image>

          <Content
            title='Overview'
            content='CONTENT A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

          <Content
            title='Challenges'
            content='Challenges A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

          <Image
            src='../../images/projects/checmed/checmed-one.png'
            caption='test'
          ></Image>

          <Content
            title='Process'
            content='CONTENT A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

          <Image
            src='../../images/projects/checmed/checmed-one.png'
            caption='test'
          ></Image>

          <Content
            title='Learnings'
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
