import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import logo from '../../assets/react.png'
export default class Header extends React.Component {
    render() {
        return (
            <Row className="border-bottom height-50 align-items-center">
                <Container>
                    <Row>
                        <Col md="3">
                            <img src={logo} alt="logo" width="50px" />
                        </Col>
                        <Col md="9" className="align-items-center d-flex">
                            React - Car Test Api
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    }
}