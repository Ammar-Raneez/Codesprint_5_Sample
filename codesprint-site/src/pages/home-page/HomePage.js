import React from 'react'
import About from './components/about/About'
import NavBar from '../../components/nav-bar/NavBar'
import PastEvents from './components/past-events/PastEvents'
import Event from './components/events/Event'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'
import Sponsor from '../../components/sponsors/Sponsor'

function HomePage() {
    return (
        <>
            <NavBar />
            <About />
            <Event />
            <PastEvents />
            <ContactUs />
            <Sponsor />
            <Footer />
        </>
    )
}

export default HomePage
