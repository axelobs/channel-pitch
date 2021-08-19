import React, { useMemo, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from '../Logo';
import styles from './header.module.css'

//React-Bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const aboutPages = ['/about-us', '/pitch', '/mychannelprogram', '/directory', '/events', '/register']

export default function Header() {
  const [show, setShow] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)
  let location = useLocation();

  function getPage(pathname) {
    if(pathname === '/'){
      setShow(false)
      setActiveMenu(false)
      return
    }
    if (aboutPages.includes(pathname)) {
      setShow(true)
      setActiveMenu(true)
      return
    }
    setShow(false)
    setActiveMenu(false)
    return
  }

  function hideDropdown(){
    if(aboutPages.includes(location.pathname)){
      return
    }
    return setShow(false)
  }

  useMemo(() => getPage(location.pathname), [location.pathname])

  return (
    <header className={styles.navContainer}>
      <Navbar collapseOnSelect expand="lg" className="p-0">
        <Container fluid className={`p-0 ${styles.navbarContent}`}>
          <Navbar.Brand>
            <Logo style={{ color: '#3d3d3d', fontWeight: '700', fontSize: '20px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.menuTogglerContainer} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`text-center ${styles.navItems}`} activeKey={location.pathname}>
              <Nav.Item>
                <Nav.Link eventKey="/" as='div'>
                  <Link to="/">HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="ABOUT"
                id="collapsible-nav-dropdown"
                className={styles.dropdownToggle}
                active={activeMenu}
                renderMenuOnMount
                show={window.innerWidth >= 992 ? show : true}
                onMouseEnter={() => setShow(true)} 
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item eventKey="/about-us" as="div" className="text-center">
                  <Link to="/about-us">About Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/pitch" as="div" className="text-center" disabled>
                  <Link to="/pitch">Pitch</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/mcp" as="div" className="text-center" disabled>
                  <Link to="/mychannelprogram">MyChannelProgram</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/directory" as="div" className="text-center" disabled>
                  <Link to="/directory">Directory</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/events" as="div" className="text-center">
                  <Link to="/events">Events</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/register" as="div" className="text-center">
                  <Link to="/register">Register</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="/contact" as='div'>
                  <Link to="/contact">CONTACT</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {/* <Nav>
              <form className={`d-flex ${styles.searchContainer}`}>
                <input className={`${styles.searchInput}`} type="text" placeholder="Search" />
                <button className={`${styles.searchBtn}`} type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M20.5 6C12.515556 6 6 12.515562 6 20.5C6 28.484438 12.515556 35 20.5 35C23.773158 35 26.788919 33.893018 29.220703 32.050781L38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938L32.050781 29.220703C33.893017 26.788918 35 23.773156 35 20.5C35 12.515562 28.484444 6 20.5 6 z M 20.5 10C26.322685 10 31 14.677319 31 20.5C31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531C25.824103 29.912403 23.29771 31 20.5 31C14.677315 31 10 26.322681 10 20.5C10 14.677319 14.677315 10 20.5 10 z"/>
                  </svg>
                </button>
              </form>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}