import React from 'react';
import { withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

function PersonsList(props) {

  let persons = [];
  if (localStorage['persons'] !== undefined)
    persons = JSON.parse(localStorage['persons']);

  //debugger;
  persons = [...persons, props.location.state.userObj];

  localStorage['persons'] = JSON.stringify(persons);

  const output = persons.map((per) =>
    <Alert variant="filled" severity="success" key={per.userId}
      style={{
        margin: 5,
      }}>ID: {per.userId} NAME: {per.userName}</Alert>
  );

  return (
    <div style={{
      margin: 20
    }}>
      PERSONS LIST:
      <div style={{
        display: 'flex', flexDirection: 'row',
        width: 500,
        border: 'solid black 2px',
        justifyContent: 'space-evenly'
      }}>
        {output}
      </div>
    </div>
  )
}

export default withRouter(PersonsList);
