import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddCheckTwoToneIcon from '@material-ui/icons/PlaylistAddCheckTwoTone';

var url = 'http://localhost:58672/api/student';

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.location.state.student.Name,
      email: props.location.state.student.Email,
      pass: props.location.state.student.Password,
      grade: props.location.state.student.Grade
    };
  }

  btnEditStudent = () => {
    let obj2Send = {
      "ID": this.props.location.state.student.ID,
      "Name": this.state.name,
      "Email": this.state.email,
      "Password": this.state.pass,
      "Grade": this.state.grade
    }

    fetch(url,
      {
        method: 'PUT', // 'GET', 'POST', 'PUT', 'DELETE', etc.
        body: JSON.stringify(obj2Send),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
      }) // Call the fetch function passing the url of the API as a parameter
      .then((resp) => {
        if (resp.status === 200) {
          this.props.history.push({
            pathname: '/students/'
          });
        }
        else if (resp.status === 400) {
          console.log("BadRequest");
        }
        else {
          console.log("NotFound");
        }
      }) // Transform the data into json
      .catch(function (err) {
        alert(err);
      });
  }

  AddStudent = async (name, email, pass, grade) => {
    let returnedObj = null;

    let obj2Send = {
      "ID": 0,
      "Name": name,
      "Email": email,
      "Password": pass,
      "Grade": grade
    }

    await fetch(url,
      {
        method: 'POST', // 'GET', 'POST', 'PUT', 'DELETE', etc.
        body: JSON.stringify(obj2Send),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
      }) // Call the fetch function passing the url of the API as a parameter
      .then((resp) => resp.json()) // Transform the data into json
      .then(function (data) {
        console.log(data);
        if (!data.toString().includes("could not insert")) {
          console.log(data.Email);
          console.log(data.Password);
          returnedObj = data;
        }
        else {
          console.log('didnt inserted!');
          returnedObj = null;
        }
      })
      .catch(function (err) {
        alert(err);
      });

    return returnedObj;
  }

  render() {
    console.log(this.props.location.state.student);
    return (
      <div>
        <div>
          <h2>Edit Student</h2>
        </div>
        <TextField id="name" label="Name" color="primary" value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <TextField id="email" label="Email" color="primary" value={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <TextField id="pass" label="Password" color="primary" value={this.state.pass}
          onChange={(e) => {
            this.setState({ pass: e.target.value });
          }}
        />
        <TextField id="grade" label="Grade" color="primary" value={this.state.grade}
          onChange={(e) => {
            this.setState({ grade: e.target.value });
          }}
        /> <br /> <br />
        <IconButton aria-label="people" color="primary"
          onClick={this.btnEditStudent}>
          <PlaylistAddCheckTwoToneIcon />
        </IconButton>
      </div>
    );
  }
}

export default withRouter(EditStudent);
