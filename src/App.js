import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogEntry from './log-entry/LogEntry.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Coffee!
        </p>
        <LogEntry/>
      </header>
    </div>
  );
}

export default App;
