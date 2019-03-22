import React, {Component} from 'react';
import axios from 'axios';
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
          }
    
          this.handleScroll = this.handleScroll.bind(this);
          this.handleLogin = this.handleLogin.bind(this);
      }
    
      handleScroll(e){
          console.log(e)
          console.log('test')
      }
    
      handleLogin(){
        // MOVE THIS TO LOGIN PAGE WHEN READY
        let redirectURL = "https://api.pinterest.com/oauth/?response_type=code&redirect_uri=https://localhost:3000&client_id=" +
             client_id + "&scope=read_public,write_public&state=768uyFys"
    
        window.location.href= redirectURL;
        //
    }

    componentDidMount(){
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
            sessionStorage.token=res.data.access_token;
            // this.setState({
            //   access_token: res.data.access_token
            // })+

            // redirect to PINS page
          })
        }
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

              <button id='redirect-home-btn'>Checkout Pins</button>

              <div id='login-footer1'>
                <p>By continuing, you agree to Pinterest's Terms of Service and Privacy Policy</p>
                <img src={ appStore } id="app-store-logo"/>
              </div>

              <div id='login-pageline'></div>

              <p id="login-business-acct">Create a business account</p>

                {/* < Pin token={this.state.access_token}/ > */}
            </div>
        )
    }
}

export default Login;