import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.onChangeText = this.onChangeText.bind(this)
    this.state = {value: ''}
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.onChangeText} />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
  onChangeText (event) {
    this.setState({ value: event.target.value })
  }
}

export default App;
