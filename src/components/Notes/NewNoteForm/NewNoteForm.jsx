import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import "./NewNoteForm.css"
import notesService from "../../../services/notes.services"


const NewNoteForm = ({ updateNotes }) => {

    const [noteData, setNoteData] = useState({
        title: '',
        body: ''
    })

    const [isExpanded, setIsExpanded] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setNoteData({ ...noteData, [name]: value })
    }

    const handleddANoteClick = e => {
        setIsExpanded(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (noteData.title.trim() === "" && noteData.body.trim() === "") {
            alert("Los campos de título y nota no pueden estar vacíos.")
            return
        }

        notesService
            .saveNote(noteData)
            .then(({ data }) => {
                setNoteData({ title: "", body: "" })
                updateNotes(data)
            })
            .catch((err) => console.log(err))
    }

    // const handleKeyPress = e => {
    //     e.key === 'Enter' &&
    //         handleSubmit()
    // }


    return (

        <div className="new-note-container mb-4">

            <Form className="new-note-form" onSubmit={handleSubmit}>

                {isExpanded && (

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Control
                            type="text"
                            name="title"
                            className="note-title"
                            placeholder="Título"
                            value={noteData.title}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                )}

                <Form.Group className="mb-3" controlId="body">
                    <Form.Control
                        as="textarea"
                        name="body"
                        className="note-body"
                        placeholder="Añade una nota..."
                        value={noteData.body}
                        onChange={handleInputChange}
                        onClick={handleddANoteClick}
                    // onKeyDown={handleKeyPress}
                    />
                </Form.Group>

                <div className="flex">
                    <Button variant="dark mt-4 " type="submit">Añadir</Button>
                </div>

            </Form>
        </div>
    )
}

export default NewNoteForm
