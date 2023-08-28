import React from 'react'
import { Col, Nav, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import notesIcon from '../../assets/images/icons8-light-32.png'
import binIcon from '../../assets/images/icons8-bin-32.png'
import editIcon from '../../assets/images/icons8-edit-32.png'
import tagIcon from '../../assets/images/icons8-tag-32.png'
import reminderIcon from '../../assets/images/icons8-notification-32.png'


const Sidebar = () => {

    return (

        <div>

            <Nav defaultActiveKey="#notas" className="">

                <div className='sidebar-box'>

                    <Row className='sidebar-box'>
                        <Col className='sidebar-entries'>
                            <Nav.Link as={Link} to="/" className="sidebar-link">
                                <img className='sidebar-icons' src={notesIcon} alt='Notes Icon' />
                                Notas
                            </Nav.Link>
                        </Col>
                    </Row>
                    <Row className='sidebar-box'>
                        <Col className='sidebar-entries'>
                            <Nav.Link as={Link} to="/recordatorios" className="sidebar-link">
                                <img className='sidebar-icons' src={reminderIcon} alt='Reminder Icon' />
                                Recordatorios
                            </Nav.Link>
                        </Col>
                    </Row>
                    <Row className='sidebar-box'>
                        <Col className='sidebar-entries'>
                            <img className='sidebar-icons' src={editIcon} alt='Tag Icon' />
                            <Nav.Link as={Link} to="/editar-etiquetas" className="sidebar-link">
                                Editar tags
                            </Nav.Link>
                        </Col>
                    </Row>
                    <Row className='sidebar-box'>
                        <Col className='sidebar-entries'>
                            <Nav.Link as={Link} to="/archivadas" className="sidebar-link">
                                Notas archivadas
                            </Nav.Link>
                        </Col>
                    </Row>
                    <Row className='sidebar-box'>
                        <Col className='sidebar-entries'>
                            <Nav.Link as={Link} to="/papelera" className="sidebar-link">
                                <img className='sidebar-icons' src={binIcon} alt='Bin Icon' />
                                Papelera
                            </Nav.Link>
                        </Col>
                    </Row>

                </div>

            </Nav>

        </div >
    )
}

export default Sidebar
