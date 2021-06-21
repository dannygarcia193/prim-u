import React from 'react'
import * as styles from "./Nav.module.css" 
import { Link } from 'gatsby'
import Logo from "./Logo"
import Collapser from "./Collapser"
import HamburgerIcon from './HamburgerMenuIcon'
const LinkContainer = () => {
    return (
        <ul className={styles.NavLinkContainer}>
            <li className={styles.NavItem}>
                <Link className={styles.NavLink} to="#MAKE-A-BOOKING">MAKE A BOOKING</Link>
            </li>
            <li className={styles.NavItem}>
                <Link className={styles.NavLink} to="#WORK-WITH-US">WORK WITH US</Link>
            </li>
            <li className={styles.NavItem}>
                <Link className={styles.NavLink} to="#FAQ">FAQ</Link>
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

const NavToggler = ({collapsedNavbar, setCollapsedNavbar}) => {
    const currentIcon = collapsedNavbar===false ? <HamburgerIcon/>:<Collapser/>
    return (
        <button className={styles.NavToggler}
            type="button"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        onClick={()=>  setCollapsedNavbar(!collapsedNavbar)}
            >
            {currentIcon}
        </button>
    )
}
const Navbar = () =>{
    const [collapsedNavbar, setCollapsedNavbar] = React.useState(false)
    const [lightNav, setLightNav] = React.useState(false);
    const showDropdownNav = collapsedNavbar===true ? styles.DropdownNav: ''
    const dynamicStyles= {
        backgroundColor: lightNav ? "white": "transparent",
        height: lightNav ? "5rem": "5.625rem",  
        transition: "all 0.2s"
    }
    const turnTextDark =  lightNav===true ||  collapsedNavbar===true ? styles.textDark: ''

    function handleScroll() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop      
        const height =document.documentElement.scrollHeight - document.documentElement.clientHeight    
        const scrolled = winScroll / height
        if (scrolled > .01) setLightNav(true);
        else setLightNav(false);
      }
    
      React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      });

    return (
        <nav role="navigation" className={styles.Nav} style={dynamicStyles} >
            <div className={styles.NavContainer +' '+ showDropdownNav + ' ' + turnTextDark }>
                    <LogoContainer />
                    <NavToggler 
                        collapsedNavbar={collapsedNavbar} 
                        setCollapsedNavbar={setCollapsedNavbar}
                    />
                    <LinkContainer/>
            </div>
        </nav>
    )
}
export default Navbar