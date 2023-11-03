import { Row } from 'react-bootstrap';
import './WellcomePage.css';
import LoginForm from '../../components/Users/LoginForm/LoginForm';

const WellcomePage = () => {
    return (

        <main className='wellcome-page'>

            <div className='wellcome-page-container'>

                <Row className='m-3'>
                    <LoginForm />
                </Row>
                <hr />
                <Row className='m-3'>
                    <h5>No tienes cuenta? Regístrate</h5>
                </Row>

            </div>

        </main>
    );
}

export default WellcomePage;
