import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './Menu.css'

export default class Menu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="navigation">
        <Navbar.Brand><Link to="/extrato" className="link">Carteira Virtual</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/extrato" className="link">Extato</Link>
            <Link to="/transferencia" className="link">Transferência</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}