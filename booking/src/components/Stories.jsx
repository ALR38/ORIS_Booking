import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'

function Stories({ image, title}){
    return(
        <div class="stories-image-container">
                    <div class="stories-image">
                        <img src={image} alt="image"/>
                    </div>

                    <div class="stories-content">
                        <div class="author-card">
                            <img class="content-author-icons" src="images/Ellipse 2.png" alt="icon"/>
                            <p class="author-name">Jackie Moncada</p>
                        </div>
                        <div class="stories-content-text-conteiner">
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
    );
}

export default Stories;