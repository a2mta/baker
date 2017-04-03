import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import path from 'path';
import low from 'lowdb';
let {ipcRenderer, remote} = window.require('electron');
let main = remote.require("./main.js");
let items = [];

// Listen for async-reply message from main process


// Listen for main message



function getStuff(stuff) {
  ipcRenderer.send('find', stuff);
  return (() => {
    var s = [];
    ipcRenderer.on('async-reply', (event, arg) => {
      items = arg;
      // Send sync message to main process
      //   let mainValue = ipcRenderer.sendSync('sync', 3);
      // Print 4
      //   console.log(mainValue);
      s = arg;
    });
    return s;
  }
  );
}


class App extends Component {
  componentWillReceiveProps() {
    // console.log(this.props);
  }
  onAdd() {
    var doc = {
      hello: 'world',
      n: 5,
      today: new Date(),
      nedbIsAwesome: true,
      notthere: null,
      notToBeSaved: undefined, // Will not be saved
      fruits: ['apple', 'orange', 'pear'],
      infos: {
        name: 'nedb'
      }
    };
    ipcRenderer.send('async', doc);
  }
  onFind() {
    console.log(getStuff({
      n: 5
    })());
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.onAdd}>
            save
        </button>
         <button onClick={this.onFind}>
            find
        </button>
        <p className="App-intro">
          <Items items={items}/>
        </p>
      </div>
      );
  }
}


class Items extends Component {
  componentWillReceiveProps() {
    console.log(this.props);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {items}
        </div>
      );
  }
}


export default App;