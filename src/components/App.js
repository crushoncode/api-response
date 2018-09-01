import React, { Component } from 'react';
import Brand from './Brand';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <Brand endpoint={'new_tokens'} title={'New Tokens'} />
        </div>
        <div>
          <Brand endpoint={'popular_tokens'} title={'Popular Tokens'} />
        </div>
        <div>
          <Brand endpoint={'popular_tokens'} title={'Popular Tokens'} />
        </div>
      </div>
    );
  }
}

export default App;
