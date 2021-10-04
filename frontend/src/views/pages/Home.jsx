import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Menu from '../../component/Menu'
import Footer from '../../component/Footer'

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Menu></Menu>
                <Footer></Footer>
            </Container>
        )
    }
}