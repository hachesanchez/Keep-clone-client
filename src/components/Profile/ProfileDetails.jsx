import { Row, Col } from "react-bootstrap"
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContex'
import './ProfileDetails.css'


const ProfileDetails = () => {

    const { user } = useContext(AuthContext)
    console.log(user)



    return (

        <>
            {user ? (
                <Row className='profile-container'>
                    <Col>
                        <img src={user.avatar} className='profile-avatar' alt="User Avatar" />
                    </Col>
                    <Col>
                        <p>First name: <strong> {user.firstName} </strong></p>
                        <p>Last name: <strong> {user.lastName} </strong></p>
                        <p>Email: <strong> {user.email} </strong></p>
                    </Col>
                </Row>
            ) : (
                <p>There's no user logged in ohhh</p>
            )}
        </>
    )
}

export default ProfileDetails