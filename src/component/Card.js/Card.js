import React, { useState, useEffect } from "react";
import "./Card.css";
import CardMapped from "./CardMapped";
const Card = () => {
  const [SecondApi, setSecondApi] = useState([]);

  const handleFetch = async () => {
    const url = await fetch(
      "http://safeart.alshumaal.com/api/homepage/featured_art.php"
    );
    const resp = await url.json();
    setSecondApi(resp.liveAuctions);
  };

  useEffect(() => {
    handleFetch();
  }, [setSecondApi]);
  return (
    <>
      <div className="auctationMapped">
        {SecondApi.map((newItems) => {
          return (
            <>
              <CardMapped
                place={newItems.art_name}
                image={newItems.art_img}
                creator={newItems.creator_name}
                prize={newItems.art_price}
                creatorImg={newItems.owner_img}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
