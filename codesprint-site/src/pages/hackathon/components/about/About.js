import React from 'react';
import CountDown from '../../../../components/count-down/CountDown';
import './About.css';

function About() {
	return (
		<div className="hackabout">
			<div className="hackabout__banner">
				<img
					className="hackabout__mainLogo"
					src="./logo.png"
					alt=""
				/>
			</div>

			<div className="hackabout__catchPhrase">
				<h1>TAKING ON THE WORLD OF DATA SCIENCE, ONE PITCH AT A TIME</h1>
			</div>

			<div className="hackabout__countdown">
				<CountDown />
			</div>

			<div className="hackabout__register">
				<button className="hackabout__registerButton">REGISTER NOW</button>
			</div>

			<div className="hackabout__description">
				<h2>ABOUT CODESPRINT HACKATHON</h2>
				<p>
					As pioneers in organizing Inter-university Hackathons in Sri Lanka, the IEEE Student Branch of IIT is no stranger to bringing the newest and latest innovation competitions to the table. CodeSprint Revamped, which is to be held in 2021, shows great promise. Spanning across multiple events such as a Data Science Innovation battle, a Hackathon, a Digital Art competition, an ICT quiz and more, CodeSprint Revamped aims to bring the greatest technical and business minds together to compete against each other in an epic battle of innovation. 
				</p>
				<p>
					The Hackathon, which is mainly organized by the IEEE Women in Engineering Affinity Group of IIT, will give its participants a valuable opportunity to improve their problem-solving skills, sharpen their critical thinking and polish their design and creative ideas. They will also get a chance to test their skills against other worthy competitors while working under a strict time crunch. 
				</p>
			</div>
		</div>
	);
}

export default About;
