import React, { Component } from 'react';

export default class MyComponent extends Component {
  state = {
    first: 'loading...',
    second: 'loading...',
    third: 'loading...',
    fourth: 'loading...',
    doneMessage: 'finished!'
  };

  render() {
    const { state } = this;

    return (
      <ul>
        {Object.keys(state)
          .filter(key => key !== 'doneMessage')
          .map(key => (
            <li key={key}>
              <strong>{key}: </strong>
              {state[key]}
            </li>
          ))}
      </ul>
    );
  }
}
// el 1er render() toma keys & values de state, EXCEPTO doneMessge .....
// para iterar usamos Object.keys() el cual devuelve un array de objects keys
// .filter() es usado para devolver un nuevo array de object keys pero sin el valor de "doneMessage"
// .map() para relacionar cada object key con un <li>
// para visualizar el valor y no la key, usamos state[key]