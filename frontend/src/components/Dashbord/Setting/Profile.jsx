import React from 'react';
import './Profile.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ProfileTab() {
  return (
    <div className="profile-tab">
      <div className="left-card">
        <h3>Excel Analytics</h3>
        <div className="info-line">
          <EmailIcon className="icon" />
          <span>code@excelanalytics.com</span>
        </div>
        <div className="info-line">
          <PhoneAndroidIcon className="icon" />
          <span>(+91) 99999 99999</span>
        </div>
        <div className="info-line">
          <LocationOnIcon className="icon" />
          <span>Bangaluru, Karnataka</span>
        </div>
      </div>

      <div className="right-card">
        <h3>About Us</h3>
        <p>
          At Excel Analytics, we believe data should work for you, not against you.
Our mission is simple: to empower businesses, professionals, and students with clear, actionable insights using the most familiar tool in the world of analytics — Microsoft Excel.
        </p>

        <div className="details">
          <div className="row">
            <strong>Name :</strong>
            <span>Excel Analytics</span>
          </div>
          
          <div className="row">
            <strong>Address:</strong>
            <span>Bangaluru, Karnataka</span>
          </div>
          <div className="row">
            <strong>Pin Code:</strong>
            <span>809990</span>
          </div>
          <div className="row">
            <strong>Website:</strong>
            <a href="https://excelanalytics.com" target="_blank" rel="noreferrer">
              https://excelanalytics.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
