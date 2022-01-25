import className from "classnames";

import NavLink from "./NavLink/NavLink";

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
        <li>
          <NavLink icon="science" href="/debug">
            Debug
          </NavLink>
        </li>
        <li>
          <NavLink icon="personAdd" href="/signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink icon="signin" href="/signin">
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
