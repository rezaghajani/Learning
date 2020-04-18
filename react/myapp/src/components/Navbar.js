import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand=logo"> Gamers Times</a>
        <ul className="right">
          <li>
            <a href="/Home"> Home </a>
          </li>
          <li>
            <a href="/About"> About </a>
          </li>
          <li>
            <a href="/Contact"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
