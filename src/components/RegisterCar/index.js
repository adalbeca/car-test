import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Form, Label, Input} from "reactstrap";

export default class RegisterCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            make:'',
            year:'',
            model:'',
            fuelType:'',
            trim:'',
            colors:'',
        };
    }

    handleChange = () => e => {
        this.setState({[e.target.name]: e.target.value});
    };

    sendData = (e) => {
        e.preventDefault();
        const payload = {
            'make': this.state.make,
            'year': this.state.year,
            'model': this.state.model,
            'fuelType': this.state.fuelType,
            'trim': this.state.trim,
            'colors': this.state.colors,
        };
        fetch(this.props.url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res=>res.json())
            .then(res => {
                this.props.handler();
                this.props.toggle();
                console.log(res)
            });
    };

    render() {
        const b_year = 1990;
        const a_year = new Date();
        const e_year = a_year.getFullYear();
        const fillRange = (b_year, e_year) => {
            return [...Array(e_year - b_year + 1)].map((item, index) => b_year + index);
        };
        const array_years = fillRange(b_year, e_year);
        return (
            <Modal size="lg" isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Add New Car</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="make">Make</Label>
                            <Input type="text" name="make" id="make" placeholder="Text a Make" onChange={this.handleChange()}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Year</Label>
                            <Input type="select" name="year" id="year" onChange={this.handleChange()}>
                            {
                                array_years.map((item, key) => {
                                    return (
                                        <option key={ array_years[key] }> { array_years[key] }</option>
                                            )
                                })
                            }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="model">Model</Label>
                            <Input type="text" name="model" id="model" placeholder="Text a Model" onChange={this.handleChange()} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="fuelType">fuelType</Label>
                            <Input type="text" name="fuelType" id="fuelType" placeholder="Text a fuelType"  onChange={this.handleChange()}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="trim">Trim</Label>
                            <Input type="text" name="trim" id="trim" placeholder="Text a trim" onChange={this.handleChange()} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="colors">Colors</Label>
                            <Input type="text" name="colors" id="colors" placeholder="Text a colors" onChange={this.handleChange()}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.sendData}>Save </Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}