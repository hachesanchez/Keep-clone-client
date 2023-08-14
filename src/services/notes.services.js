import axios from "axios"

class NoteService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/note`
        })
    }

    getAllNotes() {
        return this.api.get('/getAllNotes')
    }

    getOneNote(noteId) {
        return this.api.get(`/getOneNote/${noteId}`)
    }

    saveNote(noteData) {
        return this.api.post('/saveNote', noteData)
    }

    editNote(noteId, noteData) {
        return this.api.put(`/editNote/${noteId}`, noteData)
    }

    deleteNote(noteId) {
        return this.api.delete(`/deleteNote/${noteId}`)
    }


}

const notesService = new NoteService()
export default notesService