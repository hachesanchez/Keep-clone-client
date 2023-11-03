import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import notesIcon from '../../assets/images/icons8-light-32.png'
import binIcon from '../../assets/images/icons8-bin-32.png'
import editIcon from '../../assets/images/icons8-edit-32.png'
import reminderIcon from '../../assets/images/icons8-notification-32.png'
import archiveIcon from '../../assets/images/icons8-folder-32.png'
//import tagIcon from '../../assets/images/icons8-tag-32.png'
import './Sidebar.css'


const Sidebar = () => {

    return (

        <div className=''>

            <Row className='sidebar-box'>
                <Col className='sidebar-entries' >
                    <NavLink to="/" className="sidebar-link" activeclassname='active'>
                        <img className='sidebar-icons' src={notesIcon} alt='Notes Icon' />
                        Notas
                    </NavLink>
                </Col>
            </Row>
            <Row className='sidebar-box'>
                <Col className='sidebar-entries'>
                    <NavLink to="/recordatorios" className="sidebar-link" activeclassname='active'>
                        <img className='sidebar-icons' src={reminderIcon} alt='Reminder Icon' />
                        Recordatorios
                    </NavLink>
                </Col>
            </Row>
            <Row className='sidebar-box'>
                <Col className='sidebar-entries'>
                    <NavLink to="/editar-etiquetas" className="sidebar-link" activeclassname='active'>
                        <img className='sidebar-icons' src={editIcon} alt='Tag Icon' />
                        Editar tags
                    </NavLink>
                </Col>
            </Row>
            <Row className='sidebar-box'>
                <Col className='sidebar-entries'>
                    <NavLink to="/archivadas" className="sidebar-link" activeclassname='active'>
                        <img className='sidebar-icons' src={archiveIcon} alt='Archive icon' />
                        Notas archivadas
                    </NavLink>
                </Col>
            </Row>
            <Row className='sidebar-box'>
                <Col className='sidebar-entries'>
                    <NavLink as={Link} to="/papelera" className="sidebar-link" activeclassname='active'>
                        <img className='sidebar-icons' src={binIcon} alt='Bin Icon' />
                        Papelera
                    </NavLink>
                </Col>
            </Row>

        </div>

    )
}

export default Sidebar
