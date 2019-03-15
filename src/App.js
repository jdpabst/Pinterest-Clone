import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          top_nav: 0,
          bottom_nav: 0
      }

      this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e){
      console.log(e)
      console.log('test')
  }


  render() {
    return (
      <div className="App" onScroll={ this.handleScroll }>
        < Header / >
      </div>
    );
  }
}

export default App;
