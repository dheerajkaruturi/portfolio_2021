import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer class="container-fluid footer" id="contactme">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <div class="footer_head p-3">
              <h3>Made with 💗 on web</h3>
              <h4>
                Designed and Developed by Dheeraj Karuturi😁 ©️ twenty twenty
                one
              </h4>
              <p class="text-danger">
                Note: Links added in the website are not my responsibility or in
                anyway related to me ❌
              </p>
              <p class="text-success">
                <i class="icon ion-logo-google"></i>{" "}
                dheeraj.karuturi96@gmail.com
              </p>
              <div class="made_bootstrap">
                <p class="text-info">Made with Bootstrap</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bootstrap"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
                    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="footer_social-links">
              <a href="https://www.facebook.com/sai.dheeraj.3701/">
                <i class="icon ion-logo-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/sai-dheeraj-karuturi-75b2691b5/">
                <i class="icon ion-logo-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/heavy.paws/">
                <i class="icon ion-logo-instagram"></i>
              </a>
              <a href="https://github.com/dheerajkaruturi?tab=repositories">
                <i class="icon ion-logo-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer
