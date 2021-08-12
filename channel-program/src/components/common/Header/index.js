import React from 'react';
import { Link, useLocation } from "react-router-dom";

//React-Bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

//External Modules
import Logo from '../Logo';

//Styling
import styles from './header.module.css'

function Header() {
  let location = useLocation();

  return (
    <header className={styles.navContainer}>
      <Navbar collapseOnSelect expand="lg" className="p-0">
        <Container fluid className={`p-0 ${styles.navbarContent}`}>
          <Navbar.Brand>
            <Logo style={{color: '#3d3d3d', fontWeight: '700', fontSize: '20px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.menuTogglerContainer} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`text-center ${styles.navItems}`} activeKey={location.pathname}>
              <Nav.Item>
                <Nav.Link eventKey="/" as='div'>
                  <Link to="/">HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="ABOUT" id="collapsible-nav-dropdown" className={styles.dropdownToggle}>
                <NavDropdown.Item eventKey="/about" as="div" className="text-center" disabled>
                  <Link to="/about-us">ABOUT US</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/pitch" as="div" className="text-center" disabled>
                  <Link to="/pitch">PITCH</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/mcp" as="div" className="text-center" disabled>
                  <Link to="/mychannelprogram">MYCHANNELPROGRAM</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/directory" as="div" className="text-center" disabled>
                  <Link to="/directory">DIRECTORY</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/events" as="div" className="text-center">
                  <Link to="/events">EVENTS</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/directory" as="div" className="text-center">
                  <Link to="/register">REGISTER</Link>
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

export default Header;