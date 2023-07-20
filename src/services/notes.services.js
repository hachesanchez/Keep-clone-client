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

    saveNote(noteData) {
        return this.api.post('/saveNote', noteData)
    }


}

const notesService = new NoteService()
export default notesService