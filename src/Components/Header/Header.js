import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../media/logo.png';
import following from '../../media/following_icon.png';
import notifications from '../../media/bell_icon.png';
import profile from '../../media/profile_icon.png';
import messages from '../../media/message_icon.ico';
import search from '../../media/search_icon.png';
import './Header.css';

class Header extends Component {
    

    render() {
        return (
            <div className="header">

                <Navbar variant='light' className="mobile_top_nav" style={ {top:'0px'} } >

                    <div id='searchbox'>
                        <img src={ search } id="search_icon"/>
                        <p>Search</p>
                    </div>
                    
                    <Navbar.Brand href='messages' className="message_icon">
                        <div id='message_container'>
                            <img src={ messages } />
                        </div>
                    </Navbar.Brand>

                </Navbar>

                <Navbar variant="light" className="mobile_bottom_nav" style={ {bottom: '0px'} }>

                    <Navbar.Brand href="#home" id="icon">
                        <div id='container'>
                            <img src={ logo } /> 
                            <p id="menu_text">Home</p>
                        </div> 
                    </Navbar.Brand>

                    <Navbar.Brand href="#following" id="icon">
                        <div id='container'>
                            <img src={ following }/> 
                            <p id="menu_text" >Following </p>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Brand href="#notifications" id="icon">
                        <div id='container'>
                            <img src={ notifications }/>
                            <p id='menu_text'> Notifications</p>
                        </div>
                     </Navbar.Brand>
                     
                    <Navbar.Brand href="#profile" id="icon">
                        <div id='container'>
                            <img src={ profile }/> 
                            <p id='menu_text'> Profile </p>
                        </div>
                    </Navbar.Brand>
                
                </Navbar>
            </div>
        )
    }
}

export default Header;