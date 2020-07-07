import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">MollyRose.ie</NavbarBrand>
        <NavbarText className="d-none d-sm-block">Lets talk about childhood cancer</NavbarText>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar className="animate">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/story/">Mollys Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news/">News & Events</NavLink>
            </NavItem>


          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;