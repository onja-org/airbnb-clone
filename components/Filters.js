import React, { useState } from 'react';
import FilterModal from './FilterModal';
import '../styles/Filters.scss';

function Filters({ setGuestFilter, setLocationFilter, guestFilter, locationFilter }) {
	const [isFilterOpen, setFilterOpen] = useState(false);
	return (
		<>
			<div className="filters">
				<span>Location : {locationFilter}</span>
				<span>Guests : {guestFilter.adult + guestFilter.children}</span>
				<button onClick={() => setFilterOpen(!isFilterOpen)}>Search</button>
				{isFilterOpen && (
					<FilterModal
						setFilterOpen={setFilterOpen}
						guestFilter={guestFilter}
						setGuestFilter={setGuestFilter}
						setLocationFilter={setLocationFilter}
						locationFilter={locationFilter}
					/>
				)}
			</div>
		</>
	);
}

export default Filters;
