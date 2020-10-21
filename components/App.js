import React, {useState, useEffect} from "react";

import Header from "./Header";
import StaysList from "./StaysList";
import staysData from "../stays.json";
import "../styles/base.scss";

function App() {

    const [stays, setStays] = useState([]);
    const [guestFilter, setGuestFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    useEffect(() => {
        const staysWithId = staysData.forEach((stay, id) => stay.id = Date.now() + id);
        setStays(staysData);
    }, []);

    function filterByGuest(stay) {
        if (!guestFilter) {
            return stay;
        }
        return stay.maxGuests > Number(guestFilter);
    }

    function filterByLocation(stay) {
        if (!locationFilter) {
            return stay;
        }
        return stay.city === locationFilter;
    }

    return (
        <>
            <Header setGuestFilter={setGuestFilter} setLocationFilter={setLocationFilter} locationFilter={locationFilter} guestFilter={guestFilter}></Header>
            <StaysList stays={stays.filter(filterByGuest).filter(filterByLocation)}></StaysList>
        </>
    );
}

export default App;