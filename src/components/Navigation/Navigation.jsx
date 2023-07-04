import './Navigation.css'
import Nav from 'react-bootstrap/Nav'
import { Navbar, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'
import keepLogo from '../../assets/images/keep_logo.png'
import searchIcon from '../../assets/images/icons8-search-50.png'


const Navigation = () => {

    return (

        <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
            <Navbar.Brand className='logo' href="/home">
                <Link to="/inicio"  >
                    <img
                        src={keepLogo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Keep logo"
                    />
                </Link>

            </Navbar.Brand>
            <Navbar.Brand as="span">
                <Link to="/inicio" className='brand' activeClassName="active">Keep-clone</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Form className="search-bar d-flex align-items-center">
                        <img
                            src={searchIcon}
                            width="20"
                            height="20"
                            className="d-inline-block search-icon"
                            alt="Keep logo"
                        />
                        <Form.Control
                            type="search"
                            placeholder="Busca lo que quieras"
                            className="search-form"
                            aria-label="Search"
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}



export default Navigation