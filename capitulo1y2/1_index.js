import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { MySection } from './MySection';
import MyButton from './MyButton';
import MyComponent from './MyComponent';

//ejemplo de propiedades dinamicas
const enable = false;
const text = 'un boton';
const placeholder = 'input un valor...';
const size = 50;
// array maneja valor.... y posicion
const array = ['Primero', 'Segundo', 'Tercero'];

//object maneja el concepto de clave:valor
const object = {
  primero: 1,
  segundo: 2,
  Tercero: 3
};


render(
  <section>
    <h1>Array</h1>
    <ul>
      {array.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
    <h1>Object</h1>
    <ul>
      {Object.keys(object).map(i => (
        <li key={i}>
          <strong>
            {i}:
          </strong>
          {object[i]}
        </li>
      ))}
    </ul>



    <button disabled={enable}>{text}</button>
    <input placeholder={placeholder} size={size}/>

  </section>,
  document.getElementById("root")
);



// ejemplo de NameSpace
// render(
//   <MyComponent>
//     <MyComponent.First/>
//     <MyComponent.Second/>
//   </MyComponent>,
//   document.getElementById("root")
// );


//elemnto anidado (nested), estructura de padre/hijo
// render(
//   <MySection>
//     <MyButton>Mi botton</MyButton>
//   </MySection>,
//   document.getElementById("root")
// );


// Ejemplo con una clase que se renderiza en el mismo archivo
// class MyComponent extends Component{
//   render(){
//     return (
//       <section>
//         <h1>Secction</h1>
//         <p>El contenido principal es </p>
//       </section>
//     );
//   }
// }

// render( <MyComponent/>,
//   document.getElementById("root")
//   );


//Describiendo la estructura de nuestra UI
// render(
//   <section>
//     <header>
//       <h1>Un encabezado</h1>
//     </header>
//     <nav>
//       <a href="#">Nav Item</a>
//     </nav>
//     <main>
//       <p>El contenido principal es</p>
//     </main>
//     <small>2021</small>
//   </section>,
//   document.getElementById('root')
// )


// es sensible a las case sensitive, Siempre escribir los tags en minusculas
// render(
//   <div>
//     <button title='mi boton'>
//       Mi boton
//       </button>

//   </div>,
//   document.getElementById('root')
// )


// Uso de HTML tags nativos
// render(
//   <div>
//     <button/>
//     <input/>
//     <label/>
//   </div>,
//   document.getElementById('root')
// )



// Ejemplo de hola mundo

// render (
//   <p>
//     HOLA <strong>MUNDO</strong>
//   </p>,
//   document.getElementById('root')

// );




// Ejemplo vacio de inicio
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


reportWebVitals();
