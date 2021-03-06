import React from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Button
} from 'reactstrap';

export default class Body extends React.Component {
    state = {
        listData: [],
        url: "https://car-api-novatech.herokuapp.com/api/",
    };

    fetchData = () => {
        fetch(this.state.url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ listData: data.message })
            });
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { listData } = this.state;
        return (
            <Container fluid className="p-5">
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
                            <tbody>
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
                                                    <span className="mr-1 trash-icon icon-crud"/>
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