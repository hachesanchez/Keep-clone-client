import './NoteDetails.css'
import { Card } from 'react-bootstrap'


const NoteDetails = ({ ...note }) => {

    return (
        <div>
            <h3 className='note-title-modal'>{note.title}</h3>
            <p>{note.body}</p>
        </div>
    )
}


export default NoteDetails