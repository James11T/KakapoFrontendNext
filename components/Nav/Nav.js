import { useState } from "react";
import className from "classnames";
import Link from "next/link";

import NavLink from "./NavLink/NavLink";
import Icon from "../Icon/Icon";

import styles from "./Nav.module.css";

const Nav = ({ open = false }) => {
  return (
    <nav className={className(styles.nav, { [styles.navOpen]: open })}>
      <ul>
        <li>
          <NavLink icon="home" href="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink icon="search" href="/explore">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink icon="inbox" href="/inbox">
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink icon="person" href="/profile">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
