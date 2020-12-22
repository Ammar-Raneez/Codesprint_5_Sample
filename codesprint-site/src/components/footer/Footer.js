import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className="footer">
			<div className="footer__ieeeLogo">
			<img src="https://www.ieee.org/content/dam/ieee-global/images/ieee_mb_white.png" alt="ieee logo"/>
			</div>

			<div className="footer__description">
				<p>© CODESPRINT 2020 | All rights reserved</p>
				<Link className="footer__descriptionSecret" to="/secret"><p>WEBSITE BY NASH-ML</p></Link>
			</div>

			<div className="footer__socialMedia">
				<div>
					<IconButton>
						<YouTubeIcon className="footer__socialMediaIcon" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<FacebookIcon className="footer__socialMediaIcon" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<TwitterIcon className="footer__socialMediaIcon" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<LinkedInIcon className="footer__socialMediaIcon" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<InstagramIcon className="footer__socialMediaIcon" />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Footer;
