import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";
import "../styles/reset1.css";
import "../styles/variables.css";

function Place({ id, image, type, reviews, title, duration, cost }) {
  const navigate = useNavigate();

  return (
      <li
          className="places__item"
          onClick={() => navigate(`/tour/${id}`)} // Переход на /tour/:id
          style={{ cursor: "pointer" }} // Визуальная индикация кликабельности
      >
        <div className="places__item--left">
          <img className="places__img" src={image} alt={title} />
          <div className="places__info">
            <div className="places__info--top">
              <a className="places__type">{type}</a>
              <img src="icons/line.svg" alt="" />
              <img src="icons/stars.svg" alt="" />
              <span className="places__reviews">({reviews} reviews)</span>
            </div>
            <h2 className="places__title">{title}</h2>
            <div className="places__bottom">
              <div className="places__info-item">
                <img src="icons/clock.svg" alt="" />
                <span className="places__info-item--text">{duration}</span>
              </div>
              <img src="icons/line.svg" alt="" />
              <div className="places__info-item">
                <img src="icons/transport.svg" alt="" />
                <span className="places__info-item--text">Transport</span>
              </div>
              <img src="icons/line.svg" alt="" />
              <div className="places__info-item">
                <img src="icons/family.svg" alt="" />
                <span className="places__info-item--text">Family Plan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="places__item--right">
          <h3 className="places__cost">{cost}</h3>
          <p className="places__reviews">per person</p>
        </div>
      </li>
  );
}

export default Place;