import React, { useState, useEffect } from 'react';
import '../styles/FilterModal.scss';

function FilterModal({
	setGuestFilter,
	setLocationFilter,
	guestFilter,
	locationFilter,
	setFilterOpen,
}) {
	function handleSubmit(e) {
		e.preventDefault();
		setFilterOpen(false);
	}

	function handleClickOutside(e) {
		const isOutside = !e.target.closest('.inner-modal');
		if (isOutside) {
			setFilterOpen(false);
		}
	}

	// we want to change the state for guestFilter attribute
	function handleGuest(type, operation) {
		if (operation === '-') {
			// guestFilter.adult / guestFilter.children
			if (guestFilter[type] > 0) {
				setGuestFilter({ ...guestFilter, [type]: guestFilter[type] - 1 });
			} else {
				return;
			}
		} else {
			// we need to spread the rest of the object, because we don't want to loose the other attributes
			setGuestFilter({
				...guestFilter,
				[type]: guestFilter[type] + 1,
			});
		}
	}

	function handleAdultGuest(operation) {
		if (operation === '-') {
			if (guestFilter.adult > 0) {
				setGuestFilter({ adult: guestFilter.adult - 1, children: guestFilter.children });
			} else {
				return;
			}
		} else if (operation === '+') {
			setGuestFilter({ adult: guestFilter.adult + 1, children: guestFilter.children });
		}
	}

	function handleChildrenGuest(operation) {
		if (operation === '-') {
			if (guestFilter.children > 0) {
				setGuestFilter({ adult: guestFilter.adult, children: guestFilter.children - 1 });
			} else {
				return;
			}
		} else {
			setGuestFilter({ adult: guestFilter.adult, children: guestFilter.children + 1 });
		}
	}

	return (
		<div onClick={handleClickOutside} className="outer-modal">
			<div className="inner-modal">
				<form onSubmit={handleSubmit}>
					<div className="location">
						<div className="location-input">
							<span>Location</span>
							<span>{locationFilter ? locationFilter : 'All'}</span>
						</div>
						<div className="location-picker">
							<button type="button" onClick={() => setLocationFilter('')}>
								All cities
							</button>
							<button type="button" onClick={() => setLocationFilter('Helsinki')}>
								Helsinki, Finland
							</button>
							<button type="button" onClick={() => setLocationFilter('Turku')}>
								Turku, Finland
							</button>
							<button type="button" onClick={() => setLocationFilter('Vaasa')}>
								Vaasa, Finland
							</button>
							<button type="button" onClick={() => setLocationFilter('Oulu')}>
								Oulu, Finland
							</button>
						</div>
					</div>
					<div className="guests">
						<div className="guests-input">
							<div>Guests</div>
							{guestFilter.adult + guestFilter.children}
						</div>
						<div className="guests-buttons">
							<div>
								<h3>Adults</h3>
								<p>Age 13 or above</p>
								<div className="buttons">
									<button type="button" onClick={() => handleAdultGuest('-')}>
										-
									</button>
									<span>{guestFilter.adult}</span>
									<button type="button" onClick={() => handleAdultGuest('+')}>
										+
									</button>
								</div>
							</div>
							<div>
								<h3>Children</h3>
								<p>Age 2 - 12</p>
								<div className="buttons">
									<button type="button" onClick={() => handleChildrenGuest('-')}>
										-
									</button>
									<span>{guestFilter.children}</span>
									<button type="button" onClick={() => handleChildrenGuest('+')}>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
					<button>Search</button>
				</form>
			</div>
		</div>
	);
}

export default FilterModal;
