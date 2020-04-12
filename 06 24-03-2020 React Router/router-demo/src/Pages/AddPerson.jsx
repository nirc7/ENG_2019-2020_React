import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, IconButton, TextField } from '@material-ui/core';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';

class AddPerson extends Component {

  txtID = (e) => {
    this.setState({
      userId: parseInt(e.target.value)
    });
  }

  txtName = (e) => {
    this.setState({
      userName: e.target.value
    });
  }

  btnAddPerson = () => {
    var userObj = {
      userId: this.state.userId,
      userName: this.state.userName
    };

    this.props.history.push({
      pathname: '/personsList/',
      state: { userObj }
    });
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <TextField id="standard-basic" color="secondary" type="number" label="ID" onChange={this.txtID}/> <br/>
        {this.state && this.state.userId}<br /> 
        <TextField id="standard-basic"  label="NAME" onChange={this.txtName}/> <br/>
        {/* <input type="text" onChange={this.txtID} /> */}          
        {/* NAME: <input type="text" onChange={this.txtName} /> <br /> */}
        <Button
          style={{ margin: 10 }}
          variant="outlined"
          color="primary"
          size="small"
          endIcon={<PersonAddTwoToneIcon />}
          onClick={this.btnAddPerson}>add person
        </Button>
        <IconButton color="secondary" aria-label="add an alarm"
          onClick={this.btnAddPerson}>
          <PersonAddTwoToneIcon />
        </IconButton>
        <IconButton style={{color:'purple'}} aria-label="add an alarm"
          onClick={this.btnAddPerson}>
          <PersonAddTwoToneIcon />
        </IconButton>
      </div>
    )
  }
}

export default withRouter(AddPerson);