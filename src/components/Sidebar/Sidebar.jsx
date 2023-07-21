import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    return (

        <div>

            <Nav defaultActiveKey="#notas" className="flex-column">
                <Nav.Link as={Link} to="/" className="sidebar-link">
                    Notas
                </Nav.Link>
                <Nav.Link as={Link} to="/recordatorios" className="sidebar-link">
                    Recordatorios
                </Nav.Link>
                <Nav.Link as={Link} to="/editar-etiquetas" className="sidebar-link">
                    Editar tags
                </Nav.Link>
                <Nav.Link as={Link} to="/archivadas" className="sidebar-link">
                    Notas archivadas
                </Nav.Link>
                <Nav.Link as={Link} to="/papelera" className="sidebar-link">
                    Papelera
                </Nav.Link>
            </Nav>

        </div>
    );
};

export default Sidebar
