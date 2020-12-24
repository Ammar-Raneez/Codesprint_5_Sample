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
            <Leaderboard second="75 000" first="150 000" third="50 000" />
            <Faq />
            <ContactUs />
            <Footer /> 
        </div>
    )
}

export default InnovationBattle
