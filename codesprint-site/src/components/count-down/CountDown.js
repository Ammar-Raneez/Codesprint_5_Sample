import React, { useEffect, useRef, useState } from 'react';
import './CountDown.css';

function CountDown() {
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = () => {
		const countDownDate = new Date('Jan 19, 2021 00:00:00').getTime();
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				// stop timer
				clearInterval(interval.current);
			} else {
				// update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(mins);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<div className="countDown">
			<div className="countDown__time">
				<div>
					<p>{timerDays}</p>
					<p>DAYS</p>
				</div>
				<span>:</span>
				<div>
					<p>{timerHours}</p>
					<p>HOURS</p>
				</div>
				<span>:</span>
				<div>
					<p>{timerMinutes}</p>
					<p>MINUTES</p>
				</div>
				<span>:</span>
				<div>
					<p>{timerSeconds}</p>
					<p>SECONDS</p>
				</div>
			</div>
		</div>
	);
}

export default CountDown;
