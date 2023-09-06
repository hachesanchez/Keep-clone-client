import { useEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import notesService from "../../services/notes.services"
import NoteCard from "../../components/Notes/NoteCard/NoteCard"
import Masonry from "react-masonry-css"
import "./NotesListPage.css"


const NotesListPage = ({ notes, setNotes, searchTerm }) => {


    const [filteredNotes, setFileteredNotes] = useState([])


    useEffect(() => {
        loadNotes()
    }, [])


    useEffect(() => {
        filteredNotesBySearchTerm(searchTerm)
    }, [searchTerm, notes])


    const updateEditedNoteInList = (updatedNoteData) => {
        const updatedNotes = notes.map(note => note._id === updatedNoteData._id ? updatedNoteData : note)
        setNotes(updatedNotes)
    }


    const loadNotes = () => {
        notesService
            .getAllNotes()
            .then(({ data }) => {
                setFileteredNotes(data)
                setNotes(data)
            })
            .catch((err) => console.log(err))
    }


    const deleteNote = (id) => {
        notesService
            .deleteNote(id)
            .then(() => {
                const updatedNotes = notes.filter((note) => note._id !== id)
                setNotes(updatedNotes)
            })
            .catch((err) => console.log(err))
    }


    const filteredNotesBySearchTerm = (query) => {
        const filteredNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)
        )
        setFileteredNotes(filteredNotes)

    }

    return (

        <div>
            <Row className="my-masonry-grid">
                {
                    filteredNotes.map((elm) => (
                        <Col key={elm._id} lg={3} md={4} sm={6} xs={12} className="my-masonry-grid_item">
                            <NoteCard {...elm} deleteNote={deleteNote} updateEditedNoteInList={updateEditedNoteInList} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default NotesListPage
