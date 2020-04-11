import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import men from "../../assets/images/men.jpg";

const Header = ({ login, isAuth, avatar }) => {
  return (
    <header className={classes.header}>
      <img
        src="https://i.ya-webdesign.com/images/logo-creator-png-12.png"
        alt=""
      />

      {isAuth ? (
        <div className={classes.section_auth}>
          <div className={classes.login}>{login}</div>
          <div
            className={classes.user_avatar}
            style={{
              backgroundImage: `url(${avatar !== null ? avatar : men})`,
            }}
          ></div>
        </div>
      ) : (
        <div className={classes.section_auth}>
          <NavLink to={"/login"}>
            <div className={classes.login}>Login</div>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
