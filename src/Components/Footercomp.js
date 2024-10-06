import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Footer.scss';
const Footercomp = () => {


  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Flavoro</h5>
            <p>Flavoro brings you the best flavors from your favorite restaurants. Delivering fresh and fast to your door.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className='qk'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/menu" className="text-white">Menu</a></li>
              <li><a href="/offers" className="text-white">Offers</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@flavoro.com</p>
            <p>Phone: +1 (800) 123-4567</p>
          </div>

          {/* Newsletter Subscription Section */}
          
        </div>

        {/* Social Media Section */}
        <div className="row">
          <div className="col-12 text-center">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 Flavoro. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footercomp;
