import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import './LoginForm.css'
import authService from "../../../services/auth.services"

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                console.log('respuestaaaa', data)
                console.log('logindata', loginData)
                // storeToken(data.authToken)
                // authenticateUser()
                navigate('/inicio')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const { email, password } = loginData
    // const { authenticateUser, storeToken } = useContext(AuthContext)


    return (

        <>
            <div className="form-container">

                <Form onSubmit={handleSubmit} className="custom-form">

                    <Form.Group className="m-2">
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="email"
                            name="email">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="m-2">
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={handleInputChange}
                            placeholder='password'
                            name="password">
                        </Form.Control>
                    </Form.Group>

                    <div className="d-grid m-2">
                        <Button variant='link' className="button-login" type="submit">entra</Button>
                    </div>

                </Form>

            </div>
        </>
    )
}

export default LoginForm