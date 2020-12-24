import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'
import Sponsor from '../../components/sponsors/Sponsor'

function Hackathon() {
    return (
        <>
            <NavBar />
            <About />
            <Timeline timelineElements={ timelineElements } />
            <Leaderboard second="20 000" first="25 000" third="15 000" />
            <ContactUs />
            <Sponsor />
            <Footer />
        </>
    )
}

export default Hackathon
