import React, { useState, useEffect } from "react";
import "./CardTwo.css";
import CardMappedTwo from "./CardMappedTwo";
const CardTwo = () => {
  const [SecondApi, setSecondApi] = useState([]);

  const handleFetch = async () => {
    const url = await fetch(
      "http://safeart.alshumaal.com/api/homepage/featured_art.php"
    );
    const resp = await url.json();
    console.log(resp.featuredCreators);
    setSecondApi(resp.featuredCreators);
    console.log(SecondApi);
  };

  useEffect(() => {
    handleFetch();
  }, [setSecondApi]);
  return (
    <>
      <div className="auctationMappedTwo">
        {SecondApi.map((newItems) => {
          return (
            <>
              <CardMappedTwo
                firstName={newItems.username}
                username={newItems.firstName}
                bio={newItems.bio}
                image={newItems.art_img}
                creator={newItems.creator_img}
                prize={newItems.art_price}
                creatorImg={newItems.creator_cover}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardTwo;
