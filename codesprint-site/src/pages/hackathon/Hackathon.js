import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'
import ContactUs from '../../components/contact-us/ContactUs'

function Hackathon() {
    return (
        <>
            <NavBar />
            <About />
            <Timeline timelineElements={ timelineElements } />
            <Leaderboard />
            <ContactUs />
        </>
    )
}

export default Hackathon
