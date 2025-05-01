import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'

function ActivityCard({ image, title, duration, reviews, price }) {
    return (
        <div className="cart_1_tim">
            <img src={image} alt=""/>
            <div className="cart_title_tim">
                <h3>{title}</h3>
            </div>
            <div className="cart_description_tim">
                <div className="description_time_tim">
                    <img src="./img/carts_time_icon_tim.png" alt="" className="description_time_img_tim"/> <a>Duration {duration}</a>
                </div>
                <div className="description_transport_tim">
                    <img src="./img/carts_car_icon_tim.png" alt="" className="description_car_img_tim"/> <a>Transport Facility</a>
                </div>
                <div className="description_family_tim">
                    <img src="./img/carts_people_icon_tim.png" alt="" className="description_family_img_tim"/> <a>Family Plan</a>
                </div>
            </div>
            <hr className="cart_line_tim"></hr>
            <div className="cart_info_tim">
                <div className="stars_tim">
                    <img src="./img/carts_stars_icon_tim.png" alt=""/>
                    <a>{reviews} reviews</a>
                </div>
                <div className="money_tim">
                    <a className="dol_tim">{price}</a>
                    <a className="per_tim">per person</a>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard