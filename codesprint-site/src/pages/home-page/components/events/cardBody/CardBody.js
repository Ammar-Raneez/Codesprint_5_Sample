import React from 'react';
import './CardBody.css';

function CardBody({ imgUrl, eventTitle, eventDes, direction }) {
	return (
		<div className={'cardBody' + direction}>
			<div className="cardBody__image">
				<img src={imgUrl} alt="" />
			</div>
			<div className="cardBody__description">
				<h2 className="cardBody__descriptionTitle">{eventTitle}</h2>
				<div className="cardBody__descriptionBody">{eventDes}</div>
			</div>
		</div>
	);
}

export default CardBody;
