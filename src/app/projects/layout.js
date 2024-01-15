export const metadata = {
  title: 'Amber Jones - Projects',
  description: 'My work experience',
}

export default function ProjectsLayout({ children }) {
  return (
    <main>
        <section>
        { children }
        </section>
    </main>
  )
}