import React from 'react'
import * as styles from "./Nav.module.css" 
import { Link } from 'gatsby'
import Logo from "./Logo"

const LinkContainer = () => {
    return (
        <ul className={styles.NavLinkContainer}>
            <li className={styles.NavItem}>
                <Link className={styles.NavLink} to="/">MAKE A BOOKING</Link>
            </li>
            <li className={styles.NavItem}>
                <Link className={styles.NavLink} to="#work-with-us">WORK WITH US</Link>
            </li>
            <li className={styles.NavItem}>
                <Link className={styles.NavLink} to="/">FAQ</Link>
            </li>
        </ul>
    )
}

const LogoContainer = () => {
    return (
        <div className={styles.LogoContainer}>
            <Logo className={styles.Logo} fill={"rgb(255 255 255 / 60%)"} fill2={"white"} fill3={"white"} />
            <span className={styles.LogoTitle}>PRIM-U</span>
        </div>
    )
}

const NavToggler = ({collapsedNavbar, setCollapsedNavbar, togglerIcon}) => {
    return (
        <button className={styles.NavToggler}
            type="button"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        onClick={()=>  setCollapsedNavbar(!collapsedNavbar)}
            >
            <span className={togglerIcon}></span>
        </button>
    )
}
const Navbar = () =>{
    const [collapsedNavbar, setCollapsedNavbar] = React.useState(false)
    const showDropdownNav = collapsedNavbar===true ? styles.DropdownNav: ''
    const togglerIcon = collapsedNavbar===false ? styles.NavbarOpenIcon:styles.NavbarCloseIcon
    return (
        <nav role="navigation" className={styles.Nav} >
            <div className={styles.NavContainer +' '+ showDropdownNav}>
                    <LogoContainer />
                    <NavToggler 
                    collapsedNavbar={collapsedNavbar} 
                    setCollapsedNavbar={setCollapsedNavbar}
                    togglerIcon={togglerIcon}
                    />
                    <LinkContainer/>
            </div>
        </nav>
    )
}
export default Navbar