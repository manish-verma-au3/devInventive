import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function MyNav() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand >
        <Link  style={{color:'white' }} to="/">React Routing</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
               <Link style={{color:'white' }} to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link>
               <Link style={{color:'white' }} to="/employees">Employees</Link>
          </Nav.Link>
          <Nav.Link >
               <Link style={{color:'white' }} to="/stock">Stock</Link>
          </Nav.Link>
          <Nav.Link>
               <Link style={{color:'white' }} to="/about">About</Link>
          </Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    )
}

export default MyNav
