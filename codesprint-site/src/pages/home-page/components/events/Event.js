import React from 'react'
import './Event.css'
import { Accordion, Card } from 'react-bootstrap';
import MyCard from './card/MyCard';
import CardBody from './cardBody/CardBody';

function Event() {
    return (
		<div className="event">
			<h1>EVENTS</h1>
			<Accordion className="accordion">
				{/* event 01 */}
				<Card className="card">
					<Accordion.Toggle as={Card.Header} eventKey="0">
						<MyCard
							imgUrl="https://www.founderpassion.org/wp-content/uploads/2017/09/hackathon-founderpassion-foundation.png"
							eventTitle="CodeSprint Hackathon"
							registerLink=""
							readMoreLink="/hackathon"
							direction="Left"
						/>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<CardBody
								imgUrl="https://zegal.com/wp-content/uploads/2019/04/alex-kotliarskyi-361099-unsplash-1024x683.jpg"
								eventTitle="CodeSprint Hackathon"
								eventDes="One of the leading events of CodeSprint this year is, CodeSprint Revamped - the Data Science Innovation battle. Every day, an immense amount of data is generated globally.  According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si"
								direction="Left"
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>

				{/* event 02 */}
				<Card className="card">
					<Accordion.Toggle as={Card.Header} eventKey="1">
                        <MyCard
							imgUrl="https://www.founderpassion.org/wp-content/uploads/2017/09/hackathon-founderpassion-foundation.png"
							eventTitle="CodeSprint Datathon"
                            registerLink=""
                            readMoreLink="/innovationbattle"
                            direction="Right"
						/>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
                            <CardBody
								imgUrl="https://zegal.com/wp-content/uploads/2019/04/alex-kotliarskyi-361099-unsplash-1024x683.jpg"
								eventTitle="CodeSprint Datathon"
                                eventDes="One of the leading events of CodeSprint this year is, CodeSprint Revamped - the Data Science Innovation battle. Every day, an immense amount of data is generated globally.  According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si"
                                direction="Right"
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>

        		{/* event 03 */}
				<Card className="card">
					<Accordion.Toggle as={Card.Header} eventKey="2">
                        <MyCard
							imgUrl="https://www.founderpassion.org/wp-content/uploads/2017/09/hackathon-founderpassion-foundation.png"
							eventTitle="CodeSprint Art Competition"
                            registerLink=""
                            readMoreLink=""
                            direction="Left"
						/>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
                            <CardBody
								imgUrl="https://zegal.com/wp-content/uploads/2019/04/alex-kotliarskyi-361099-unsplash-1024x683.jpg"
								eventTitle="CodeSprint Art Competition"
                                eventDes="One of the leading events of CodeSprint this year is, CodeSprint Revamped - the Data Science Innovation battle. Every day, an immense amount of data is generated globally.  According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si"
                                direction="Left"
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>

        		{/* event 04 */}
				<Card className="card">
					<Accordion.Toggle as={Card.Header} eventKey="3">
                        <MyCard
                            imgUrl="https://www.founderpassion.org/wp-content/uploads/2017/09/hackathon-founderpassion-foundation.png"
                            eventTitle="CodeSprint Quiz"
                            registerLink=""
                            readMoreLink=""
                            direction="Right"
                        />
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
                            <CardBody
								imgUrl="https://zegal.com/wp-content/uploads/2019/04/alex-kotliarskyi-361099-unsplash-1024x683.jpg"
								eventTitle="CodeSprint Quiz"
                                eventDes="One of the leading events of CodeSprint this year is, CodeSprint Revamped - the Data Science Innovation battle. Every day, an immense amount of data is generated globally.  According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si"
                                direction="Right"
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>

				{/* event 5 */}
				<Card className="card">
					<Accordion.Toggle as={Card.Header} eventKey="3">
                        <MyCard
                            imgUrl="https://www.founderpassion.org/wp-content/uploads/2017/09/hackathon-founderpassion-foundation.png"
                            eventTitle="Gaming"
                            registerLink=""
                            readMoreLink=""
                            direction="Left"
                        />
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
                            <CardBody
								imgUrl="https://zegal.com/wp-content/uploads/2019/04/alex-kotliarskyi-361099-unsplash-1024x683.jpg"
								eventTitle="Gaming"
                                eventDes="One of the leading events of CodeSprint this year is, CodeSprint Revamped - the Data Science Innovation battle. Every day, an immense amount of data is generated globally.  According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of si"
                                direction="Left"
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
    )
}

export default Event
