import React, {Component} from 'react'
import axios from 'axios';
import './Pins.css';
import Header from '../Header/Header';
import { client_id } from '../../config.js'

class Pins extends Component {

    componentDidMount(){
        
        axios.get('https://api.pinterest.com/v1/me/pins?access_token=' + this.props.token).then((res) => {

            console.log(res.data)

        });

        
    }
    render(){

        return(
            <div id='pin-container'>
                <Header />
                <div id='test-pin'>
                </div>
                
            </div>
        )
            
    }
}

export default Pins;