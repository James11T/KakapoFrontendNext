import NavLink from "./NavLink/NavLink";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
