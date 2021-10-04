import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import './TabelaExtrato.css'
import axios from 'axios'

export default class TabelaExtrato extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transacoes: [],
            saldo: []
        }
    }

    componentDidMount() {
        const login = document.cookie.slice(document.cookie.indexOf('=')+1)
        axios.get('http://localhost:3030/saldo/' + login)
            .then(res => {
                const saldo = res.data;
                this.setState({ saldo });
            })

        axios.get('http://localhost:3030/extrato/' + login)
            .then(res => {
                const transacoes = res.data;
                this.setState({ transacoes });
            })
    }

    render() {
        return (
            <Container fluid className="w-50 d-flex flex-column justify-content-center">
                <Table striped bordered hover className="m-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Destinatário</th>
                            <th>Data</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3" className="anterior">Saldo anterior</td>
                            <td>R$ 100.00</td>
                        </tr>
                        { this.state.transacoes.map(transacao =>
                            <tr>
                                <td>{transacao.id_transacao}</td>
                                <td>{transacao.login_destino}</td>
                                <td>{transacao.data}</td>
                                <td>{'R$ ' + transacao.valor_transferido}</td>
                            </tr>) }
                        <tr>
                            <td colSpan="3" className="atual">Saldo atual</td>
                            <td>{ 'R$ ' + this.state.saldo.saldo}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}