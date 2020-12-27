import React from 'react'
import './DigitalArt.css'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'
import Sponsor from '../../components/sponsors/Sponsor'

function DIgitalArt() {
    return (
        <div className="digitalArt">
            <NavBar />
            <About />
            <Timeline timelineElements={timelineElements} />
            <Leaderboard second="15 000" first="20 000" third="10 000" />
            <ContactUs />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default DIgitalArt
