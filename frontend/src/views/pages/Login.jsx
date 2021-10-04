import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <Container fluid className="w-50 d-flex flex-column justify-content-center">
                <Form className="form m-5 p-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="email" placeholder="Usuário" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Mantenha-me conectado" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text className="text-muted">
                            Não tem cadastro? <Link to="registro">Registre-se aqui.</Link>
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