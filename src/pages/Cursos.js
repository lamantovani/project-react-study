import React from 'react';

export default class Cursos extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Conheça nossos Cursos</h1>
                {this.props.children}
            </div>
        );
    }
}