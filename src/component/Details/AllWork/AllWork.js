import React from 'react';
import './AllWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const AllWork = () => {
    return (

        <div className="project row d-flex">
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src="https://i.ibb.co/tLym1GR/book-shop.png" alt="Card image cap" />
                <div class="card-body">
                    <h3>Book Shop</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex">
                        <div className="technology">
                            <span>router</span>
                            <span>firebase</span>
                            <span>heroku</span>
                            <span>react</span>
                            <span>router</span>
                            <span>firebase</span>
                            <span>heroku</span>
                            <span>react</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="link">
                            <span>   <a href="https://github.com/zihadul10101/web-book-shop-client"><FontAwesomeIcon icon={faGithub} /></a></span>
                            <span>     <a href="https://web-book-shop.web.app/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src="https://i.ibb.co/nrWcjKk/application-repair.png" alt="Card image cap" />
                <div class="card-body">
                    <h3>Application Repair</h3>
                    <p class="card-text">Programmed an agency site with the front end, back end, and database integration.</p>
                    <div className="d-flex">
                        <div className="technology">
                            <span>router</span>
                            <span>firebase</span>
                            <span>heroku</span>
                            <span>react</span>
                            <span>router</span>
                            <span>firebase</span>
                            <span>heroku</span>
                            <span>react</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="link">
                            <span>   <a href="https://github.com/zihadul10101/application-repaier-client"><FontAwesomeIcon icon={faGithub} /></a></span>
                            <span>     <a href="https://applicance-repair.web.app/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src="https://i.ibb.co/YLLSVBw/panda.png" alt="Card image cap" />
                <div class="card-body">
                    <h3>Panda commerce </h3>
                    <p class="card-text">Engineered a SPA panda commerce with responsive design..</p>
                    <div className="d-flex">
                        <div className="technology">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="link">
                            <span>   <a href="https://github.com/zihadul10101/panda-commerce-bootstrap"><FontAwesomeIcon icon={faGithub} /></a></span>
                            <span>     <a href="https://zihadul10101.github.io/panda-commerce-bootstrap/#subscribe"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></span>

                        </div>
                    </div>
                </div>

            </div>

            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src="https://i.ibb.co/CbjJHmG/jevelin.png" alt="Card image cap" />
                <div class="card-body">
                    <h3>Jevelin</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex">
                        <div className="technology">
                        
                           
                            <span>Html </span>
                            <span>Css</span>
                       
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="link">
                            <span>   <a href="https://github.com/zihadul10101/programing-plant-html-css"><FontAwesomeIcon icon={faGithub} /></a></span>
                            <span>     <a href="https://zihadul10101.github.io/programing-plant-html-css/index.html"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllWork;