import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'

function Availability(){
    return(
        <form class="availability">
              <h3 class="availability__title">Availability</h3>
              <div class="availability__info">
                <div class="availability__item">
                  <p class="availability__text">From</p>
                  <input
                    type="text"
                    class="availability__input"
                    placeholder="10/12/2021"
                  />
                </div>
                <div class="availability__item">
                  <p class="availability__text">To</p>
                  <input
                    type="text"
                    class="availability__input"
                    placeholder="10/12/2021"
                  />
                </div>
  
                <button class="availability__button">Check Availability</button>
              </div>
            </form>
    );
}

export default Availability;