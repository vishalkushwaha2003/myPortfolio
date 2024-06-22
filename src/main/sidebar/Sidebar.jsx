import React, { useState } from 'react';
import myPhoto from '../../assets/images/avatar-1.png';
import { IonIcon } from '@ionic/react';
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoFacebook, logoTwitter, logoInstagram, chevronUp, chevronDown } from 'ionicons/icons';

function Sidebar() {
  const [isContactsVisible, setIsContactsVisible] = useState(false);

  const toggleContactsVisibility = () => {
    setIsContactsVisible(!isContactsVisible);
  };

  return (
    <aside className={`sidebar data-sidebar mb-4 max-h-[112px] overflow-hidden transition-all ${isContactsVisible ? 'max-h-[405px]' : ''}`}>
      <div className="sidebar-info relative flex justify-start items-center gap-4">
        <figure className="avatar-box bg-gradient-onyx rounded-2xl">
          <img src={myPhoto} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name text-white text-[var(--fs-3)] font-medium tracking-tight mb-2.5" title="Richard hanrick">
            Richard hanrick
          </h1>
          <p className="title text-[var(--white-1)] bg-[var(--onyx)] text-[var(--fs-8)] font-light w-max px-3 py-0.5 rounded-md">Web developer</p>
        </div>

        <button className="button-animation absolute -top-4 -right-4 rounded-t-none rounded-r-2xl rounded-b-2xl rounded-l-none text-sm text-[var(--orange-yellow-crayola)] bg-[var(--border-gradient-onyx)] p-2.5 shadow-[var(--shadow-2)] transition-all z-1" onClick={toggleContactsVisibility}>
          <IonIcon icon={isContactsVisible ? chevronUp : chevronDown} />
        </button>
      </div>

      {isContactsVisible && (
        <div className="sidebar-info_more opacity-100 visible transition-all">
          <div className="separator"></div>
          <ul className="contacts-list grid grid-cols-1 gap-4">
            <li className="contact-item w-full flex items-center gap-4">
              <div className="icon-box">
                <IonIcon icon={mailOutline} />
              </div>
              <div className="contact-info max-w-[calc(100%-46px)] w-[calc(100%-46px)]">
                <p className="contact-title text-[var(--light-gray-70)] text-[var(--fs-8)] uppercase mb-0.5">Email</p>
                <a href="mailto:richard@example.com" className="contact-link text-white text-[var(--fs-7)]">richard@example.com</a>
              </div>
            </li>
            <li className="contact-item w-full flex items-center gap-4">
              <div className="icon-box">
                <IonIcon icon={phonePortraitOutline} />
              </div>
              <div className="contact-info max-w-[calc(100%-46px)] w-[calc(100%-46px)]">
                <p className="contact-title text-[var(--light-gray-70)] text-[var(--fs-8)] uppercase mb-0.5">Phone</p>
                <a href="tel:+12133522795" className="contact-link text-white text-[var(--fs-7)]">+1 (213) 352-2795</a>
              </div>
            </li>
            <li className="contact-item w-full flex items-center gap-4">
              <div className="icon-box">
                <IonIcon icon={calendarOutline} />
              </div>
              <div className="contact-info max-w-[calc(100%-46px)] w-[calc(100%-46px)]">
                <p className="contact-title text-[var(--light-gray-70)] text-[var(--fs-8)] uppercase mb-0.5">Birthday</p>
                <time dateTime="1982-06-23" className="text-white text-[var(--fs-7)]">June 23, 1982</time>
              </div>
            </li>
            <li className="contact-item w-full flex items-center gap-4">
              <div className="icon-box">
                <IonIcon icon={locationOutline} />
              </div>
              <div className="contact-info max-w-[calc(100%-46px)] w-[calc(100%-46px)]">
                <p className="contact-title text-[var(--light-gray-70)] text-[var(--fs-8)] uppercase mb-0.5">Location</p>
                <address className="not-italic text-white text-[var(--fs-7)]">Sacramento, California, USA</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list flex justify-start items-center gap-4 pb-1 pl-2">
            <li className="social-item">
              <a href="#" className="social-link text-[var(--light-gray-70)] text-[18px] hover:text-[var(--light-gray)]">
                <IonIcon icon={logoFacebook} />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link text-[var(--light-gray-70)] text-[18px] hover:text-[var(--light-gray)]">
                <IonIcon icon={logoTwitter} />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link text-[var(--light-gray-70)] text-[18px] hover:text-[var(--light-gray)]">
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
