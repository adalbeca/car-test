import React from 'react';
import DelCar from '../DelCar';
import {
    Container,
    Row,
    Col,
    Table, Button
} from 'reactstrap';
import Register from '../RegisterCar';

export default class Body extends React.Component {
    state = {
        listData: [],
        url: "https://car-api-novatech.herokuapp.com/api/",
        modal: false,
        isSubmitted:false,
    };

    fetchData = () => {
        fetch(this.state.url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({listData: data.message})
            });
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    handleSubmit = () => {
        this.setState(prevState => ({
            isSubmitted: !prevState.isSubmitted})
        )};

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if(this.state.isSubmitted){
            this.fetchData();
        }
        const {listData} = this.state;
        return (
            <Container fluid className="p-5">
                <Button color="danger" onClick={this.toggle} className="mb-3"> ADD CAR </Button>
                <Register modal={this.state.modal} toggle={this.toggle} url={ this.state.url } handler={ this.handleSubmit }/>
                <Row>
                    <Col>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>Make</th>
                                <th>Year</th>
                                <th>Model</th>
                                <th>FuelType</th>
                                <th>Trim</th>
                                <th>Color</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody >
                            {
                                listData.map(item => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.make}</td>
                                            <td>{item.year}</td>
                                            <td>{item.model}</td>
                                            <td>{item.fuelType}</td>
                                            <td>{item.trim}</td>
                                            <td>{item.colors}</td>
                                            <td>
                                                <div className="d-flex flex-row">
                                                    <span className="mr-1 edit-icon icon-crud"/>
                                                    <DelCar id={item._id}/>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }

}