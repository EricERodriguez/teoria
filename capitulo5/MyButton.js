import React, { Component } from "react";
import reverse from "./reverse";
// 1er ejemplo 1 handler Event
export default class MyButton extends Component {
  // declaramos el evento onClick como una funcion
  onClick() {
    console.log("clicked");
  }

  render() {
    // el 1er button, llamamos al evento con {this.onClick}
    // el 2do button tiene una declaracion INLINE de event handler
    // el principal uso, es cuando tenemos un valor estatito de parametro, 
    // y se lo pasamos a otra funcion
    return <div><button onClick={this.onClick}>{this.props.children}</button>
                <button onClick={e => console.log("clicked", e)}>
                {this.props.children}
      </button></div>
    ;
  }
}
// 2do ejemplo MULTIPLES handlers Event
// solo un clase default por archivo
export  class MyInput extends Component {
  // declaramos multiples eventos
  onChange() {
    console.log("changed");
  }

  onBlur() {
    console.log("blured");
  }

  render() {
    return <input onChange={this.onChange} onBlur={this.onBlur} />;
  }
}

// 3er ejemplo IMPORT de un  handler Event GENERICO
export  class MyList extends Component {
  state = {
    items: ["Angular", "Ember", "React"]
  };

  onReverseClick = reverse.bind(this);

  render() {
    const {
      state: { items },
      onReverseClick
    } = this;

    return (
      <section>
        <button onClick={onReverseClick}>Reverse</button>
        <ul>
          {items.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}

//4TO ejemplo, GETTING COMPONENT DATA
// usamos bind() para enlazar el contexto con los valores de arguntos de las
// funciones de manejo de eventos
export  class MyList2 extends Component {
  constructor() {
    super();
    // aqui en uso el bind()
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    const { name } = this.props.items.find(i => i.id === id);
    console.log("clicked", `"${name}"`);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(({ id, name }) => (
          <li key={id} onClick={this.onClick.bind(null, id)}>
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
