import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My Blog App" />
        <Footer bottom="© Copyright 2018" />
      </div>

    );
  }
}

export default App;
