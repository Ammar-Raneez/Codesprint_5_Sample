import React, { useState } from 'react'
import './PastEvents.css'

function PastEvents() {
    const [checked, setChecked] = useState();

    const toggleChecked = () => {
        setChecked(checked);
    }

    return (
        <div className="past_events">
            <h1 className="past_eventsHeading">
                PREVIOUS EVENTS
            </h1>
            <section id="slider">
                <input type="radio" name="slider" id="s1" onChange={toggleChecked} />
                <input type="radio" name="slider" id="s2" onChange={toggleChecked} />
                <input type="radio" name="slider" id="s3" onChange={toggleChecked} />
                <input type="radio" name="slider" id="s4" onChange={toggleChecked} />
                <input type="radio" name="slider" id="s5" onChange={toggleChecked} />
                <label htmlFor="s1" id="slide1">
                    <label>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                    </label>
                </label>
                <label htmlFor="s2" id="slide2">
                    <label>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                    </label>
                </label>
                <label htmlFor="s3" id="slide3">
                    <label>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                    </label>
                </label>
                <label htmlFor="s4" id="slide4">
                    <label>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                    </label>
                </label>
                <label htmlFor="s5" id="slide5">
                    <label>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure!
                    </label>
                </label>
            </section>
        </div>
    )
}

export default PastEvents
