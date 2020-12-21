import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import Timeline from '../../components/timeline/Timeline'
import timelineElements from './timeline-data/TimelineElements'

function Hackathon() {
    return (
        <div>
            <NavBar />
            <About />
            <Timeline timelineElements={ timelineElements } />
            <Leaderboard />
        </div>
    )
}

export default Hackathon
