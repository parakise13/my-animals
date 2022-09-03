import { Fragment, useEffect, useState, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

import classes from "./Header.module.scss";
import Navigation from "./Navigation";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const wrapperRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);

  const handleClickMobileMenu = useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  useEffect(() => {
    function handleClickOutside(evt: any) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(evt.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(evt.target)
      ) {
        setIsMenuOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef, wrapperRef, handleClickMobileMenu]);

  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#91a8d0" : "#353839",
          })}
          to="/"
        >
          <div className={classes.icon}>
            <FaPaw />
          </div>
        </NavLink>
        <ul className={`${classes.menus}`}>
          <Navigation />
        </ul>
        <ul className={`${classes["mobile-menus"]}`}>
          <div
            ref={buttonRef}
            className={classes["menu-icon"]}
            onClick={handleClickMobileMenu}
          >
            <RiMenu3Fill />
          </div>
          <div
            ref={wrapperRef}
            className={`${classes["menu-list"]} ${
              isMenuOpened ? `${classes.opened}` : ""
            }`}
          >
            <Navigation />
          </div>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
