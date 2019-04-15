import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Books from './Components/Books';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
	   <Books/>
	   <Footer/>
	   
      </div>
    );
  }
}

export default App;

