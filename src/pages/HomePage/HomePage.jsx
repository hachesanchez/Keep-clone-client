import { Container, Row, Col } from "react-bootstrap"
import "./HomePage.css"
import NotesListPage from "../NotesListPage/NotesListPage"
import Sidebar from "../../components/Sidebar/Sidebar"
import NewNotePage from "../NewNotePage/NewNotePage"


const HomePage = () => {


    return (

        <Container>
            <Row className="p-3">
                <NewNotePage />
            </Row>
            <Row className="">
                <Col md={2} >
                    <Sidebar />
                </Col>
                <Col md={9} sm={12} className="offset-md-1">
                    <NotesListPage />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
