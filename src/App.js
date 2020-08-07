import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1 style={{color: "#283d3b"}}>lb</h1>
        </p>
        Luc Bohn is an artist and maker.
        <p>
        Welcome to the homepage for my website project.
        </p>
        As I am unable to code there is currently nothing here,
        <p>
        however you can link to my squarespace below.
        </p>
        <a
          className="App-link"
          href="pufferfish-rust-3b2x.squarespace.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Me
        </a>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
