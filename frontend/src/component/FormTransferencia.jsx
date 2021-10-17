import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './FormTransferencia.css'
import axios from 'axios'

export default class FormTransferencia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            valor: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const transacao = {
            usuario: this.state.usuario,
            valor: this.state.valor
        };
        console.log(transacao)

        const login = document.cookie.slice(document.cookie.indexOf('=')+1)

        axios.post(`http://localhost:3030/movimentacao`, { 
            login_origem: login,
            login_destino: transacao.usuario,
            valor_transferido: transacao.valor
         })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Sucesso!')
            })
    }

    render() {
        return (
            <Container fluid className="w-50 d-flex flex-column justify-content-center">
                <Form className="form m-5 p-4" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuário que vai receber a transferência</Form.Label>
                        <Form.Control type="text" name="usuario" onChange={this.handleChange}
                            placeholder="Usuário que vai receber a transferência" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Valor da transferência</Form.Label>
                        <Form.Control type="number" name="valor" onChange={this.handleChange}
                            placeholder="Valor da transferência" />
                    </Form.Group>
                    <Form.Group className="d-flex flex-row justify-content-center">
                        <Button variant="primary" type="submit" >
                            Realizar transferência
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}