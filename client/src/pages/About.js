import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavBar from '../components/MyNav';

function About() {
    return (
        <Container>
        <Row>
            <Col>
                <MyNavBar/>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 3, offset: 5 }}>
                <MyNavBar/>
                <h3 style={{marginTop:'200px'}}>About</h3>
            </Col>
        </Row>
    </Container>
    )
}

export default About
