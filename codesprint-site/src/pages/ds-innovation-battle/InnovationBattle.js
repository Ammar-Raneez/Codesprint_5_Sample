import React from 'react'
import './InnovationBattle.css'
import NavBar from '../../components/nav-bar/NavBar'
import Timeline from '../../components/timeline/Timeline'
import About from './components/about/About'
import Faq from './components/faq/Faq'
import timelineElements from './timeline-data/TimelineElements'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'

function InnovationBattle() {
    return (
        <div className="innovationBattle">
            <NavBar />
            <About />
            <Timeline timelineElements={ timelineElements } />
            <Leaderboard />
            <Faq />
            <ContactUs />
            <Footer /> 
        </div>
    )
}

export default InnovationBattle
