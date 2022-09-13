import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {HiOutlineScale} from 'react-icons/hi'
const MyNavbar = () => {
  return (
    <>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#home">
                <img src="/assets/images/logo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>                
              </Nav>
              <Nav>
                <div className="navicon"><HiOutlineScale/></div> 
                <div className="navicon"><AiOutlineShoppingCart/></div> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default MyNavbar