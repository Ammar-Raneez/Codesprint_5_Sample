import React from 'react'
import './Faq.css'

function Faq() {
    return (
        <div className="faqContainer">
            <h1 className="heading">FAQ</h1>
            <div className="faqQuestionContainer">
                <div className="faq">
                    <div className="firstRow">
                        <div className="eachBlock">
                            <h3 className="eachBlock__question">What is the minimum number of participants in a team?</h3>
                            <h3 className="eachBlock__answer">Teams should have a minimum of 3 members. It is, however, preferable for each team to consist of 5 members.</h3>
                        </div>
                        <div className="eachBlock">
                            <h3 className="eachBlock__question">Who can participate?</h3>
                            <h3 className="eachBlock__answer">Anyone interested in GameDev can gather a team and register to participate.</h3>
                        </div>
                    </div>
                    <div className="secondRow">
                        <div className="eachBlock">
                            <h3 className="eachBlock__question">Do we need to know at least the basics of Game Development?</h3>
                            <h3 className="eachBlock__answer">Not necessarily. We hope to provide participants with enough knowledge to develop a game from scratch through our series of workshops.</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <h3 className="blue-text question-1"> When will the competition be held? </h3>
                <h3 className="blue-text question-2"> How many members per team? </h3>
            </div>

            <div>
                <h4 className="grey-text answer-1"> The timeline of the innovation battle will be released before registrations close.</h4>
                <h4 className="grey-text answer-2"> Each team can have *insert number* team members.</h4>
            </div>

            <h1 className="ooga">ooga booga</h1>
            <div>
                <h3 className="blue-text question-3"> Are only teams eligible to participate?</h3>
                <h3 className="blue-text question-4"> What will the workshops cover?</h3>
            </div>

            <div>
                <h4 className="grey-text answer-3"> Yes</h4>
                <h4 className="grey-text answer-4"> The first workshop will be about how to make a project proposal and how to pitch. The next two will cover content about the project design and structure.</h4>
            </div> */}
        </div>
    )
}

export default Faq
