import React from 'react';
import './Navbars.css'
import CV from '../../assets/images/Zihadul Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Navbar, Nav, Button } from 'react-bootstrap';
import navImg from '../../assets/images/nvi-emoji-bd.png'
import { Link } from 'react-router-dom';
const Navbars = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Navbar.Brand href="/home">
        <a href="/home" className="navbar-item" aria-current='page'>
          <img style={{ marginBottom: '0px', borderRadius: '50%' }} src={navImg} className="d-inline-block align-top" alt="" />

        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ">
                   
         <Link className="ms-5 hover" to="/home">Home</Link>     
         <Link  className="ms-5 hover" to="/about">About</Link> 
         <Link  className="ms-5 hover" to="/allWork">Work</Link>
         <Link  className="ms-5 hover" to="/contacts">Contact</Link>
         

        </Nav>
        <Nav>
          <Nav.Link href="https://www.instagram.com/zihadul18/"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/zihadul-islam-27206a216/"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
          <Nav.Link href="https://github.com/zihadul10101"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
      <Button variant="outline-success" style={{ borderRadius: '10%' }}> <FontAwesomeIcon icon={ faDownload} />   <a href={CV}  >Resume</a></Button>
      
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Navbars;