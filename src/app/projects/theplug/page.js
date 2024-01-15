import '../../globals.css';

import ContentLayout from '@/app/components/project-single/content-layout';
import Hero from '@/app/components/project-single/hero';
import Glance from '@/app/components/project-single/glance';
import Content from '@/app/components/project-single/content';
import Image from '@/app/components/project-single/image';
import Nav from '@/app/components/project-single/nav';


export default function ThePlug() {
  return (
  
    <div>
      {/* Hero Intro */}
      <Hero 
        title='The Plug'
        description='Checmed is a leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
      >
        <Glance>
          <div>
            <h2>Contribution</h2>
            <p>Wireframing</p>
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

          <Content
            title='Overview'
            content='CONTENT A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

          <Image
            src='../../images/projects/theplug/theplug-home.png'
            caption='test'
          ></Image>

          <Content
            title='Challenges'
            content='Challenges A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

          <Content
            title='Process'
            content='CONTENT A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.  A leading online platform that offers personalised, expert, virtual psychiatric consultations to provide accessible mental healthcare and resources to patients.'
          >
          </Content>

          <Image
            src='../../images/projects/theplug/theplug-site.png'
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
