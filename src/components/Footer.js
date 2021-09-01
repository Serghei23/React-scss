import React from 'react';
function Footer () {
 return (
      
<div className="footer">
  <div className="inner-footer">

    <div className="footer-items">
      <h1>Company Name</h1>
      <p>Description of any product or motto of the company.</p>
    </div>


    <div className="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>sergiuse616@gamil.com</li>
        </ul> 

        <div class="social-media">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
</div>
 )
}

export default Footer;