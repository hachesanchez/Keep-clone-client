import { useState } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import notesService from '../../../services/notes.services'
import './NoteEditForm.css'


const NoteEditForm = ({ initialTitle, initialBody, noteId }) => {


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
                console.log('Note edited successfully:', response.data)
                // You might want to add a callback to update the UI or close the modal here
            })
            .catch((err) => {
                console.error('Error editing note:', err)
            })
    }



    return (

        <div>
            {/* <Form onSubmit={handleSubmit} className="edit-note-form">
                <Form.Group className="mb-3" controlId="title">
                    <Form.Control
                        type="text"
                        value={editedData.title}
                        onChange={handleInputChange}
                        name="title"
                    />
                </Form.Group>
                <FormGroup className='mb-3' controlId='body'>
                    <FormControl
                        type='text'
                        value={editedData.body}
                        onChange={handleInputChange}
                        name="body"
                    />
                </FormGroup>
                <button type="submit">Save Changes</button>
            </Form> */}



            <div>
                <div className="edit-note-form">
                    <input
                        type="text"
                        value={editedData.title}
                        onChange={handleInputChange}
                        name="title"
                        className="edit-note-input"
                    />
                    <textarea
                        value={editedData.body}
                        onChange={handleInputChange}
                        name="body"
                        className="edit-note-textarea"
                    />
                    <button onClick={handleSubmit} className="save-changes-button">
                        Save Changes
                    </button>
                </div>
            </div>

        </div>
    )
}

export default NoteEditForm


