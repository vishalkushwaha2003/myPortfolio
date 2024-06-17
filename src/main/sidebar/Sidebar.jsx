import React, { useState } from 'react';
import myPhoto from '../../assets/images/avatar-1.png';
import { IonIcon } from '@ionic/react'; // Ensure this import matches your IonIcon library
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoFacebook, logoTwitter, logoInstagram, chevronUp, chevronDown } from 'ionicons/icons';
import Button from './Button';

function Sidebar() {
  const [isContactsVisible, setIsContactsVisible] = useState(false);
        
  console.log(isContactsVisible)

  const toggleContactsVisibility = () => {
    setIsContactsVisible(!isContactsVisible);
  };

  return (
    <aside className="sidebar data-sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myPhoto} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Richard hanrick
          </h1>
          <p className="title">Web developer</p>
        </div>

        {/* <div onClick={toggleContactsVisibility} className="info_more-btn data-sidebar-btn">
          <span>{isContactsVisible ? 'Hide Contacts' : 'Show Contacts'}</span>
          <IonIcon icon={isContactsVisible ? chevronUp : chevronDown} />
        </div> */}

        {/* <div onClick={toggleContactsVisibility}><Button /></div> */}

        <button className='button-animation' onClick={toggleContactsVisibility}>Button</button>

      </div>

      {isContactsVisible && (
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={mailOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:richard@example.com" className="contact-link">
                  richard@example.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={phonePortraitOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+12133522795" className="contact-link">
                  +1 (213) 352-2795
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={calendarOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={locationOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Sacramento, California, USA</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon icon={logoFacebook} />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon icon={logoTwitter} />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon icon={logoInstagram} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
