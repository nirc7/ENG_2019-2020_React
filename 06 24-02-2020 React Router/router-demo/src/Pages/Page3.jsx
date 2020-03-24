import React from 'react'

export default function Page3(props) {
  return (
    <div>
      <h1>PAGE3</h1>
      <h2>user id = {props.match.params.userId}</h2>
    </div>
  );
}
