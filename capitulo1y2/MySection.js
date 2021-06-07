import React, { Component } from 'react';

export class MySection extends Component{
    render(){
        return(
        <section>
            <h2> Mi seccion</h2>
            {this.props.children}
        </section>
        );
    }
}