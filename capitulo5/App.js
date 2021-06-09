import React, { Fragment, Component } from "react";

//ejmeplo de HIGHER-ORDER Event Handler
// funciones que devuelven funciones
// principal ventaja: no usamos el bind()
export default class App extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0
  };
// la funcion onClick esta automaticamente enlazada al contexto
// porque esta definida como una ARROW FUNCTION
// toma "name" como argumento, y lo devuelve en una nueva funcion dentro de los []
  onClick = name => () => {
    this.setState(state => ({
      ...state,
      [name]: state[name] + 1
    }));
  };

  render() {
    const { first, second, third } = this.state;

    return (
      <Fragment>
        <button onClick={this.onClick("first")}>First {first}</button>
        <button onClick={this.onClick("second")}>Second {second}</button>
        <button onClick={this.onClick("third")}>Third {third}</button>
      </Fragment>
    );
  }
}
