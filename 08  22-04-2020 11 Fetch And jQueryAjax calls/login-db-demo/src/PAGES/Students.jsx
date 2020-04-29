import React from 'react';
import { withRouter } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function Students(props) {
  return (
    <div>
      <h1>Students... </h1>
      <br />
      <Fab color="primary" aria-label="add" onClick={() => {
        props.history.push({
          pathname: '/addstudent/'
        });
      }}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default withRouter(Students);
