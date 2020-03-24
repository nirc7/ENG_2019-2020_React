import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin: 10
};

const Header =
    <div >
        <div style={mystyle}> hello Ruppin!</div>
        <Link className="linkStyle" to="/"> home </Link> |
         <Link className="linkStyle" to="/page2"> Page2 </Link> |
         <Link className="linkStyle" to="/page3/7"> Page3 </Link> |
         <Link className="linkStyle" to="/personsList"> Persons List </Link>
         <Link className="linkStyle" to="/addPerson"> Add Person </Link>
    </div>
export default Header;

