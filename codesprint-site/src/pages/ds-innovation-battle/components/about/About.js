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
				<h1>TAKING ON THE WORLD OF DATA SCIENCE, ONE PITCH AT A TIME</h1>
			</div>

			<div className="hackabout__countdown">
				<CountDown />
			</div>

			<div className="hackabout__register">
				<button className="hackabout__registerButton">REGISTER NOW</button>
			</div>

			<div className="hackabout__description">
				<h2>ABOUT CODESPRINT DATATHON</h2>
				<p>
					One of the leading events of CodeSprint this year is, (event name) - the Data Science Innovation battle. Every day, an immense amount of data is generated globally.  According to the World Economic Forum, it is estimated that 463 exabytes (1000 to the power of six) of data would be created daily in the world by the year 2025. Countless algorithms, processes are used to extract and analyze data, recognize patterns and obtain useful information out of it that can be used in fields such as marketing, finance, health care among many others, as long as that industry generates data. Data science is also a major part of machine learning and training AI models that require huge data sets to learn and provide their functionalities. 
				</p>
				<p>
					Data is constantly evolving and changing, and now more than ever, newer and more creative ideas are needed to make the field more efficient and advance it into the next era. With that in mind, this year at CodeSprint, competitors will get a chance to pitch their ideas for unique innovations that fall under the scope of data science. An informative workshop conducted by expert speakers will precede each round, and cash prizes will be awarded to the top three teams at the end of the competition.
				</p>
				<p>
					Registrations for the data science innovation battle will be open from 19th of December onwards and stay tuned for more updates. Don’t miss out on this opportunity to showcase your ideas and gain valuable experience!
				</p>
			</div>
		</div>
	);
}

export default About;
