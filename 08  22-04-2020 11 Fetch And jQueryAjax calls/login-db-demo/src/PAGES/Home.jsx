import React from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h1>HOME</h1>
            <h2>WELCOME {props.location.state.studentObj.Name}</h2>
            <h3>your id is {props.location.state.studentObj.ID}</h3>
            <h3>your password is {props.location.state.studentObj.Password}</h3>
            <h3>your email is {props.location.state.studentObj.Email}</h3>
            <h3>your garde is {props.location.state.studentObj.Grade}</h3>
        </div>
    )
}

export default withRouter(Home);