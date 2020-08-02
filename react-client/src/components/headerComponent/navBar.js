import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
	    <div class="header">
	        <div class="container-full-wd clearfix">
	            <div class="cols-2">
	                <div class="header-logo"><img src="assets/images/aquient_logo.png" alt="Aquient | Header Logo"/></div>
	            </div>
	            <div class="burger-container">
	                <div class="burger-nav">
	                    <div></div>
	                    <div></div>
	                    <div></div>
	                </div>
	            </div>
	            <div class="cols-2">
	                <div class="main-nav">
	                    <ul class="nav-items">
	                        <li><a href="#">What we do</a></li>
	                        <li><a href="#">Our Work</a></li>
	                        <li><a href="#">Platforms</a></li>
	                        <li><a href="#">CONTACT US</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
    )
  }
}
export default NavBar;