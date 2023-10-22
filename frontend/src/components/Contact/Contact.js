import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import kannum from '../../assets/kannum.jpg'
import vikram from '../../assets/vikram.jpg'
import leo from '../../assets/leo.jpg'
import endgame from '../../assets/endgame.jpg'
function Contact() {
  return (
    <div className="contact">
      <div className="contact-field">
        <h1 className='contact-us'>Contact Us</h1>
        <div className="divideer"></div>
        <div className="contact-info">
          <div className="contact-info-field">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-info-text">
              <h3>Email</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="contact-info-field">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-info-text">
              <h3>Phone</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="contact-info-field">
            <div className="contact-info-icon">
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div className="contact-info-text">
              <h3>Address</h3>
              <p>123 Main St, City</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-img-field">
          <div className="card-img">
            <img src={kannum} alt="Movie 1" className="card-image" />
          </div>
          <div className="card-img">
            <img src={vikram} alt="Movie 2" className="card-image" />
          </div>
          <div className="card-img">
            <img src={leo} alt="Movie 1" className="card-image" />
          </div>
          <div className="card-img">
            <img src={endgame} alt="Movie 2" className="card-image" />
          </div>
      </div>
    </div>
  );
}

export default Contact;
