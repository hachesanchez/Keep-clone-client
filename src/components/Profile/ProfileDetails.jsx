import fakeAvatar from '../../assets/images/H_perfil_BAJA-54.jpg'
import { Row, Col } from "react-bootstrap"

import './ProfileDetails.css'
import React from 'react'


const ProfileDetails = () => {

    return (

        <>
            <Row className='profile-container'>
                <Col>
                    <img src={fakeAvatar} className='profile-avatar' />
                </Col>
                <Col>
                    <p>First name: </p>
                    <p>Last name: </p>
                    <p>Email: </p>
                </Col>
            </Row>
        </>
    )
}

export default ProfileDetails