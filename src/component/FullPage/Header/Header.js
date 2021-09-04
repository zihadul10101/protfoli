
import { Button } from 'react-bootstrap';
import React from 'react';
import {
    Link
} from "react-router-dom";

import './Header.css';
import HeaderAnimation from '../../Animation/HeaderAnimation/HeaderAnimation';
const Header = () => {
    return (
        <section className="header">
            <div className="row d-flex">

                <div className="col-md-8  justify-content-center pt-5">
                    <h5 className="text-white ">Hello , I'm</h5>
                    <h1 className="text-white ">Zihadul Islam</h1>
                    <HeaderAnimation ></HeaderAnimation>
                  
                    <p className="text-white ">"A self-motivated and enthusiastic web developer with a deep interest in JavaScript."</p>

                    <div className="btn pr-5 ">

                            <Link to="/about"><Button className="btn btn-success" >About Me </Button></Link>
                            <Link to="/contacts">  <Button variant="outline-success" >Get in touch </Button></Link>
                        </div>
                </div>
                <div className="col-md-4 justify-content-end rotate">
                    <img src="https://i.ibb.co/yV1wHPt/about-img.png" class="img-fluid" alt="image 3 rotate 360" />

                </div>
            </div>

        </section>
    );
};

export default Header;