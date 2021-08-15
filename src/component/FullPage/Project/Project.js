import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
const Project = () => {
    return (
        <section className="project">
            <h1>Some of my works</h1>
            <div className="project row d-flex">
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src="https://i.ibb.co/YLLSVBw/panda.png" alt="Card image cap" />
                    <div class="card-body">
                        <h3>Panda Commerce </h3>
                        <p class="card-text">Engineered a SPA panda commerce with responsive design.</p>
                        <div className="d-flex">
                            <div className="technology">
                                <span>React</span>
                                <span>Html</span>
                                <span>Css</span>
                                <span>Bootstrap</span>
                                <span>router</span>
                                
                            </div>
                        </div>
                        <div className="d-flex pt-3">
                            <div className="link pr-25">
                                <span>   <a href="https://github.com/zihadul10101/panda-commerce-bootstrap"><FontAwesomeIcon icon={faGithub} /></a></span>
                                <span>     <a href="https://zihadul10101.github.io/panda-commerce-bootstrap/#subscribe"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src="https://i.ibb.co/nrWcjKk/application-repair.png" alt="Card image cap" />
                    <div class="card-body pt-25">
                        <h3>Application Repaire</h3>
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
                        <div className="d-flex pr-25">
                            <div className="link">
                                <span>   <a href="https://github.com/Porgramming-Hero-web-course/complete-website-client-zihadul10101"><FontAwesomeIcon icon={faGithub} /></a></span>
                                <span>     <a href="https://applicance-repair.web.app/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center">
                    <Link to="/allWork"><Button className="btn btn-success" style={{ borderRadius: '10%' }} >All Work </Button></Link>
                </div>
            </div>

        </section>
    );
};

export default Project;