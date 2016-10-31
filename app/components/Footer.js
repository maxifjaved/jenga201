import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    render() {
        return (
            <div>
        {/* footer */}
        <div className="footer">
          <div className="container">
            <div className="col-md-3 footer-grid">
              <h6>About us</h6>
              <p>Suspendisse sed accumsan risus. Curabitur rhoncus, elit vel tincidunt elementum, nunc urna tristique nisi, in interdum libero magna tristique ante.</p>
            </div>
            <div className="col-md-3 footer-grid">
              <h6>Information</h6>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-3 footer-grid">
              <h6>Support</h6>
              <ul>
                <li><a href="#">Curabitur</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Wish List</a></li>
                <li><a href="#">Newsletter</a></li>
              </ul>
            </div>
            <div className="col-md-3 footer-grid">
              <h6>Extras</h6>
              <ul>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Gift Vouchers</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Specials</a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="footer-copy">
          <p>© 2016 Eternity. All rights reserved | Design by <a href="http://w3layouts.com/"> W3layouts</a></p>
          <ul>
            <li><a href="#" className="f1" /></li>
            <li><a href="#" className="f2" /></li>
            <li><a href="#" className="f3" /></li>
            <li><a href="#" className="f4" /></li>
          </ul>
        </div>
        {/* //footer */}
      </div>

        );
    }
}
export default Footer;
