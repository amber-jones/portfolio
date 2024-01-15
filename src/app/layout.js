import './globals.css';
import { East_Sea_Dokdo, Oswald, Lato } from 'next/font/google';

import Nav from './components/navbar';
import SmoothScroll from './components/smoothscroll';

import bgLines from '../../public/images/bg-lines.png'
import Footer from './components/footer';

const eastseadokdo = East_Sea_Dokdo({ 
  subsets: ['latin'],
  variable: '--font-eastseadokdo',
  weight: '400',
});
const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '700'],
});

const lato = Lato({ 
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400'],
});

export const metadata = {
  title: 'Amber Jones',
  description: 'Creative Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${eastseadokdo.variable} ${oswald.variable} ${lato.variable}`}>
      
      <body
      style={{
        backgroundImage: `url(${bgLines.src})`,
        backgroundPosition: "",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        // margin:"25px"
        }}
      >
        <div className='max-w-8xl mx-auto'>
        <SmoothScroll>
        <Nav></Nav>
          {children}
        <Footer></Footer>
        </SmoothScroll>
        </div>
      </body>
    </html>
  )
}