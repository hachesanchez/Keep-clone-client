import React, { useState } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import keepLogo from '../../assets/images/keep_logo.png'
import searchIcon from '../../assets/images/icons8-search-50.png'
import './Navigation.css'


const Navigation = () => {

    // const [searchTerm, setSearchTerm] = useState('')

    // const handleSearchChange = (e) => {
    //     const inputValue = e.target.value
    //     setSearchTerm(inputValue)
    //     filterNotesBySearchTerm(inputValue)

    // }

    return (

        <Navbar expand="lg" className="bg-body-tertiary mb-5" fixed="top">

            <Navbar.Brand className="logo">
                <Link to="/">
                    <img src={keepLogo} width="40" height="40" className="d-inline-block align-top" alt="Keep logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Brand as={Link} to="/" className="brand">
                Keep-clone
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Form className="search-bar d-flex align-items-center">
                        <img src={searchIcon} width="20" height="20" className="d-inline-block search-icon" alt="Search icon" />
                        <Form.Control
                            type="search"
                            placeholder="Busca lo que quieras"
                            className="search-form"
                            aria-label="Search"
                        // value={searchTerm}
                        // onChange={handleSearchChange}
                        />
                    </Form>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Navigation
