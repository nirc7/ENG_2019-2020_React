import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


var url = 'http://localhost:58672/api/student';

class Login extends Component {
  constructor(props) {
    super(props);
    this.txtEmail = '';
    this.txtPass = '';

    this.state = { showErrLbl: false };
  }

  chgTxtEmail = (e) => {
    this.txtEmail = e.target.value;
  }
  chgTxtPass = (e) => {
    this.txtPass = e.target.value;
  }

  btnLogin = async () => {
    let s = await this.checkStudentDetils(this.txtEmail, this.txtPass);
    console.log('returned value=' + s);

    if (s != null) {
      this.setState({ showErrLbl: false },
        () => {
          this.props.history.push({
            pathname: '/home/',
            state: { studentObj: s }
          });
        });
    }
    else {
      this.setState({ showErrLbl: true });
    }
  }

  checkStudentDetils = async (Email, Password) => {
    let returnedObj = null;

    await fetch(url + `?email=${Email}&password=${Password}`,
      {
        method: 'GET', // 'GET', 'POST', 'PUT', 'DELETE', etc.
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
      }) // Call the fetch function passing the url of the API as a parameter
      .then((resp) => resp.json()) // Transform the data into json
      .then(function (data) {
        console.log(data);
        if (data != null) {
          console.log(data.Email);
          console.log(data.Password);
          returnedObj = data;
        }
        else {
          console.log('wrong email or password!');
          returnedObj = null;
        }
      })
      .catch(function (err) {
        alert(err);
      });

    return returnedObj;
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        Email: <input type="text" onChange={this.chgTxtEmail} /> <br />
        Password: <input type="text" onChange={this.chgTxtPass} /> <br /> <br/>
        <Button variant="outlined" color="primary" onClick={this.btnLogin}>
          Login
        </Button>
        {this.state.showErrLbl && <h3 style={{ color: 'red' }} >Error name or Pass</h3>}
      </div>
    )
  }
}

export default withRouter(Login);
