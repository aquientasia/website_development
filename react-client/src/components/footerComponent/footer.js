import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
	    <div class="footer">
	        <div class="container-full-wd clearfix">
	            <div class="cols-3">
	                <div class="footer-logo">
	                	<img src="assets/images/aquient_logo.png" alt="Aquient | Footer Logo"/>
	                </div>
	            </div>
	            <div class="cols-3">
	                <div class="footer-content">
	                    <div class="cols-4">
	                        <h3>What we do</h3>
	                        <ul>
	                            <li><a href="#">Practice Areas</a></li>
	                            <li><a href="#">Industries</a></li>
	                        </ul>
	                    </div>
	                    <div class="cols-4">
	                        <h3>Our Work</h3>
	                        <ul>
	                            <li><a href="#">Case Studies</a></li>
	                        </ul>
	                    </div>
	                    <div class="cols-4">
	                        <h3>Platforms</h3>
	                        <ul>
	                            <li><a href="#">Salesforce</a></li>
	                            <li><a href="#">Sitecore</a></li>
	                            <li><a href="#">Mulesoft</a></li>
	                            <li><a href="#">Google Cloud</a></li>
	                            <li><a href="#">Platform</a></li>
	                        </ul>
	                    </div>
	                    <div class="cols-4">
	                        <h3>Contact</h3>
	                        <ul>
	                            <li><a href="#">Careers</a></li>
	                            <li><a href="#">Location</a></li>
	                            <li>
	                            	<a href="#"><img src="assets/images/linkedin_logo.png" alt="LinkedIn | Icon"/></a>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <div class="cols-3">
	                <p>Copyright 2020 Aquient Pte Ltd.</p>
	            </div>
	        </div>
	    </div>
    )
  }
}
export default Footer;