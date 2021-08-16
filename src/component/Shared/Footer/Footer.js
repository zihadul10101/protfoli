import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (

     <section>
            {/* Footer */}
        <footer className="bg-dark text-center text-white">
          {/*  Grid container */}
          <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/*  Facebook */}
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/zihadul.islam.7140" role="button"
                ><FontAwesomeIcon icon={faFacebook} />
              </a>
        
              {/*  Twitter */}
              <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Zihadul71118881" role="button"
                ><FontAwesomeIcon icon={faTwitch} />
              </a>
        
              {/* <!-- Instagram --> */}
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/zihadul18/" role="button"
                ><FontAwesomeIcon icon={faInstagram} />
              </a>
        
              {/* <!-- Linkedin --> */}
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/zihadul-islam-27206a216/" role="button">
              <FontAwesomeIcon icon={faLinkedin} /></a>
        
              {/* <!-- Github --> */}
              <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/zihadul10101" role="button"
                ><FontAwesomeIcon icon={faGithub} />
              </a>
            </section>
          </div>
          {/* <!-- Grid container --> */}
        
          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">Zihadul.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
     </section>
           
        

    );
};

export default Footer;