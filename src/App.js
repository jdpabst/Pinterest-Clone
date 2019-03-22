import React, { Component } from 'react';
import './App.css';
// import Header from './Components/Header/Header.js'
// import Pin from './Components/Pins/Pins.js';
import router from './router'



class App extends Component {
  

  render() {
    return (
      <div className="App" onScroll={ this.handleScroll }>
        {/* < Header / > */}
        {router}
      </div>
    );
  }
}

export default App;
