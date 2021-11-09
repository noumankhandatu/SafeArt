import React from "react";
import logo from "../../image/BlackMark.cf17c487.png";
import "./header.css";
const Header = (props) => {
  return (
    <>
      <div className="header_flex">
        <div className="logo_displace">
          <img src={logo} className="logo" />
          <h1 className="Header__SafeArtText">Safe Art</h1>
        </div>

        <div className="combineBoxes">
          <button className="headerTBtns" onClick={props.onSelect}>
            <b> Art Work</b>
          </button>
          <button onClick={props.onSelectone} className="headerTBtnsMid">
            <b> Home</b>
          </button>
          <button onClick={props.onSelecttwo} className="headerTBtns">
            <b>Creator</b>
          </button>
        </div>

        <button className="header__Button">
          <h3>Connect To Wallet</h3>
        </button>
      </div>
    </>
  );
};

export default Header;
