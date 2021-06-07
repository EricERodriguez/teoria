import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

// el componente es renderizado con su estado predeterminado
const myComponent = render(<MyComponent />, document.getElementById('root'));

//actualizamos el estado, o sea la renderizamos x 2da vez, despues de 3 segundos
setTimeout(() => {
  myComponent.setState({
    heading: 'React Awesomesauce',
    content: 'Done!'
  });
}, 3000);
