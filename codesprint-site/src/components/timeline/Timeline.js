import React from 'react'
import './Timeline.css'
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline({ timelineElements }) {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    
    return (
        <div className="timeline">
            <VerticalTimeline>
                {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                return (
                    <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        {element.title}
                    </h3>
                    {/* <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5> */}
                    {/* <p id="description">{element.description}</p>
                    {showButton && (
                        <a
                        className={`button ${
                            isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="/"
                        >
                        {element.buttonText}
                        </a>
                    )} */}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
            <h1 className="title">TIMELINE</h1>
        </div>
    )
}

export default Timeline
