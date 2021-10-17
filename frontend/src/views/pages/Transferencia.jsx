import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Menu from '../../component/Menu'
import Footer from '../../component/Footer'
import FormTransferencia from '../../component/FormTransferencia'

export default class Transferencia extends Component {
    render() {
        return (
            <Container fluid>
                <Menu></Menu>
                <FormTransferencia></FormTransferencia>
                <Footer></Footer>
            </Container>
        )
    }
}