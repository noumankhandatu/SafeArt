import React, { useState, useEffect } from "react";
import "./MainSection.css";
const MainSection = () => {
  const handleFetch = async () => {
    const url = await fetch(
      "http://safeart.alshumaal.com/api/homepage/homepage.php"
    );
    const resp = await url.json();

    setFetch(resp.mainAuctionArt);
  };
  const [fetchedData, setFetch] = useState([]);
  useEffect(() => {
    handleFetch();
  });
  return (
    <div className="FirstLayout__Grid">
      <div className="LayoutOne__Image">
        <img className="Container__art_image" src={fetchedData.art_img} />
      </div>
      <div className="MainSectionLayout">
        <div className="alsirangBtn">
          <img className="alsirangBtn__image" src={fetchedData.art_img} />
          <p className="text__container">@{fetchedData.creator_name}</p>
        </div>
        <h1 className="Container_hunza_Text">{fetchedData.art_name}</h1>
        <div className="belowHunza__Grid">
          <div className="MainSection__ReservePrice">
            <h1 className="Container__textonet">Reserve Price</h1>
            <h1 className="Container_Eth">{fetchedData.art_price} .000 ETH</h1>
          </div>

          <div className="MainSection__OwnedBy">
            <h1 className="Container__textonet">Owned By</h1>
            <div className="alsirangBtn">
              <img
                className="alsirangBtn__image"
                src={fetchedData.creator_img}
              />
              <p className="text__container">@{fetchedData.creator_name}</p>
            </div>
          </div>
        </div>
        <button className="container__Network">
          <p className="viewNet__Btn">View artwork</p>
        </button>
      </div>
    </div>
  );
};

export default MainSection;
