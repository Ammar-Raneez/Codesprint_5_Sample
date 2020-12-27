import React from 'react'
import './GamingDev.css'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'
import Sponsor from '../../components/sponsors/Sponsor'
import Faq from './components/faq/Faq'

function GamingDev() {
    return (
        <div className="gamingDev">
            <NavBar />
            <About />
            <Timeline timelineElements={timelineElements} />
            <Leaderboard second="50 000" first="75 000" third="25 000"  />
            <Faq />
            <ContactUs />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default GamingDev
