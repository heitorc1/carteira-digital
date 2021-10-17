import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import FormLogin from '../../component/FormLogin';

export default class Login extends Component {
    render() {
        return (
            <Container fluid className="w-50 d-flex flex-column justify-content-center">
                <FormLogin></FormLogin>
            </Container>
        )
    }
}