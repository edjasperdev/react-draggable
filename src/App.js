import React, { Component } from 'react';
// import logo from './logo.svg';
import PhotoList from './PhotoList';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
         <h1>Photo Order App</h1>
        <PhotoList />
      </div>
    );
  }
}

export default App;
