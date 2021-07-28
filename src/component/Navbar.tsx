/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import SVG from "react-inlinesvg/esm";
import Logo from "../image/logo.svg";
import { Button, Navbar } from "rtc-design-prototype";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const handleNavbarTabChange = (navbarTabId: any) => {
    console.log(navbarTabId);
  };
  return (
    <Fragment>
      <Navbar className="dark_version">
        <Navbar.Group>
          <Navbar.Heading>
            <Link to="/">
              {" "}
              <SVG src={Logo} />
            </Link>
          </Navbar.Heading>
          <ul onChange={handleNavbarTabChange}>
            <li>
              <Link to="/prices">Prices</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </Navbar.Group>
        <Navbar.Group className="nav-right" align={"right"}>
          <Button minimal icon="caret-down" />
        </Navbar.Group>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
