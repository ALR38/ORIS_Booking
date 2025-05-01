import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';

function Heading() {
    const location = useLocation();
    const navigate = useNavigate();

    const [sortBy, setSortBy] = useState("popularity");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sort = params.get("sort");
        if (sort) setSortBy(sort);
    }, [location.search]);

    const handleSortChange = (event) => {
        const newSort = event.target.value;
        setSortBy(newSort);

        const params = new URLSearchParams(location.search);
        params.set("sort", newSort);
        navigate(`?${params.toString()}`);
    };

    return (
        <header className="header-main">
            <div className="header-main__left">
                <h2 className="header-main__title">Things to do in London</h2>
                <p className="header-main__subtitle">49 activities found</p>
            </div>
            <div className="header-main__right">
                <label className="header-main__label" htmlFor="sort">Sort by:</label>
                <select
                    className="header-main__select"
                    name="sort"
                    value={sortBy}
                    onChange={handleSortChange}
                >
                    <option value="popularity">Popularity</option>
                    <option value="cost">Cost</option>
                </select>
            </div>
        </header>
    );
}

export default Heading;