import { Container, Row, Col } from "react-bootstrap"
import NotesListPage from "../NotesListPage/NotesListPage"
import Sidebar from "../../components/Sidebar/Sidebar"
import NewNotePage from "../NewNotePage/NewNotePage"
import { useState } from "react"
import "./HomePage.css"


const HomePage = () => {

    const [notes, setNotes] = useState([])

    const updateNotes = (newNote) => {
        setNotes([newNote, ...notes,])
    }

    return (

        <Container>
            <Row className="">
                <Col md={4} sm={4} >
                    <Sidebar />
                </Col>
                <Col md={8} sm={12} className="offset-md-1">
                    <Row className="p-3">
                        <NewNotePage updateNotes={updateNotes} />
                    </Row>
                    <Row>
                        <NotesListPage notes={notes} setNotes={setNotes} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
