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
				<h1> SPEAK YOUR MIND… THROUGH ART!</h1>
			</div>

			<div className="hackabout__countdown">
				<CountDown />
			</div>

			<div className="hackabout__register">
				<button className="hackabout__registerButton">REGISTER NOW</button>
			</div>

			<div className="hackabout__description">
				<h2>ABOUT CODESPRINT DIGITAL ART COMPETITION</h2>
				<p>
					CodeSprint Revamped follows the footsteps of its forerunners and shows great promise, aiming to hone the creative thinking and innovation of all its participants as well as providing them with a platform to showcase their ideas and challenge their intellect in a stimulating and competitive environment. This year, it comprises multiple categories, one of which is a CodeSprint: DigiArt. 
				</p>
				<p>
					“A picture is worth a thousand words” and digital art is no different. CodeSprint Revamped strives to highlight the ones gifted with creativity and out-of-the-box ideas. The theme for CodeSprint: DigiArt will be ‘Sustainability for a Better Future’ based on the 17 Sustainable Development Goals set by the United Nations in 2015.
				</p>
				<p>
					The participants will get a week to complete their artwork after the guidelines are released, and a panel of judges will choose three winners from the submissions. The winners will get the opportunity to exhibit their artwork at the final CodeSprint event and their design will be displayed in the souvenir book. 
				</p>
				<p>
					Do you have what it takes to whip up an inspiring piece of art? Registrations are just around the corner, keep your digital pencils sharp and ready! Stay tuned for more information.
				</p>
			</div>
		</div>
	);
}

export default About;
