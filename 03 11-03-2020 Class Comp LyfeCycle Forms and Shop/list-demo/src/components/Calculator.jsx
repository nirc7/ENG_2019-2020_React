import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { result: '...' };
    this.num1 = null;
    this.num2 = null;
  }

  btnAdd = () => {
    this.setState({
      result: parseInt(this.num1) + parseInt(this.num2)
    }, () => {
      this.props.sendData(this.state.result);
    });
  }

  txtChgNum1 = (e) => {
    this.num1 = e.target.value;
  }

  txtChgNum2 = (e) => {
    this.num2 = e.target.value;
  }

  render() {
    return (
      <div style={{
        border: 'solid white 2px',
        margin: 15,
        padding: 20
      }}>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="number one" onChange={this.txtChgNum1} /></div>
          <div class="col">
            <button type="button" class="btn btn-outline-info" onClick={this.btnAdd}>+</button>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="number zwei" onChange={this.txtChgNum2} /></div>
        </div>
        <h3>the result is {this.state.result}</h3>
      </div>
    );
  }
}