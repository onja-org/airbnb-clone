import React, {useState} from "react";
import FilterModal from './FilterModal';
import "../styles/Filters.scss";

function Filters({setGuestFilter, setLocationFilter, guestFilter, locationFilter}) {
    const [isFilterOpen, setFilterOpen] = useState(false);
    return (
            <div className="filters">
                <select onChange={(e) => setLocationFilter(e.target.value)}>
                    <option value="">---Select a city---</option>
                    <option value="Helsinki">Helsinki</option>
                    <option value="Turku">Turku</option>
                    <option value="Oulu">Oulu</option>
                    <option value="Vaasa">Vaasa</option>
                </select>
                <input type="number" onChange={(e) => setGuestFilter(e.target.value)} placeholder="number of guests"/>
                {/* <span>Location : {locationFilter}</span>
                <span>Guests : {guestFilter}</span>
                <button>Open</button> */}
            </div>
    )
}

export default Filters;