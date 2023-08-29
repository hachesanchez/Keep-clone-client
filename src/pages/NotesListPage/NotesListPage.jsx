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

    const filteredNotesBySearchTerm = (term) => {
        if (notes) {
            const filtered = notes.filter(
                (note) =>
                    note.title
                // (note.title && note.title.toLowerCase().includes(term.toLowerCase())) ||
                // (note.body && note.body.toLowerCase().includes(term.toLowerCase()))
            )
            console.log('las notes--------------', notes)
            console.log('las filtered--------------', filtered)
            setFileteredNotes(filtered);
        }
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
