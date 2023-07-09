import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import notesService from "../../services/notes.services"
import NoteCard from "../../components/Notes/NotesList/NoteCard"
import "./NotesListPage.css"

const NotesListPage = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = () => {
        notesService
            .getAllNotes()
            .then(({ data }) => {
                setNotes(data)
                console.log("soy las notes--------", data)
            })
            .catch((err) => console.log(err))
    }

    return (

        <div>
            <Row className="my-masonry-grid">
                {
                    notes.map((elm) => (
                        <Col key={elm._id} lg={3} md={4} sm={6} xs={12} className="my-masonry-grid_item">
                            <NoteCard {...elm} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default NotesListPage
