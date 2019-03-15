import React, {Component} from 'react'
import axios from 'axios';
import './Pins.css';

class Pins extends Component {
    
    render(){

        axios.get('https://api/pinterest.com/v1/me/pins/').then((res) => {

            console.log(res.data)

                }
            );

        return(
            <div>

                
            </div>
        )
            
    }
}

export default Pins;