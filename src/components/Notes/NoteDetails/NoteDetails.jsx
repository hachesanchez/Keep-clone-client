import './NoteDetails.css'


const NoteDetails = ({ title, body, onClick }) => {


    return (

        <div className='note-modal' onClick={onClick}>
            <h3 className='note-title-modal'>{title}</h3>
            <p>{body}</p>
        </div>
    )
}


export default NoteDetails