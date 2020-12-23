import React from 'react';
import './About.css';
import LogoSpinner from '../../../../components/logo-spinner/LogoSpinner'

function About() {
	return (
		<div className="homeabout">
			<div className="homeabout__banner">
				{/* <img
					className="homeabout__mainLogo"
					src="./logo.png"
					alt=""
				/> */}
				<LogoSpinner />
			</div>

			<div className="homeabout__catchPhrase">
				<h1>TAKING ON THE WORLD OF DATA SCIENCE, ONE PITCH AT A TIME</h1>
			</div>

			<div className="homeabout__register">
				<button className="homeabout__registerButton">REGISTER NOW</button>
			</div>

			<div className="homeabout__description">
				<h2>ABOUT CODESPRINT REVAMPED</h2>
				<p>
					Coming to you this year is a CodeSprint like never before: revamped and revved up, it's sure to keep you at the edges of your seats. Exercise your creativity and brainpower as you engage in a multitude of events we have for you. 
				</p>
				<p>
					The coding based ones are a data science competition, game development competition and hackathon, however, we do have some non-coding events to keep things spiced up and piping hot: a digital arts competition, gaming tournament and IT quiz. 
				</p>
				<p>
					Wait! We have more! Accompanying these competitions is a series of webinars covering a wide range of topics to enrich and enhance your scope of knowledge. Thrilled yet?
				</p>
			</div>
		</div>
	);
}

export default About;
