import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  saveData() {
      var Datastore = require('nedb')
var bakes = new Datastore({
  filename: __dirname + '/bakes.db',
  autoload: true
});
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
    bakes.insert(doc, function(err, newDoc) { // Callback is optional
      // newDoc is the newly inserted document, including its _id
      // newDoc has no key called notToBeSaved since its value was undefined
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
