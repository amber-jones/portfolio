import bgLines from '../../../public/images/bg-lines.png'

import Nav from '../components/navbar'
import Footer from '../components/footer'

export const metadata = {
  title: 'Amber Jones - About',
  description: 'Get to know me',
}

export default function AboutLayout({ children }) {
  return (
    <main>
        <section>
        { children }
        </section>
    </main>
  )
}