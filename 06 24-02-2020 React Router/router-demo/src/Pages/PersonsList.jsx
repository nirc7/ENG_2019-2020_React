import React from 'react';
import { withRouter } from 'react-router-dom';

function PersonsList(props) {

  let persons = [];
  if (localStorage['persons'] !== undefined)
    persons = JSON.parse(localStorage['persons']);

  debugger;
  persons = [...persons, props.location.state.userObj];

  localStorage['persons'] = JSON.stringify(persons);

  const output = persons.map((per) =>
    <div key={per.userId} style={{ margin: 2 }}>ID: {per.userId} NAME: {per.userName}</div>
  );

  return (
    <div style={{ margin: 20 }}>
      PERSONS LIST:
      {output}
    </div>
  )
}

export default withRouter(PersonsList);
