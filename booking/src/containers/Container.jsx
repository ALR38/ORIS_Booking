import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'
import PlacesContainer from "./PlacesContainer";
import FiltersContainer from "./FiltersContainer";


function Container(){
    return(
        <div className="container">
            <FiltersContainer/>
            <PlacesContainer/>
        </div>
    );
}

export default Container;