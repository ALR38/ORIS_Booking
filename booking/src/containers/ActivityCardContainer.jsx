import React, { act } from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import ActivityCard from "../components/ActivityCard";

function ActivityCardContainer({ activities }){
    return(
        <>
        <div className="carts_tim">
            {
                activities.map((activity, index) => (
                    <ActivityCard
                    key={index}
                    image={activity.image}
                    title={activity.title}
                    duration={activity.duration}
                    reviews={activity.reviews}
                    price={activity.price}
                    />
                ))
            }
        </div>
        </>
    );
}

export default ActivityCardContainer;