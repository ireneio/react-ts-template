import React from 'react';
import logo from './assets/img/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React with Typescript Support
        </p>
        <a
          className="App-link"
          href="https://github.com/keiko15678/react-ts-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
