import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  btngo2Page2 = () => {
    var userObj = {
      userId: 7,
      userName:'avi'
    };

    this.props.history.push({
      pathname: '/page2/',
      state: { userObj : userObj } //the same as  -> state: { userObj } 
    });

  }

  render() {
    return (
      <div>
        <h1>PAGE1 - HOME</h1>
        <button onClick={this.btngo2Page2}>go 2 PAGE2</button>
      </div>
    );
  }
}    

export default withRouter(Page1); 