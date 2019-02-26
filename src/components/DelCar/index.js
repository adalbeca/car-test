import React from 'react';

export default class DelCar extends React.Component {

    deleteCar = (id) => {
        this.props.handleDelete(id);
    };

    render() {
        return (
            <span className="mr-1 trash-icon icon-crud" onClick={() => this.deleteCar(this.props.id)}/>
        )
    }
}