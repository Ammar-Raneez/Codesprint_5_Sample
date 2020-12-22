import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'

function Hackathon() {
    return (
        <>
            <NavBar />
            <About />
            <Timeline timelineElements={ timelineElements } />
            <Leaderboard />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Hackathon
