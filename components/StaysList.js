import React from 'react';
import Stay from './Stay.js';
import '../styles/StaysList.scss';

function StaysList({ stays }) {
	return (
		<main>
			<div className="stays-header">
				<h5 className="header-text">Stays in Finland</h5>
				<span className="stays-count">{stays.length} stays</span>
			</div>
			<div className="stay-container">
				{stays.map(stay => {
					return <Stay key={stay.id} stay={stay} />;
				})}
			</div>
		</main>
	);
}

export default StaysList;
