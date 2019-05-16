import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Bod from './Bod';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bod />
        <Footer />
      </div>
    );
  }
}

export default App;
