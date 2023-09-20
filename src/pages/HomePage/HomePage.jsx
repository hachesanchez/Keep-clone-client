import { Row, Col, Container } from "react-bootstrap"
import NotesListPage from "../NotesListPage/NotesListPage"
import Sidebar from "../../components/Sidebar/Sidebar"
import NewNotePage from "../NewNotePage/NewNotePage"
import { useContext, useState } from "react"
import "./HomePage.css"


const HomePage = ({ searchTerm }) => {


    const [notes, setNotes] = useState([])

    const updateNotes = (newNote) => {
        setNotes([newNote, ...notes,])
    }

    return (

        <div>
            <Row className="">
                <Col md={2} sm={12} >
                    <Sidebar />
                </Col>
                <Col md={8} sm={12} className="offset-md-1">
                    <Container>
                        <Row className="p-3">
                            <NewNotePage updateNotes={updateNotes} />
                        </Row>
                        <Row>
                            <NotesListPage notes={notes} setNotes={setNotes} searchTerm={searchTerm} />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
