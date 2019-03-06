import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
            {/* The header is different for desktop/ipad vs phone sizes, the search expands to fill the open space on larger screen sizes
            PHONES: the search bar and the messages stay on top, but the rest move to the bottom of the page -> both disappear on down scroll and reappear on up scroll */}
            {/* It might be easiest to create a mobile and a desktop/ipad version of the header */}
                <ul className="desktop">
                    <li>logo/home button</li>
                    <li>search bar</li>
                    <li>people button</li>
                    <li>my boards</li>
                    <li>messages</li>
                    <li>notifications</li>
                    <li>three dots</li>
                </ul>


                
                <ul className="mobile-top">
                    <li>search bar</li>
                    <li>messages</li>
                </ul>
                <ul className="mobile-bottom">
                    <li>logo/home button</li>
                    <li>people button</li>
                    <li>notifications</li>
                    <li>my boards</li>
                </ul>
            </div>
        )
    }
}

export default Header;