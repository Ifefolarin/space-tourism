import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";

function PageNav() {
  return (
    <nav>
      <div className={styles.nav}>
        <Logo />
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
      </div>
    </nav>
  );
}

export default PageNav;
