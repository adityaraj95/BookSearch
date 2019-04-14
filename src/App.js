import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Books from './Components/Books';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
	   <Books/>
	   
      </div>
    );
  }
}

export default App;

