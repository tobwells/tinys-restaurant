import { Navbar } from '../components/layout/Navbar'
import { MobileCta } from '../components/layout/MobileCta'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { FeaturedDishes } from '../components/sections/FeaturedDishes'
import { About } from '../components/sections/About'
import { Menu } from '../components/sections/Menu'
import { OnlineOrdering } from '../components/sections/OnlineOrdering'
import { Gallery } from '../components/sections/Gallery'
import { Reviews } from '../components/sections/Reviews'
import { Reservation } from '../components/sections/Reservation'
import { Contact } from '../components/sections/Contact'
import { Faq } from '../components/sections/Faq'

export function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <Hero />
        <FeaturedDishes />
        <About />
        <Menu />
        <OnlineOrdering />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
