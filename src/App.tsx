import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Intro } from './sections/Intro'
import { ValueProp } from './sections/ValueProp'
import { Services } from './sections/Services'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <ValueProp />
        <Services />
        <Work />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
