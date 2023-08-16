import { useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import notesService from "../../services/notes.services"
import NoteCard from "../../components/Notes/NoteCard/NoteCard"
import "./NotesListPage.css"


const NotesListPage = ({ notes, setNotes }) => {



    useEffect(() => {
        loadNotes()
    }, [])


    // const updateNoteInList = (updatedNote) => {
    //     const updatedNotes = notes.map(note => note._id === updatedNote._id ? updatedNote : note)
    //     setNotes(updatedNotes)
    // }
    const updateNoteInList = (updatedNoteData) => {
        const updatedNotes = notes.map(note => note._id === updatedNoteData._id ? updatedNoteData : note);
        setNotes(updatedNotes);
    };


    const loadNotes = () => {
        notesService
            .getAllNotes()
            .then(({ data }) => {
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


    return (

        <div>
            <Row className="my-masonry-grid">
                {
                    notes.map((elm) => (
                        <Col key={elm._id} lg={3} md={4} sm={6} xs={12} className="my-masonry-grid_item">
                            <NoteCard {...elm} deleteNote={deleteNote} updateNoteInList={updateNoteInList} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default NotesListPage
