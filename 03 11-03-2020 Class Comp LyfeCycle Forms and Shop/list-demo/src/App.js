import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MyFooter from './components/MyFooter.jsx';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "insert your name"
    };

    this.numbers = [1, 2, 3, 4, 5];
    this.listNumbers = this.numbers.map((number) =>
      <a href="#" className="list-group-item list-group-item-action" key={number}>{number * 2}</a>
    );
    this.list = ["avi", "benny", "charlie"];
    this.listNames = this.list.map((name, index) =>
      <a href="#" className="list-group-item" key={index}>{index + ": hello " + name + "!"}</a>
    );
  }


  getDate = (data) => {
    this.setState({
      result: data
    });
  }

  onTextChanged=(event)=>{
    let txt = event.target.value;
    let newTxt = txt.toUpperCase();
    this.setState({userName : newTxt});
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          {Header}
          <input type="text" name="userName" value={this.state.userName}  onChange={this.onTextChanged}/>
          {this.state.userName}
          <input type="text" value={this.state == null ? 'empty' : this.state.result} />
          result from child={this.state == null ? 'empty' : this.state.result} <br />
          result from child={this.state && this.state.result}
          <div style={{ color: 'red', backgroundColor: 'white' }}>avi</div>
          <Calculator sendData={this.getDate} />
          <MyFooter time={new Date().getMinutes()} />

          <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
          <div className="list-group" style={{ width: "20%" }}>{this.listNames}</div>
          <p style={{ fontWeight: "bold", margin: 10 }}>numbers list:</p>
          <div className="list-group" style={{ width: "20%" }}>{this.listNumbers}</div>


        </header>
      </div>
    );
  }
}

export default App;
