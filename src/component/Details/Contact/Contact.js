import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';



const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('emails', 'template_wjk0e1k', e.target, 'user_eTZ9o9OeWSpWl3iAgqnGp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
    return (


        <section className="mb-4 contactSection">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
            <div className="row">
                <div className="col-md-6">

                    <form id="contact-form" onSubmit={sendEmail} method="POST" name="contact-form"  >
                        <div className="col-md-3 ">
                            <div className="md-form mb-0">

                                <input type="text" id="name" name="name" className="form-control" placeholder="Your name.." />

                            </div>
                            <br />
                            <div className="col-md-3">
                                <div className="md-form mb-0">

                                    <input type="text" id="email" name="email" className="form-control" placeholder="Your email.." />

                                </div>
                            </div>
                            <br />
                            <div className="col-md-3">
                                <div className="md-form mb-0">

                                    <input type="text"  name="subject" className="form-control" placeholder="Your subject.." />

                                </div>
                            </div>
                            <br />
                            <div className="col-md-3 ">

                                <div className="md-form mb-0">

                                    <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea" placeholder="Your message.."></textarea>

                                </div>

                            </div>
                        </div>

                        <div className="btnSend  text-md-left">
                            
                            <input type="submit" className="btn btn-primary" value="Send Message" />

                        </div>

                    </form>
                </div>
                <div className="col-md-6">
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><FontAwesomeIcon icon={faMapMarked} />
                                <p>Chakaria, Cox's Bazer, Bangladesh</p>
                            </li>

                            <li><FontAwesomeIcon icon={faPhone} />
                                <p>01786022757</p>
                            </li>

                            <li><FontAwesomeIcon icon={faEnvelope} />
                                <p>zihadulislam660.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>








        </section>
    );
};

export default Contact;