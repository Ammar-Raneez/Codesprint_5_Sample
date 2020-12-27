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
				<h1> GET YOUR GAME ON</h1>
			</div>

			<div className="hackabout__countdown">
				<CountDown />
			</div>

			<div className="hackabout__register">
				<button className="hackabout__registerButton">REGISTER NOW</button>
			</div>

			<div className="hackabout__description">
				<h2>ABOUT CODESPRINT GAME DEVELOPMENT</h2>
				<p>
					There are so many gamers in the world, but do you have what it takes to develop your own game? Game development is a field in IT that not only requires technical knowledge but also creativity and originality. A game developer could be a programmer, an artist, a designer or one of the many roles existing within the game development industry. To build popular games and maintain them regularly is a job that requires skill and experience.
				</p>
				<p>
					At GameDev, teams of 5 members will attend a series of workshops that addresses topics such as pitching, game design, game development, performance and testing, and also workshops detailing subjects such as Hyper Causal games, Data Visualization, 2D gaming (with and without coding) and 3D gaming. 
				</p>
				<p>
					In the first phase, the team will be asked to submit their project proposal. Each proposal will be evaluated on the criteria set by a knowledgeable evaluation team and the selected teams will move on to the next round, game designing, which will be followed by the game development phase. Mentoring sessions will be held every two weeks to assist the teams by providing feedback and resolving any technical issues they might encounter. In the end, a winner will be announced by the judging panel.
				</p>
				<p>
					Don’t miss out on this amazing opportunity to enhance your skills in game development! Pick out your dream team right away and keep an eye out for the registrations to open. 
				</p>
			</div>
		</div>
	);
}

export default About;
