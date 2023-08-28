import { useState } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import notesService from '../../../services/notes.services'
import './NoteEditForm.css'


const NoteEditForm = ({ initialTitle, initialBody, noteId, updateEditedNoteInList }) => {


    const [editedData, setEditedData] = useState({
        title: initialTitle,
        body: initialBody
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEditedData({ ...editedData, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        notesService
            .editNote(noteId, editedData)
            .then((response) => {
                const updatedNote = {
                    _id: noteId,
                    title: editedData.title,
                    body: editedData.body
                }
                updateEditedNoteInList(updatedNote)
                console.log('Note edited successfully:', response.data)
            })
            .catch((err) => {
                console.error('Error editing note:', err)
            })
    }



    return (

        <div>
            <Form onSubmit={handleSubmit} className="edit-note-form">
                <Form.Group className="mb-3" controlId="title">
                    <Form.Control
                        type="text"
                        value={editedData.title}
                        onChange={handleInputChange}
                        name="title"
                        className='note-title'
                    />
                </Form.Group>
                <FormGroup className='mb-3' controlId='body'>
                    <FormControl
                        type='text'
                        value={editedData.body}
                        onChange={handleInputChange}
                        name="body"
                        className='note-body'
                    />
                </FormGroup>
                <button type="submit" style={{ display: 'none' }} />
            </Form>

        </div>
    )
}

export default NoteEditForm


