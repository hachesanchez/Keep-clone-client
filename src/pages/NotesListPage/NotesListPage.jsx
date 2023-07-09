import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import notesService from "../../services/notes.services"


const NotesListPage = () => {
    console.log('funciona algo?')

    const [notes, setNotes] = useState()

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = () => {
        notesService
            .getAllNotes()
            .then(({ data }) => {
                console.log('soy las notas------', data)
                // setNotes(data)
            })
            .catch(err => console.log(err))
    }



    return (
        <Container>
            Soy la página de notas
        </Container>
    )
}

export default NotesListPage