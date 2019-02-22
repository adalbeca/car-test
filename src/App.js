import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Container, Row, Col } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
                <Header/>
                <Body/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
