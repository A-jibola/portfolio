import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LinkStyle from './LinkStyle';

export default function Header() { 
  return (
    <>
      <Navbar id="theNav" expand="lg" className="mb-2 navbar-dark">
        <Container>
          <Navbar.Brand href="/" className='fw-semibold font-color'>AJIBOLA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='font-color' href="/"> <LinkStyle linkName={'/'}/> Home</Nav.Link>
              <Nav.Link className='font-color' href="/projects"> <LinkStyle linkName={'/projects'}/> Projects</Nav.Link>
              <Nav.Link className='font-color' href="/experience"> <LinkStyle linkName={'/experience'}/> Experience</Nav.Link>
              <Nav.Link className='font-color' href="/about"> <LinkStyle linkName={'/about'}/> About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
