import React, { Component } from 'react';
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
        }
      ]
    };
  };
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
