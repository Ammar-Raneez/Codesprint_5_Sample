import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__ieeeLogo">
				<img src="https://www.ieee.org/content/dam/ieee-global/images/ieee_mb_white.png" alt="" />
			</div>

			<div className="footer__description">
				<p>© CODESPRINT 2020 | All rights reserved</p>
				<p>WEBSITE BY NASH-ML</p>
			</div>

			<div className="footer__socialMedia">
				<div>
					<IconButton>
						<TwitterIcon className="footer__socialMediaTwitter" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<InstagramIcon className="footer__socialMediaInstagram" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<YouTubeIcon className="footer__socialMediaYouTube" />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<LinkedInIcon className="footer__socialMediaLinked" />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Footer;
