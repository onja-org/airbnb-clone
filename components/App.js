import React, { useState, useEffect } from 'react';

import Header from './Header';
import StaysList from './StaysList';
import staysData from '../stays.json';
import '../styles/base.scss';

function App() {
	const [stays, setStays] = useState([]);
	const [guestFilter, setGuestFilter] = useState({
		adult: 0,
		children: 0,
	});
	const [locationFilter, setLocationFilter] = useState('');

	useEffect(() => {
		const staysWithId = staysData.forEach((stay, id) => (stay.id = Date.now() + id));
		setStays(staysData);
	}, []);

	function filterByLocation(stay) {
		if (!locationFilter) {
			return stay;
		}
		return stay.city === locationFilter;
	}

	function filterByGuest(stay) {
		if (!guestFilter) {
			return stay;
		}
		return stay.maxGuests > guestFilter.adult + guestFilter.children;
	}

	return (
		<>
			<Header
				guestFilter={guestFilter}
				setGuestFilter={setGuestFilter}
				locationFilter={locationFilter}
				setLocationFilter={setLocationFilter}
			></Header>
			<StaysList stays={stays.filter(filterByLocation).filter(filterByGuest)}></StaysList>
		</>
	);
}

export default App;
