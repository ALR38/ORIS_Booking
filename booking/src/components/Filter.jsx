import React from "react";
import FilterItem from "./FilterItem";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';

function Filter({ name, items, selectedFilters, onChange }) {
    return (
        <div className="filters">
            <div className="filters__top">
                <h3 className="filters__title">{name}</h3>
            </div>
            <div className="filters__bottom">
                {items.map((item, index) => (
                    <FilterItem
                        key={index}
                        title={item.title}
                        isChecked={selectedFilters.includes(item.title)}
                        onChange={() => onChange(name.toLowerCase(), item.title)}
                    />
                ))}
                {items.length >= 7 && (
                    <a href="#" className="filters__link">Show More {name}s</a>
                )}
            </div>
        </div>
    );
}

export default Filter;