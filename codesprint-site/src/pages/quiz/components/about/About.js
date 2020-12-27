import React from 'react';
import CountDown from '../../../../components/count-down/CountDown';
import LogoSpinner from '../../../../components/logo-spinner/LogoSpinner'
import './About.css';

function About() {
	return (
		<div className="hackabout">
			<div className="hackabout__banner">
				{/* <img
					className="hackabout__mainLogo"
					src="./logo.png"
					alt=""
				/> */}
				<LogoSpinner />
			</div>

			<div className="hackabout__catchPhrase">
				<h1> EVERY CHOICE & EVERY SECOND COUNTS</h1>
			</div>

			<div className="hackabout__countdown">
				<CountDown />
			</div>

			<div className="hackabout__register">
				<button className="hackabout__registerButton">REGISTER NOW</button>
			</div>

			<div className="hackabout__description">
				<h2>ABOUT CODESPRINT ICT QUIZ</h2>
				<p>
					CodeSprint Revamped returns with a variety of events this year, of which one is “event name”.  With this quiz comes a great opportunity to test your ICT knowledge and win exciting cash prizes! “event name” aims to test participants’ competency in different aspects of ICT based on their academic level and also provide a platform for students to showcase their talents in ICT. This quiz will cover two categories: GCE O/L (Grade 10 & 11) and GCE A/L students, who are ready to put to test their ICT knowledge.
				</p>
				<p>
					“quiz name” is an individual online quiz that will be held in two rounds. In the first round, the participants will be given 40 MCQs based on the A/L and O/L syllabus. The candidates qualified for the second round will have to answer structured questions focusing on their problem-solving skills. The winners will be selected on the basis of their performance by a panel of judges.
				</p>
			</div>
		</div>
	);
}

export default About;
