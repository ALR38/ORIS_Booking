import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { useLocation, useNavigate } from "react-router-dom";
import Availability from "../components/Availability";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';
import { themes, durations, destinations } from "../data/toursData";

function FiltersContainer() {
    const [selectedFilters, setSelectedFilters] = useState({
        theme: [],
        duration: [],
        destination: [],
    });

    const [sortBy, setSortBy] = useState("popularity");

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const themeFilters = params.getAll("theme");
        const durationFilters = params.getAll("duration");
        const destinationFilters = params.getAll("destination");
        const sortFilter = params.get("sort");

        setSelectedFilters({
            theme: themeFilters,
            duration: durationFilters,
            destination: destinationFilters,
        });

        if (sortFilter) setSortBy(sortFilter);
    }, [location.search]);

    const updateURL = (filters, sortValue) => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, values]) => {
            values.forEach(value => params.append(key, value));
        });

        if (sortValue) params.set("sort", sortValue);

        navigate(`?${params.toString()}`);
    };

    const handleFilterChange = (name, value) => {
        const updatedFilters = { ...selectedFilters };

        if (updatedFilters[name].includes(value)) {
            updatedFilters[name] = updatedFilters[name].filter(item => item !== value);
        } else {
            updatedFilters[name].push(value);
        }

        setSelectedFilters(updatedFilters);
        updateURL(updatedFilters, sortBy);
    };

    const handleSortChange = (event) => {
        const newSort = event.target.value;
        setSortBy(newSort);
        updateURL(selectedFilters, newSort);
    };

    return (
        <div className="filters-container">
            <Availability />
            <Filter
                name="Theme"
                items={themes}
                selectedFilters={selectedFilters.theme}
                onChange={handleFilterChange}
            />
            <Filter
                name="Duration"
                items={durations}
                selectedFilters={selectedFilters.duration}
                onChange={handleFilterChange}
            />
            <Filter
                name="Destination"
                items={destinations}
                selectedFilters={selectedFilters.destination}
                onChange={handleFilterChange}
            />
        </div>
    );
}

export default FiltersContainer;
