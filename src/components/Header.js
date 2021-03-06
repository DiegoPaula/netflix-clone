import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header__logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header__user">
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="usuário"
          />
        </a>
      </div>
    </header>
  );
};
