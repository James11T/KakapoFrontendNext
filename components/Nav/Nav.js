import className from "classnames";
import { useUser } from "../../hooks/user";

import NavLink from "./NavLink/NavLink";
import ScienceRounded from "@mui/icons-material/ScienceRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import PersonAddRounded from "@mui/icons-material/PersonAddRounded";
import LoginRounded from "@mui/icons-material/LoginRounded";
import InboxRounded from "@mui/icons-material/InboxRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";

import styles from "./Nav.module.css";

const AuthenticatedSection = ({ user }) => {
  return (
    <>
      <li>
        <NavLink icon={InboxRounded} href="/inbox">
          Inbox
        </NavLink>
      </li>
      <li>
        <NavLink icon={PersonRounded} href={`/profile/${user.kakapo_id}`}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink icon={LogoutRounded} href="/signout">
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
        <NavLink icon={PersonAddRounded} href="/signup">
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink icon={LoginRounded} href="/signin">
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
          <NavLink icon={HomeRounded} href="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink icon={SearchRounded} href="/explore">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink icon={ScienceRounded} href="/debug">
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
