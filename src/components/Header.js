import React from "react";
import logo from "../images/Troll_Face.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <a className="col header__item--logo" href={"./index.html"}>
            <img src={logo} alt="trollFace" />
          </a>
          <h1 className="col header__item--title">Meme Generator</h1>
          <h3 className="col header__item--right">React Course - Project 3</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
