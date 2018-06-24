import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084366,
          completed: false
        }
      ]
    };
  };

  render() {
    return (
      <div className="App">
        <List
        list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
