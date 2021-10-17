import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './FormLogin.css' 
import axios from 'axios'

export default class FormLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            usuario: '',
            senha: ''
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

        const dados = {
            usuario: this.state.usuario,
            senha: this.state.senha
        };

        axios.post('http://localhost:3030/session', { 
            login: dados.usuario,
            senha: dados.senha
         })
            .then(res => {
                console.log(res);
                console.log(res.data);
                document.cookie="login="+dados.usuario
                window.location = '/extrato'
            })
    }

    render() {
        return (
            <Form className="form m-5 p-4" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="text" placeholder="Usuário" name="usuario"
                        onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" name="senha"
                        onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Text className="text-muted">
                        Não tem cadastro? <Link to="registro">Registre-se aqui.</Link>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="d-flex flex-row justify-content-center">
                    <Button variant="primary" type="submit" >
                        Entrar
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}