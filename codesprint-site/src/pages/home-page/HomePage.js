import React from 'react'
import About from './components/about/About'
import NavBar from '../../components/nav-bar/NavBar'
import PastEvents from './components/past-events/PastEvents'
import Event from './components/events/Event'

function HomePage() {
    return (
        <>
            <NavBar />
            <About />
            <Event />
            <PastEvents />
        </>
    )
}

export default HomePage
