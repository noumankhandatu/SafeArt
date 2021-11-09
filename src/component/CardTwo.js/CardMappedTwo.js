import React from "react";
import "./CardTwo.css";
const CardMappedTwo = (props) => {
  return (
    <>
      <div
        className="WholeDivLastCard"
        style={{
          backgroundImage: `url(${props.creatorImg})`,
        }}
      >
        <div className="positionitLastCard">
          <img className="avatarLast_card" src={props.creator} />
          <div className="CardMapped_position">
            <h4 className="textOne__LAstCard">
              <b>{props.firstName}</b>
            </h4>
            <h1 className="WorkOneText__LastCard">
              <b>@{props.username}</b>
            </h1>
            <p className="LastCardTextThree">{props.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMappedTwo;
