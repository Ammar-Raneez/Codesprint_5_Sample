import React from 'react'
import About from '../../components/about/About'
import CountDown from '../../components/count-down/CountDown'
import NavBar from '../../components/nav-bar/NavBar'
import PastEvents from './components/past-events/PastEvents'
import Timeline from '../../components/timeline/Timeline'
import Event from './components/events/Event'

function HomePage() {
    return (
        <>
            <NavBar />
            <CountDown />
            <About />
            <Timeline />
            <Event />
            <PastEvents />
        </>
    )
}

export default HomePage
