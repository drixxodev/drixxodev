import React from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

const navBarStyles = {
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)",
};

const NavMenuBar: React.FC = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      style={navBarStyles}
    >
      <Container>
        <Navbar.Brand>
          <Image
            src={require("../../assets/logo.png")}
            alt="drixxodev logo"
            width={150}
          />
        </Navbar.Brand>
        <Nav
          className="justify-content-end flex-grow-1 pe-3"
          defaultActiveKey="#home"
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <NavDropdown
            title="Blog"
            id="collasible-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">NetSuite</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Automobiles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Golf</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Resume</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavMenuBar;
