import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PersonsList from './Pages/PersonsList';
import AddPerson from './Pages/AddPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Header}
        <Switch>
          <Route exact path="/" >
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3/:userId" component={Page3} />
          <Route path="/personsList">
            <PersonsList />
          </Route>
          <Route path="/addPerson">
            <AddPerson />
          </Route>
        </Switch>
      </header>
      <div className="footer">
        {Footer}
      </div>
    </div>
  );
}

export default App;
