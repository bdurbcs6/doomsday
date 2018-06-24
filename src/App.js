import React, { Component } from 'react';
import List from './List';
import ListForm from './ListForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      singleItem: ''
    };
  };

  updateSingleItem = e => this.setState({ singleItem : e.target.value });

  addSingleItem = e => {
    e.preventDefault();
    const list = this.state.list.slice();
    list.push({ task: this.state.singleItem, completed: false, id: Date.now() });
    this.setState({ list, singleItem: '' })
  };

  toggleSingleItem = id => {
    let list = this.state.list.slice();
    list = list.map(singleItem => {
      if (singleItem.id === id) {
        singleItem.completed = !singleItem.completed;
        return singleItem;
      } else {
        return singleItem;
      }
    });
    this.setState({ list });
  }

  render() {
    return (
      <div className="App">
        <ListForm
        value={this.state.singleItem}
        updateSingleItem={this.updateSingleItem}
        addSingleItem={this.addSingleItem}
        />
        <List
        list={this.state.list}
        toggleSingleItem={this.toggleSingleItem}
        />
      </div>
    );
  }
}

export default App;
