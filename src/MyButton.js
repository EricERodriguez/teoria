import React, { Component, Fragment } from 'react';
import reverse from './reverse';
//imrc o rcc

export default class MyButton extends Component {
onClick(){
    console.log("cliackeas");
}

onChange(){
    console.log("cambiado");
}

onBlur(){
    console.log("blureado");
}
    render() {
        return (
            <Fragment>
                <button onChange={this.onChange} onBlur={this.onBlur} onClick={this.onClick}>boton1</button>
                <button onClick={e => console.log("clickeado el 2do", e)}>boton1</button>
            </Fragment>
        );
    }
}

export class MyList extends Component{
    state={
        items: ['Angular','React','Vue']
    };

    onReverseClick=reverse.bind(this);
    render(){
        const{
        state: {items},
        onReverseClick
    } = this;


        return(
            <section>
                <button onClick={onReverseClick}>Reverse</button>
                <ul>
                    {items.map((v,i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
            </section>
        );
}
}

// getting component data
//usamos el bind() para enlazar el contexto con los valores de los argumentos de las funciones
//ccc 
export class MyList2 extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick(id){
        const {name} = this.props.items.find(i =>i.id === id);
        console.log("Clikeaste", `"${name}"`)
    }

    render() { 
        return (
            <ul>
                {this.props.items.map(({id, name}) => (
                        <li key={id} onClick={this.onClick.bind(null,id)}>{name}</li>
                    ))}
            </ul>
          );
    }
}
