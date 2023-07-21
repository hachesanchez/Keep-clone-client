import { Container } from "react-bootstrap"
import "./NewNotePage.css"
import NewNoteForm from "../../components/Notes/NewNoteForm/NewNoteForm"


const NewNotePage = ({ updateNotes }) => {

    return (

        <div className="new-note-page-container">
            <NewNoteForm updateNotes={updateNotes} />
        </div>
    )

}

export default NewNotePage