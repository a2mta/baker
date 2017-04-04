import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import path from 'path';
import low from 'lowdb';
let {ipcRenderer, remote} = window.require('electron');
let main = remote.require("./main.js");
var items = {
  callback: null
};

ipcRenderer.on('async-reply', (event, arg) => {
  items.callback(arg);
});


class App extends Component {
  componentWillMount() {
    items.callback = (data) => {
      this.setState({
        items: data
      });
    };
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
    ipcRenderer.send('find', {
      n: 5
    });
  }
  render() {
    console.log(this.state)
    return (
      <div className="window">
   <header className="toolbar toolbar-header">
  <h1 className="title">Header with actions</h1>

  <div className="toolbar-actions">
    <div className="btn-group">
      <button className="btn btn-default">
        <span className="icon icon-home"></span>
      </button>
      <button className="btn btn-default">
        <span className="icon icon-folder"></span>
      </button>
      <button className="btn btn-default active">
        <span className="icon icon-cloud"></span>
      </button>
      <button className="btn btn-default">
        <span className="icon icon-popup"></span>
      </button>
      <button className="btn btn-default">
        <span className="icon icon-shuffle"></span>
      </button>
    </div>

    <button className="btn btn-default">
      <span className="icon icon-home icon-text"></span>
      Filters
    </button>

    <button className="btn btn-default btn-dropdown pull-right">
      <span className="icon icon-megaphone"></span>
    </button>
  </div>
</header>
      <div className="window-content">
      <div className="">
        <div className="pane-group">
          <div className="pane pane-sm sidebar">
            <nav className="nav-group">
              <h5 className="nav-group-title">Favorites</h5>
              <span className="nav-group-item">
                <span className="icon icon-home"></span>
                connors
              </span>
              <span className="nav-group-item active">
                <span className="icon icon-light-up"></span>
                Photon
              </span>
              <span className="nav-group-item">
                <span className="icon icon-download"></span>
                Downloads
              </span>
              <span className="nav-group-item">
                <span className="icon icon-folder"></span>
                Documents
              </span>
              <span className="nav-group-item">
                <span className="icon icon-window"></span>
                Applications
              </span>
              <span className="nav-group-item">
                <span className="icon icon-signal"></span>
                AirDrop
              </span>
              <span className="nav-group-item">
                <span className="icon icon-monitor"></span>
                Desktop
              </span>
            </nav>
          </div>

          <div className="pane">
            <table className="table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Kind</th>
                  <th>Date Modified</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>bars.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>base.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>button-groups.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>buttons.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>docs.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>forms.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>grid.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>icons.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>images.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>lists.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>mixins.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>navs.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>normalize.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>photon.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>tables.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>tabs.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>utilities.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
                <tr>
                  <td>variables.scss</td>
                  <td>Document</td>
                  <td>Oct 13, 2015</td>
                  <td>connors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
        </div>
      );
  }
}

export default App;