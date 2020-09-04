import React from "react";
import SearchBar from "../SearchBar.jsx";
import {Link} from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="optionContainer navbar navbar-dark bg-dark">

      <div className="containerLogo">
        <img className="img navbar-brand" src="https://i.pinimg.com/originals/bf/34/ec/bf34ec49cb756dec79940fa5864932f1.png" />
      </div>

      <Link className="option" to="/products">
        Catálogo
      </Link>
      <Link className="option" to="/">
        Home
      </Link>
      <Link className="option" to="/formcrud">
        Productos
      </Link>

      <SearchBar />
    </nav>
  );
}