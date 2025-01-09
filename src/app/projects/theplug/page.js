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
        title='A collaborative sneaker community'
        description='The Plug caters to a discerning sneaker-conscious consumer base, presenting a curated selection of international brands. Our offerings extend to a diverse array of best-level limited editions and exclusives.'
        note='Note: remember to think about user journey'
      >
        <Glance>
          <div>
            <h2>Contribution</h2>
            <p>UX Strategy</p>
            <p>UI design</p>
            <p>Wordpress development</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p>Figma</p>
            <p>WP Elementor & WooCommerce</p>
          </div>
          <div>
            <h2>Type</h2>
            <p>Personal Project</p>
          </div>
        </Glance>

      </Hero>

      {/* Content */}
      <ContentLayout>

          <Content
            title='Overview'
          >
            <p>Through a seamless blend of in-store and online experiences, The Plug aims to provide enthusiasts with unparalleled access to the pinnacle of sneaker culture, reflecting a deep understanding of sneaker heritage, an alignment with current trends, and a commitment to brand innovation through technology.</p>
          </Content>

          <Image
            src='../../images/projects/theplug/theplug-home.png'
            caption='Engaging homepage with optimal customer journey'
          ></Image>

          <Content
            title='Challenges'
          >
            <p>Creating a website for a sneaker store involves addressing challenges such as managing a diverse product catalog, ensuring a seamless user experience, implementing efficient inventory management, prioritising mobile responsiveness, securing online payments, maintaining consistent branding and navigating a competitive market. Successfully overcoming these challenges requires a strategic approach, combining effective website design, technological solutions, and responsive customer service to create a positive and distinctive online shopping experience for consumers.</p>
          </Content>

          <Content
            title='Solution'
          >
            <p>Craft a website with an upscale and sophisticated ambiance, embodying a blend of minimalistic trends. Utilize a palette of neutral tones complemented by strategic pops of color for a refined visual experience. Opt for the friendly and modern font to enhance readability and approachability, aligning with a minimalistic yet trendy vibe. Integrate a comprehensive UX strategy, prioritizing easy navigation through thoughtfully designed dropdown menus, intuitive filters, and strategically placed buttons. This user-centric approach ensures not only an aesthetically pleasing design but also a seamless and enjoyable browsing experience, catering to the discerning tastes of an upper-market audience. 
            </p>
          </Content>

          <Image
            src='../../images/projects/theplug/theplug-site.png'
            caption='Wordpress E-Commerce Sneaker Store'
          ></Image>


        {/* Next and Back Navigation */}
        <Nav
        prevurl='/projects/rescuedpaws'
        nexturl='/projects/booking'
        >
        </Nav>

      </ContentLayout>
    </div>
       
  )
}
