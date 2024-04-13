import { NavLink } from "react-router-dom";
import { useState } from "react";

import styles from "./HamburgerNav.module.css";
import Logo from "./Logo";

function HamburgerNav() {
  const [showMenu, setSHowMenu] = useState(false);

  function openMenu() {
    setSHowMenu((show) => !show);
  }

  return (
    <nav>
      <div className={styles.nav}>
        <Logo />
        {showMenu && (
          <ul>
            <li>
              <NavLink to="/">
                <strong>00</strong> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination">
                <strong>01</strong> Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew">
                <strong>02</strong> Crew
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology">
                <strong>03</strong> Technology
              </NavLink>
            </li>
          </ul>
        )}
        <div onClick={openMenu} className={styles.menuButton}>
          {showMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HamburgerNav;
