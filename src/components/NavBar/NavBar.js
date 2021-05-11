import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-bar" light expand="md">
        <NavbarBrand className="nav-brand" href="/">
          {`<Anup/>`}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="collapse" isOpen={isOpen} navbar>
          <Nav className="ml-auto nav" navbar>
            <NavItem className="navItem">
              <Link smooth={true} to="about">
                About Me
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link smooth={true} to="skills">
                Skills
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link smooth={true} to="project">
                Projects
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link smooth={true} to="achievements">
                Work Experience
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link smooth={true} to="blogs">
                Blogs
              </Link>
            </NavItem>
            {/* <NavItem className="navItem">
              <Link smooth={true} to="contact">
                Contact Me
              </Link>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
