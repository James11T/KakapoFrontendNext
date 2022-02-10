import className from "classnames";

import NavLink from "./NavLink/NavLink";
import { useUser } from "../../hooks/user";

import styles from "./Nav.module.css";

const AuthenticatedSection = ({ user }) => {
  return (
    <>
      <li>
        <NavLink icon="inbox" href="/inbox">
          Inbox
        </NavLink>
      </li>
      <li>
        <NavLink icon="person" href={`/profile/${user.kakapo_id}`}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink icon="signout" href="/signout">
          Sign Out
        </NavLink>
      </li>
    </>
  );
};

const UnauthenticatedSection = () => {
  return (
    <>
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
    </>
  );
};

const Nav = ({ open = false }) => {
  const { user } = useUser();

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
          <NavLink icon="science" href="/debug">
            Debug
          </NavLink>
        </li>
        {user.isAuthenticated ? (
          <AuthenticatedSection user={user} />
        ) : (
          <UnauthenticatedSection />
        )}
      </ul>
    </nav>
  );
};

export default Nav;
