import React, { Component } from 'react';
import logo from './logo.svg';
import style from './style';
import './AppCustom.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={style['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
