import React from 'react';

import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
        <h5>&copy; 2024 Your Company Name. All Rights Reserved.</h5>
        <div class="social-icons">
            <Link to="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></Link>
            <Link to="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></Link>
            <Link to="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></Link>
            <Link to="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></Link>
        </div>
        <Link to="#">Contact Us</Link>
    </footer> 
  )
}

export default Footer