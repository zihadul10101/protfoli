import React from 'react';
import './About.css';
const About = () => {
    return (
        <section className="aboutSection">
             <h1>About Me</h1>
            <div className="row d-flex ">
                <div className="col-md-6  justify-content-center ">
                        <img src="https://i.ibb.co/yV1wHPt/about-img.png" class="img-fluid"  style={{ marginBottom: '0px', borderRadius: '100%', height: '350px',width:'500px', alignItems: 'center' }} alt="" />
                        <h2>
                            <small className="text">I'm</small> Zihadul Islam
                        </h2>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. </p>
                    </div>
                    <div className="col-md-6  justify-content-end">

                        <h4 className="page-title">
                            My Skills Set
                        </h4>
                        <div className="technology">
                           <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Bootstrap</span>
                            <span>React.js</span>
                            <span>REST API</span>
                            <span>ES6</span>
                            <span>Material UI</span>
                          
                        </div>
                        <h4 className="page-title mt-5 mb-3">
                            I want to work with
                        </h4>
                        <div className="technology">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Mongoose</span>
                        </div>

                        <h4 className="page-title mt-5 mb-3">
                            I want to work with
                        </h4>
                        <div className="technology">
                           <span>Firebase</span>
                            <span>Heroku</span>
                            <span>Netlify</span>
                            <span>Github</span>
                            <span>Gitbase</span>
                        </div>
                    </div>

                </div>

        </section >
    );
};

export default About;