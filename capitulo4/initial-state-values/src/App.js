// App es una componente funcional
// con un retorno de un JSX
// TAMBIEN es una componente STATEFUL, gracias al HOOK useState()
// aqui se inicializan 2 piezas de estado: name & age, hay 2 llamadas a useState()

// MEJOR PRACTICA ==> tener useState() para cada valor
// se podria tener un objeto unico con 1 solo useState, pero
// estos complicaria las cosas xq debemos acceder a los valores de estado a traves
// de un objeto, y no directamente, lo mismo que la actualizacion de estos valores
import React, { Fragment, useState } from 'react';

export default function App() {
  const [name] = useState('Adam');
  const [age] = useState(35);

  return (
    <Fragment>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </Fragment>
  );
}
