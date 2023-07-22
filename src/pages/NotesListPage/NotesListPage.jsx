import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import notesService from "../../services/notes.services"
import NoteCard from "../../components/Notes/NotesList/NoteCard"
import "./NotesListPage.css"
import { useParams } from "react-router-dom"

const NotesListPage = ({ notes, setNotes }) => {

    const [deletedNote, setDeletedNote] = useState()

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = () => {
        notesService
            .getAllNotes()
            .then(({ data }) => {
                setNotes(data)
            })
            .catch((err) => console.log(err))
    }

    const deleteNote = (id) => {
        console.log('Deleting note with id:', id);
        notesService
            .deleteNote(id)
            .then(() => {
                // Filtrar la nota eliminada de la lista de notas
                const updatedNotes = notes.filter((note) => note._id !== id);
                console.log('Updated notes after deletion:', updatedNotes);
                setNotes(updatedNotes); // Actualizar el estado con la nueva lista de notas después de la eliminación
            })
            .catch((err) => console.log(err));
    };


    return (

        <div>
            <Row className="my-masonry-grid">
                {
                    notes.map((elm) => (
                        <Col key={elm._id} lg={3} md={4} sm={6} xs={12} className="my-masonry-grid_item">
                            <NoteCard {...elm} deleteNote={deleteNote} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default NotesListPage
