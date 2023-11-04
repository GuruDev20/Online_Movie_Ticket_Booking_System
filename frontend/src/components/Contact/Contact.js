import React from 'react';
import ccss from '../Contact/Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <div className={ccss["contact"]}>
      <div className={ccss["contact-field"]}>
        <h1 className={ccss['contact-us']}>Contact Us</h1>
        <div className={ccss["divideer"]}></div>
        <div className={ccss["contact-info"]}>
          <div className={ccss["contact-info-field"]}>
            <div className={ccss["contact-info-icon"]}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className={ccss["contact-info-text"]}>
              <h3>Email</h3>
              <p>guru01803@gmail.com</p>
            </div>
          </div>
          <div className={ccss["contact-info-field"]}>
            <div className={ccss["contact-info-icon"]}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={ccss["contact-info-text"]}>
              <h3>Phone</h3>
              <p>(+91)123-456-7890</p>
            </div>
          </div>
          <div className={ccss["contact-info-field"]}>
            <div className={ccss["contact-info-icon"]}>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div className={ccss["contact-info-text"]}>
              <h3>Address</h3>
              <p>123 Main St, City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
