import React from "react";
import Place from "../components/Place";

function Places({ places }) {
    return (
        <ul className="places">
            {places.map((place, index) => (
                <Place
                    key={index}
                    id={place.id}
                    image={place.image}
                    type={place.type}
                    title={place.title}
                    duration={place.duration}
                    reviews={place.reviews}
                    cost={place.cost}
                />
            ))}
        </ul>
    );
}

export default Places;