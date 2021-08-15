import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faFacebook, faGoogle, faTwitch } from '@fortawesome/free-brands-svg-icons'

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
            {/* <!-- Section: Social media -->
        
            <!-- Section: Form --> */}
            <section className="">
              <form action="">
                {/* <!--Grid row--> */}
                <div className="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Don't miss to contact me </strong>
                    </p>
                  </div>
                  {/* <!--Grid column--> */}
        
                  {/* Grid column */}
                  <div className="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example2" className="form-control" />
                      <label className="form-label" for="form5Example2">Email address</label>
                    </div>
                  </div>
                  {/* <!--Grid column-->
        
                  <!--Grid column--> */}
                  <div className="col-auto">
                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </section>
            {/* <!-- Section: Form --> */}
        
            {/* <!-- Section: Text --> */}
            <section className="mb-4">
              <p>
              I'd Love to hear from you . Important Link!
              </p>
            </section>
            {/* <!-- Section: Text --> */}
{/*         
            <!-- Section: Links --> */}
            <section className="justify-content-center">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!--Grid column--> */}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/contact" className="text-white">Contact</a>
                    </li>
                    <li>
                      <a href="/about" className="text-white">About</a>
                    </li>
                    <li>
                      <a href="/allWork" className="text-white">AllWork</a>
                    </li>
                    <li>
                      <a href="/allArticle" className="text-white">AllArticle</a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}
        
                {/* <!--Grid column--> */}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/home" className="text-white">Home</a>
                    </li>
                    <li>
                      <a href="/home" className="text-white">Header</a>
                    </li>
                    <li>
                      <a href="/allWork" className="text-white">Project</a>
                    </li>
                    <li>
                      <a href="/allArticle" className="text-white">Article</a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}
        
              

              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
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