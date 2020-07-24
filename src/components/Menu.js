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
        <NavbarText className="d-none d-lg-block">Lets talk about Childhood Cancer</NavbarText>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar className="animate">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" title="Go to landing page of site">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/story/" title="Find out more about Molly Rose">Mollys Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/childhoodcancer/" title="Find out more information about Childhood Cancer">Cancer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/helpout/" title="Ways you can help out">Helping Out</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news/" title="Find out current news or events relating to childhood cancer">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/" title="Some more information about us">About</NavLink>
            </NavItem>


          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;