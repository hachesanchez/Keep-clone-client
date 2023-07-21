import { useEffect, useState } from 'react'
import './NoteDetailsPage.css'
import notesService from '../services/notes.services'
import { useParams } from 'react-router-dom'
import NoteDetails from '../components/Notes/NoteDetails/NoteDetails'


const NoteDetailsPage = () => {

    const [note, setNote] = useState()
    const { id } = useParams()

    useEffect(() => {
        loadNote()
    }, [])

    const loadNote = () => {
        notesService
            .getOneNote(id)
            .then(({ data }) => {
                setNote(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            <NoteDetails note={note} />
        </div>
    )
}

export default NoteDetailsPage
