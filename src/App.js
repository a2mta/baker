import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Datastore from 'nedb';
import path from 'path';

class App extends Component {
  saveData() {
    var db = new Datastore({
      filename: '/data.db',
      autoload: true
    });
    db.insert([{
      a: 5
    }, {
      a: 42
    }], function(err, newDocs) {
      // Two documents were inserted in the database
      // newDocs is an array with these documents, augmented with their _id
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.saveData}>
            save
        </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      );
  }
}

export default App;