import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

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
                ID: <input type="text" onChange={this.txtID} />  {this.state && this.state.userId}<br />
                NAME: <input type="text" onChange={this.txtName} /> <br />
                <button onClick={this.btnAddPerson}>add person</button>
            </div>
        )
    }
}

export default withRouter(AddPerson);