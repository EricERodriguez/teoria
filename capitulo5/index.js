import React, { Fragment } from 'react';
import { render } from 'react-dom';
import App from './App';

import MyButton, { MyInput, MyList, MyList2 } from './MyButton';

// esta constante la usamo para MyList2, que toma DATA del componente
const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" }
];

render(
  <Fragment>
  <MyInput />
  <MyButton>Click Me</MyButton>
  <MyList />
  <MyList2 items={items} />
  <App />
  </Fragment>,
  document.getElementById('root')
);
