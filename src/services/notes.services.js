import axios from "axios";

class NoteService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/note`
        })
    }

    getAllNotes() {
        return this.api.get('/getAllNotes')
    }
}

const notesService = new NoteService
export default notesService