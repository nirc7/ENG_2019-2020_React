import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './PAGES/Login';
import Home from './PAGES/Home';
import Students from './PAGES/Students';
import AddStudent from './PAGES/AddStudent';
import EditStudent from './PAGES/EditStudent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" >
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
            <Route path="/addstudent">
              <AddStudent/>
            </Route>
            <Route path="/editstudent">
              <EditStudent/>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
