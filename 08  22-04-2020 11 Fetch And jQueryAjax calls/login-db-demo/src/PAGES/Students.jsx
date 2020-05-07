import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from '@material-ui/core/IconButton';



var url = 'http://localhost:58672/api/student';

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    }
  }

  componentDidMount() {
    this.getAllStudents();
  }

  getAllStudents() {
    fetch(url,
      {
        method: 'GET', // 'GET', 'POST', 'PUT', 'DELETE', etc.
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
      }) // Call the fetch function passing the url of the API as a parameter
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
        else
          return "could not get all the students!";
      }
      ) // Transform the data into json
      .then((data) => {
        if (!data.toString().includes("could not get all the students!")) {
          this.setState({ students: data });
        }
        else {
          console.log('didnt inserted!');
        }
      })
      .catch(function (err) {
        alert(err);
      });
  }

  btnDeleteStudent = (studentId) => {

    fetch(url + `/${studentId}`,
      {
        method: 'DELETE', // 'GET', 'POST', 'PUT', 'DELETE', etc.
        headers: new Headers({
          // 'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
      }) // Call the fetch function passing the url of the API as a parameter
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          console.log(200);
          let newStudents = this.state.students.filter(stu => stu.ID !== studentId);
          console.log(newStudents);
          this.setState({
            students: newStudents
          });
        }
        else if (resp.status === 400) {
          console.log("BadRequest");
        }
        else {
          console.log("NotFound");
        }
      }
      ) // Transform the data into json
      .catch(function (err) {
        alert(err);
      });
  }

  btnEditStudent = (student) => { 
    this.props.history.push({
      pathname: '/editstudent/',
      state: { student   }
    });
  }

  render() {
    let students2Show = <h2>loading...</h2>;
    if (this.state.students.length !== 0) {
      students2Show = this.state.students.map(student => {
        return (
          <tr key={student.ID}>
            <th scope="row">{student.ID}</th>
            <td>{student.Name}</td>
            <td>{student.Email}</td>
            <td>{student.Password}</td>
            <td>{student.Grade}</td>
            <td>
              <IconButton aria-label="people" color="primary"
                onClick={()=> this.btnEditStudent(student)}>
                <EditTwoToneIcon />
              </IconButton>
              <IconButton aria-label="people" color="secondary"
                onClick={() => this.btnDeleteStudent(student.ID)}>
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </td>
          </tr>
        );
      });
    }

    return (
      <div>
        <h1>Students</h1>
        <div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Pass</th>
                <th scope="col">Grade</th>
                <th scope="col">Pass</th>
              </tr>
            </thead>
            <tbody>
              {students2Show}
            </tbody>
          </table>

        </div>

        <br />
        <Fab color="primary" aria-label="add" onClick={() => {
          this.props.history.push({
            pathname: '/addstudent/'
          });
        }}>
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

export default withRouter(Students);
