import React, { useContext } from 'react'
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import keepLogo from '../../assets/images/keep_logo.png'
import searchIcon from '../../assets/images/icons8-search-50.png'
import { AuthContext } from '../../contexts/AuthContex'
import './Navigation.css'


const Navigation = ({ setSearchTerm, searchTerm }) => {

    const handleInputValue = (e) => {
        const { value } = e.target
        setSearchTerm(value)
    }

    const { user, logout } = useContext(AuthContext)


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
                    <Form className="search-bar d-flex align-items-center"  >
                        <img src={searchIcon} width="20" height="20" className="d-inline-block search-icon" alt="Search icon" />
                        <Form.Control
                            type="search"
                            placeholder="Busca lo que quieras"
                            className="search-form"
                            aria-label="text"
                            value={searchTerm}
                            onChange={handleInputValue}
                        />
                    </Form>
                </Nav>
            </Navbar.Collapse>

            {
                user ? (
                    console.log('HAY UN USER', true)
                ) : (
                    console.log('NO HAY USER', false)
                )
            }

            {
                user
                    ?
                    <>
                        <Navbar.Brand as={Link} to="/perfil">
                            <img src={user?.avatar} alt="avatar" width="40" height="40" className="nav-avatar rounded-circle" />
                        </Navbar.Brand>
                        <NavDropdown title=" " id="navbarScrollingDropdown">
                            <NavDropdown.Item
                                as={Link}
                                to={`/editar/${user?._id}`}
                                className="dropdown-item"
                            >   Editar perfil
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={logout}
                                className="dropdown-item"
                            >  Cerrar sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                    </>
                    :
                    <>
                        <Nav className=" ">
                            <Nav.Link as={Link} to="/acceder">
                                Iniciar sesión
                            </Nav.Link>
                        </Nav>
                    </>

            }


            {/* <Nav className="custom-nav">
                <NavDropdown className="nav-profile" title="" id="basic-nav-dropdown">
                    <NavDropdown.Item
                        as={Link}
                        to={`/editar/${user?._id}`}
                        className="dropdown-item"
                    >   Editar perfil
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={logout}
                        className="dropdown-item"
                    >  Cerrar sesión
                    </NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand as={Link} to="/perfil">
                    <img src={user?.avatar} alt="avatar" width="40" height="40" className="nav-avatar rounded-circle" />
                </Navbar.Brand>
            </Nav> */}



        </Navbar>
    )
}

export default Navigation
