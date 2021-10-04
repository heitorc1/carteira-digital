import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Menu from '../../component/Menu'
import Footer from '../../component/Footer'
import TabelaExtrato from '../../component/TabelaExtrato'

export default class Extrato extends Component {
    render() {
        return (
            <Container fluid>
                <Menu></Menu>
                <TabelaExtrato></TabelaExtrato>
                <Footer></Footer>
            </Container>
        )
    }
}