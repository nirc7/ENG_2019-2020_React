import React from 'react';
import './App.css';

//ELEMENT!!!
const Header = <h1>my header</h1>

//functional component!!!
function Student(props) {
  //props.name="stam"; ERROR IMMUTABLE!
  let number = 0;

  function btnClicked() {
    alert(number);
  }

  function txtChenged(e) {
    number = e.target.value;
    console.log(number);
  }

  return (
    <div className="container">
      <h3>hello my name is {props.name} </h3>
      <h4>and i am a student</h4>
      <h4>and i am {props.age} old</h4>
      <button onClick={btnClicked} className="btn btn-danger" >show number</button> <br />
      <input type="text" placeholder="insert your number" onChange={txtChenged} /> <br />
      {number}
    </div >);
}

function Dotan(props) {
  return (
    <div>Dotan!  {props.name}</div>
  );
}

class StudentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'charlie',
      age: 21
    };
    this.number = 0; //field variable
    let stam = 1; //local variable
  }

  txtChenged = (e) => {
    this.number = e.target.value;
    console.log(this.number);
  }

  btnClicked = () => {
    alert(this.number);
  }

  btnAdd2AgeClicked = () => {
    //this.state.age++; //error

    //opt1 
    //when we DONT HAVE any dependency on the prev state
    // this.setState({
    //   age: 7
    // });

    //not good enough when depending on the prev state!!!
    // this.setState({
    //   age: this.state.age+1
    // });

    //opt2
    //when we HAVE a dependency on the prev state
    this.setState((prevState) =>
      ({
        age: prevState.age + 1
      }));

  }

  render() {
    return (
      <div>
        <h2>class component</h2>
        <h3>name={this.state.name}</h3>
        <h3>age={this.state.age}</h3>
        <button onClick={this.btnClicked} className="btn btn-success" >show number</button> <br />
        <button onClick={() => alert(3)} className="btn btn-success" >alert3</button> <br />
        <input type="text" placeholder="insert your number" onChange={this.txtChenged} /><br />
        {this.number}<br />
        <button onClick={this.btnAdd2AgeClicked} className="btn btn-warning" >add to age</button> <br />
        {this.state.age}
      </div>
    );
  }
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        {Header}
        <div className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <Student name="avi" age={21} />
        <Dotan name="benny" /> <br />
        <StudentClass />
      </header>
    </div>
  );
}





export default App;
