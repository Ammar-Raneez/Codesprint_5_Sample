import React from 'react'
import './Quiz.css'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer/Footer'
import Sponsor from '../../components/sponsors/Sponsor'

function Quiz() {
    return (
        <div className="quiz">
            <NavBar />
            <About />
            <Timeline timelineElements={timelineElements} />
            <Leaderboard second="5 000" first="10 000" third="2 500" />
            <ContactUs />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default Quiz
