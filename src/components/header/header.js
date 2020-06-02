import React from "react"
import { Navbar, Nav} from "react-bootstrap"
import { Link } from "gatsby"
import './header.css'
const Header = () => {
  return (
    <>
      <Navbar className="nav" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">Roperito</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link exact to={'/'}
              activeClassName="pagina-actual" className="Link" href={"/"}>Inicio</Link>
            <Link exact to={'/nosotros'}
              activeClassName="pagina-actual" className="Link"  href={"/nosotros"}>Nosotros</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
