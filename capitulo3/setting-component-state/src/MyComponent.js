import React, { Component } from 'react';

export default class MyComponent extends Component {
  state = {
    heading: 'React Awesomesauce (Busy)',
    content: 'Loading...'
  };
// 1era vez que seteamos el estado inicial
  render() {
    const { heading, content } = this.state;

    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
