import React from 'react';
import './GetInTouch.css';
import { Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
const GetInTouch = () => {
    return (
        <section className="getInTouch">
        <div className=" contact" style={{ textAlign: 'center'}}>
            <p>What's Next?</p>
            <h1>Get In Touch</h1>
            <p>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
            <div className="text-center">
                <Link to="/contacts"><Button variant="outline-success" style={{ borderRadius: '10%' }}>Say Hello</Button>
                </Link>
              
            </div>


            </div>
        </section>
    );
};

export default GetInTouch;