import React from "react";
import * as styles from "./Nav.module.css";
import { Link } from "gatsby";
import Logo from "./Logo";
import Collapser from "./Collapser";
import HamburgerIcon from "./HamburgerMenuIcon";
const LinkContainer = () => {
  return (
    <ul className={styles.NavLinkContainer}>
      <li className={styles.NavItem}>
        <a
          className={styles.NavLink}
          href="https://www.prim-u.app/en/list"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAKE A BOOKING
        </a>
      </li>
      <li className={styles.NavItem}>
        <a
          className={styles.NavLink}
          href="https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer"
          target="_blank"
          rel="noopener noreferrer"
        >
          WORK WITH US
        </a>
      </li>
      <li className={styles.NavItem}>
        <Link className={styles.NavLink} to="#FAQ">
          FAQ
        </Link>
      </li>
    </ul>
  );
};

const LogoContainer = ({ lightNav }) => {
  return (
    <Link className={styles.LogoContainer} to="/">
      <Logo
        className={styles.Logo}
        fill={!lightNav ? "rgb(255 255 255 / 60%)" : "rgba(166, 166, 166, 1)"}
        fill2={"white"}
        fill3={"white"}
      />
      <span className={styles.LogoTitle}>PRIM-U</span>
    </Link>
  );
};

const NavToggler = ({ collapsedNavbar, setCollapsedNavbar }) => {
  const currentIcon =
    collapsedNavbar === false ? <HamburgerIcon /> : <Collapser />;
  return (
    <button
      className={styles.NavToggler}
      type="button"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setCollapsedNavbar(!collapsedNavbar)}
    >
      {currentIcon}
    </button>
  );
};
const Navbar = ({ collapsedNavbar, lightNav, setCollapsedNavbar }) => {
  const showDropdownNav = collapsedNavbar === true ? styles.DropdownNav : "";
  const roundedNav = lightNav ? styles.RoundedNav : "";
  const dynamicStyles = {
    backgroundColor: lightNav ? "white" : "transparent",
    height: lightNav ? "5rem" : "5.625rem",
    transition: "all 0.2s",
  };
  const navStyle = { borderRadius: "10px", width: "95%" };
  const turnTextDark =
    lightNav === true || collapsedNavbar === true ? styles.textDark : "";

  return (
    <nav
      role="navigation"
      className={styles.Nav + " " + roundedNav}
      style={dynamicStyles}
    >
      <div
        className={
          styles.NavContainer + " " + showDropdownNav + " " + turnTextDark
        }
      >
        <LogoContainer lightNav={lightNav} />
        <NavToggler
          collapsedNavbar={collapsedNavbar}
          setCollapsedNavbar={setCollapsedNavbar}
        />
        <LinkContainer />
      </div>
    </nav>
  );
};
export default Navbar;
