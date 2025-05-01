import React from "react";
import '../styles/index.css';
import '../styles/reset1.css';
import '../styles/variables.css';

function FilterItem({ title, isChecked, onChange }) {
    return (
        <label className="filters__label">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className="filter-checkbox"
            />
            {title}
        </label>
    );
}

export default FilterItem;