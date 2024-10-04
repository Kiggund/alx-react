import logo from './holberton.jpg';
import './App.css';
import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' onClick={() => document.getElementById('emailInput').focus()} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <footer>
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
        </footer>
      </div>
    </div>

  );
}

export default App;

