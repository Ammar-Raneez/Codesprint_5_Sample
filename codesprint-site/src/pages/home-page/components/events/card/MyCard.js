import React from 'react';
import './MyCard.css';
import { Link } from 'react-router-dom';

function MyCard({ imgUrl, eventTitle, registerLink, readMoreLink, direction }) {
	return (
		<div className={'myCard' + direction}>
			{/* image */}
			<div className="myCard__image">
				<img src={imgUrl} alt="" />
			</div>

			{/* description */}
			<div className={'myCard__description' + direction}>
				{/* title */}
				<div className={'myCard__descriptionTitle' + direction}>
					<h2>{eventTitle}</h2>
				</div>

				{/* buttons */}
				<div className={'myCard__descriptionBtn' + direction}>
					<Link to={readMoreLink}>
						<a className={"myCard__descriptionBtnReadmore" + direction} rel="noreferrer">
							Read more
						</a>
					</Link>

					<a href={registerLink}>
						<button>REGISTER</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default MyCard;
