import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {client_id , client_secret} from '../../config.js';
import './Login.css';
import logo from '../../media/logo.png';
import appStore from '../../media/app_store.png';

class Login extends Component {
    constructor(props){
        super(props);
          this.state = {
              top_nav: 0,
              bottom_nav: 0,
              access_token: '',
              bttn_color: 'rgba(119, 119, 119, 0.5)',
              bttn_font_color: 'gray',
              bttn_border: '1px solid rgba(119, 119, 119, 0)',
              clickable: 'not-allowed'
          }
    
          this.handleScroll = this.handleScroll.bind(this);
          this.handleLogin = this.handleLogin.bind(this);
          this.handleRedirect = this.handleRedirect.bind(this);
      }
    
      handleScroll(e){
          console.log(e)
          console.log('test')
      }
    
      handleLogin(){
        let redirectURL = "https://api.pinterest.com/oauth/?response_type=code&redirect_uri=https://localhost:3000&client_id=" +
             client_id + "&scope=read_public,write_public&state=768uyFys"
    
        window.location.href= redirectURL;

    }

    componentDidMount(){
      if(sessionStorage.token){
        window.location.href = window.location.origin + '/#/home'
      }
        let params = getParams(window.location.href);
        function getParams (url) {
          var params = {};
          var parser = document.createElement('a');
          parser.href = url;
          var query = parser.search.substring(1);
          var vars = query.split('&');
          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
          }
          return params;
        };
        if(params.code){
          axios.post(`https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&code=${params.code}`).then(res => {

            console.log(res.data.access_token)

            // can use localStorage to save the token so you only have to log in once, not every new session //
            sessionStorage.token=res.data.access_token;

            this.setState({
              bttn_color: '#efefef',
              bttn_font_color: 'black',
              bttn_border: '1px solid #efefef',
              clickable: 'pointer'
            })

            // redirect to PINS page
            
          })
        }
      }

      handleRedirect(){
        window.location.href = window.location.origin + '/#/home'
      }

    render() {
        return (
            <div id='login'>

              <div id='login-header'>
                <img src={ logo }/>

                <h1>Welcome to Pinterest</h1>

                <p>Free, unlimited access to content</p>
              </div>

              <button id='authenticate-button' onClick={this.handleLogin}>Authenticate with Pinterest</button>

              
              <button id='redirect-home-btn' style={ { color: `${this.state.bttn_font_color}`, background: `${this.state.bttn_color }`, border: `${this.state.bttn_border }`, cursor: `${this.state.clickable}` } } onClick={this.handleRedirect}>Checkout Pins</button>

              <div id='login-footer1'>
                <p>By continuing, you agree to Pinterest's Terms of Service and Privacy Policy</p>
                <img src={ appStore } id="app-store-logo"/>
              </div>

              <div id='login-pageline'></div>

              <p id="login-business-acct">Create a business account</p>

            </div>
        )
    }
}

export default Login;