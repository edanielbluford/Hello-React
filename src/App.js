import React, { Component } from 'react';
import Header from './FrontPage/Header';
import Main from './FrontPage/Main';
import Footer from './FrontPage/Footer';
import "./FrontPage/Header";
import './App.css';

class App extends Component {
  render() {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer year = {currentYear}/>
      </div>
    );
  }
}

export default App;
