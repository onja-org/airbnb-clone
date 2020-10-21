import React from "react";
import "../styles/Stay.scss";

function Stay({stay}) {
    console.log(stay); 
    return (
        <article>
            <img src={stay.photo} alt={stay.title} />
            <span className="meta-data">
                <span>{stay.superHost && <span className="super-host">Super Host</span>}</span>
                <span className="stay-type">{stay.type} {stay.beds && ` • ${stay.beds} beds`}</span>
                <span className="rating">⭐️ {stay.rating}</span>
            </span>
                
            <span className="title">{stay.title}</span> 
 
        </article>
    );
}

export default Stay;  