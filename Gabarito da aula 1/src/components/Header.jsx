import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logoSpotify} alt="Logo do Spotify" />
      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </header>
  );
};

export default Header;
