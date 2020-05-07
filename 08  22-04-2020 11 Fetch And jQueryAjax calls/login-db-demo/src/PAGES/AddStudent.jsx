import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';

var url = 'http://localhost:58672/api/student';

function AddStudent(props) {
  let name = null;
  let email = null;
  let pass = null;
  let grade = null;

  async function btnAddStudent() {
    let s = await AddStudent(name, email, pass, grade);
    console.log('returned value=' + s);
    if (s == null) {
      alert('didnt inserted into db!');
    }
    else {
      props.history.push({
        pathname: '/students/'
      });
    }
    //console.log('add', name, email, pass, grade);
  }

  async function AddStudent(name, email, pass, grade) {
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

  return (
    <div>
      <div>
        <h2>Add Student</h2>
      </div>
      <TextField id="name" label="Name" color="primary"
        onChange={(e) => {
          name = e.target.value;
        }}
      />
      <TextField id="email" label="Email" color="primary"
        onChange={(e) => {
          email = e.target.value;
        }}
      />
      <TextField id="pass" label="Password" color="primary"
        onChange={(e) => {
          pass = e.target.value;
        }}
      />
      <TextField id="grade" label="Grade" color="primary"
        onChange={(e) => {
          grade = e.target.value;
        }}
      /> <br /> <br />
      <IconButton aria-label="people" color="primary"
        onClick={btnAddStudent}>
        <PersonAddTwoToneIcon />
      </IconButton>
    </div>
  )
}

export default withRouter(AddStudent)
