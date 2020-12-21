import React from 'react';
import './About.css';

function About() {
	return (
		<div className="about">
			<div>
				<img
					className="about__mainLogo"
					src="./logo.png"
					alt=""
				/>
			</div>

			<div className="about__description">
				<h2>ABOUT CODESPRINT REVAMPED</h2>
				<p>
					One of the leading events of CodeSprint this year is, CodeSprint Revamped - the Data Science Innovation
					battle. Every day, an immense amount of data is generated globally. According to the World Economic Forum, it
					is estimated that 463 exabytes (1000 to the power of six) of data would be created daily in the world by the
					year 2025. Countless algorithms, processes are used to extract and analyze data, recognize patterns and obtain
					useful information out of it that can be used in fields such as marketing, finance, health care among many
					others, as long as that industry generates data. Data science is also a major part of machine learning and
					training AI models that require huge data sets to learn and provide their functionalities.{' '}
				</p>
			</div>
		</div>
	);
}

export default About;
