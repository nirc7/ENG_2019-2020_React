import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Page2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }

    render() {
        return (
            <div>
                <h1>PAGE2</h1>
                <h2>userId = {this.props.location.state !== undefined ?
                    this.props.location.state.userObj.userId :
                    'no user id'}</h2>
                <h2>userName = {this.props.location.state !== undefined ?
                    this.props.location.state.userObj.userName :
                    'no user name'}</h2>
            </div>
        )
    }
}

export default withRouter(Page2);


