import React from "react";
import "./Card.css";
const CardMapped = (props) => {
  return (
    <>
      <div className="Whole__Card">
        <img src={props.image} className="card__One" />
        <h1 className="card__place">{props.place}</h1>
        <div className="twinCity">
          <img src={props.creatorImg} alt="" className="twinCity__Img" />
          <p className="twinCity__Text">@{props.creator}</p>
        </div>
        <div className="auctionbackground__css">
          <div className="Card__miniGrid">
            <h1 className="CardOneMInione">Reserve Price</h1>
            <h1 className="CardOneMInitwo">{props.prize} .00 ETH</h1>
          </div>
          <div class="auctionEnded">
            <h1 className="auctionEnded__Text">Auction has ended</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMapped;
