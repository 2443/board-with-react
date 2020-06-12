import React, { Component } from 'react';
import Header from './Component/Header';
import Navy from './Component/Navy';
import Article from './Component/Article';
import Footer from './Component/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='section'>
          <Navy />
          <Article />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
