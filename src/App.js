import React, { useEffect, useState } from "react";
import Header from "./component/header/header";
import Card from "./component/Card.js/Card";
import CardTwo from "./component/CardTwo.js/CardTwo";
import MainSection from "./component/MainSection/MainSection";
import BlackBtn from "./component/BlackBtn/BlackBtn";
import "./App.css";

function App() {
  const [CloseTwo, setCloseTwo] = useState(true);
  const [CloseThree, setCloseThree] = useState(true);

  const handleFetchOne = () => {
    setCloseThree(true);
    setCloseTwo(true);
    alert("Gates Open");
  };
  const handleFetchTwo = () => {
    setCloseTwo(false);
    setCloseThree(true);
    alert("Only Gate Two Opened");
  };
  const handleFetchThree = () => {
    setCloseThree(false);
    setCloseTwo(true);
    alert("Only Gate Three Opened");
  };

  return (
    <div className="container">
      <Header
        onSelect={handleFetchOne}
        onSelectone={handleFetchTwo}
        onSelecttwo={handleFetchThree}
      />

      {CloseTwo && CloseThree ? (
        <div>
          <MainSection />
          <div className="Auction__Starts">
            <p className="Auction__TextOne">
              <div className="lightonoff"></div>
              <b>Live Auctions</b>
            </p>
            <p className="Auction__TextTwo">
              <b>View all live auctions</b>
            </p>
          </div>
          <hr />
          <Card />
          <div className="CardMapped__BlackBtnFlexing">
            <BlackBtn text="View All Live Auction" />
          </div>
          <div className="Auction__Starts">
            <p className="Auction__TextOne">
              <div className="lightonoff"></div>
              <b>Featured artworks</b>
            </p>
            <p className="Auction__TextTwo">
              <b>View all artworks</b>
            </p>
          </div>
          <hr />
          <Card />
          <div className="spanCenter__button">
            <BlackBtn text="View All Network" />
          </div>
          <div className="Auction__Starts">
            <p className="Auction__TextOne">
              <div className="lightonoff"></div>
              <b>Live Featured creators</b>
            </p>
            <p className="Auction__TextTwo">
              <b>View all creators</b>
            </p>
          </div>
          <hr />
          <CardTwo />
        </div>
      ) : null}
      {CloseTwo ? null : (
        <div>
          <Card />
        </div>
      )}
      {CloseThree ? null : (
        <div>
          <CardTwo />
        </div>
      )}
    </div>
  );
}

export default App;
