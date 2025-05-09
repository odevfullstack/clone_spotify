import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import "../index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="header__logo" src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </header>
  );
};

export default Header;
