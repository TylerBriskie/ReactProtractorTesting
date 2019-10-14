import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.newNumber = this.newNumber.bind(this);

  }
  state = {
    randomInt: 42,
  }
  
  newNumber(){
    var newNumber = Math.floor(Math.random()*10000);
    this.setState({randomInt: newNumber});
  }
  
  render(){
    return (
      <div className="App">
        <header id="App-header">
          Testable Protractor App
        </header>
        <div id="random-int-container">
          <h2>Random Number</h2>
          <h3>{this.state.randomInt}</h3>
          <button onClick={this.newNumber}>New Number</button>
        </div>
        <div id="card-container">
        
        </div>
      </div>
    );
  }
  
}

export default App;
