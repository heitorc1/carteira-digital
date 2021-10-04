import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import FormRegistro from '../../component/FormRegistro'

export default class Registro extends Component {
    render() {
        return (
            <Container fluid className="w-50 d-flex flex-column justify-content-center">
                <FormRegistro></FormRegistro>
            </Container>
        )
    }
}