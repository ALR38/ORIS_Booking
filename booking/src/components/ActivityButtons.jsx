import React, { act } from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'

function ActivityButton({ title, color, isFirst }){
    return(
        <div className={`button_outside_tim ${isFirst ? 'iskl_tim' : ''}`}>
                <button className = {`button_left_tim ${color}`}>{title}</button>
                <div className="button_right_tim">
                    <button className="button_right1_tim"><img src="./img/button_right1_tim.png" alt=""/></button>
                    <button className="button_right2_tim"><img src="./img/button_right2_tim.png" alt=""/></button>
                </div>
            </div>
    );
}

export default ActivityButton;