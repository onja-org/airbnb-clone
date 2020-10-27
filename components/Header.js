import React from 'react';
import Filters from './Filters';

import logo from '../logo.svg';
import '../styles/Header.scss';

function Header({ setGuestFilter, setLocationFilter, guestFilter, locationFilter }) {
	return (
		<header>
			<img src={logo} className="logo" alt="WindBNB logo" />
			<Filters
				setGuestFilter={setGuestFilter}
				guestFilter={guestFilter}
				setLocationFilter={setLocationFilter}
				locationFilter={locationFilter}
			/>
		</header>
	);
}

export default Header;
