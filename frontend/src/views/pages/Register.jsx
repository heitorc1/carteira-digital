import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Register.css'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <Container fluid className="w-50 d-flex flex-column justify-content-center">
                <Form className="form m-5 p-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Usuário" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text className="text-muted">
                            Já tem cadastro? <Link to="/">Faça o login aqui.</Link>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="d-flex flex-row justify-content-center">
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}