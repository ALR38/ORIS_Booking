import React, { useState, useEffect } from "react";
import Places from "./Places";
import { useLocation, useNavigate } from "react-router-dom";

const imageMap = {
    1: "../images/savoey.png",
    2: "../images/railay.png",
    3: "../images/elephJung.png",
    4: "../images/watArun.png",
    5: "../images/phangNga.jpg",
    6: "../images/khaoSok.jpg",
    7: "../images/erawan.jpg",
    8: "../images/chatuchak.jpg",
    9: "../images/nusaDua.jpg",
    10: "../images/locavore.jpg",
    11: "../images/uluwatu.jpg",
    12: "../images/batur.jpg",
    13: "../images/sanur.jpg",
    14: "../images/ubud.jpg",
    15: "../images/sekumpul.jpg",
    16: "../images/jimbaran.jpg",
    17: "../images/bemaraha.jpg",
    18: "../images/nosyBe.jpg",
    19: "../images/Andringitra.jpg",
    20: "../images/avenue.jpg",
    21: "../images/sainteMarie.jpg",
    22: "../images/isalo.jpg",
    23: "../images/ifaty.jpg",
    24: "../images/Ranomafana.jpg"
};

function PlacesContainer() {
    const location = useLocation();
    const navigate = useNavigate();
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);

            const params = new URLSearchParams(location.search);
            const apiParams = new URLSearchParams();

            params.getAll("theme").forEach(t => apiParams.append("theme", t));
            params.getAll("duration").forEach(d => apiParams.append("duration", d));
            params.getAll("destination").forEach(d => apiParams.append("destination", d));
            const sort = params.get("sort");
            if (sort) apiParams.set("sort", sort);

            try {
                const response = await fetch(`http://www.azmitov.somee.com/api/api/tours/filter?${apiParams.toString()}`);
                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("Invalid response from server");
                }

                const updatedData = data.map(tour => ({
                    ...tour,
                    image: imageMap[tour.id] || tour.image
                }));

                setFilteredPlaces(updatedData);
            } catch (error) {
                console.error("Error fetching tours:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, [location.search]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="places__container">
            <Places places={filteredPlaces} />
            <button className="places__button">Load More</button>
        </div>
    );
}

export default PlacesContainer;
