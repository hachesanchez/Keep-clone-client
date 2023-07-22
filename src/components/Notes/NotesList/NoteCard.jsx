import { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import NoteDetails from '../NoteDetails/NoteDetails'
import deleteIcon from '../../../assets/images/icons8-bin-32.png'
import reminderIcon from '../../../assets/images/icons8-notification-32.png'
import './NoteCard.css'

const NoteCard = ({ _id, title, body, deleteNote }) => {

    const [showModal, setShowModal] = useState(false)

    const handleModalOpen = () => {
        setShowModal(true)
    }
    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <Card className='p-1 mb-3' onClick={handleModalOpen}>
                <Card.Title className='p-3'>
                    <h3 className='card-title'>{title}</h3>
                </Card.Title>
                <Card.Text>
                    <p className='card-body'>{body}</p>
                </Card.Text>
            </Card>

            <Modal
                show={showModal}
                onHide={handleModalClose}
                aria-labelledby='contained-modal-title-vcenter'
                centered
                dialogClassName='custom-modal'
            >
                <Modal.Body>
                    <NoteDetails
                        title={title}
                        body={body} />
                    <div className='note-icons'>
                        <Button variant='link'>
                            <img src={reminderIcon} alt='Reminder' className='reminder-icon' />
                        </Button>
                        <Button variant='link' onClick={() => deleteNote(_id)}>
                            <img src={deleteIcon} alt='Delete' className='delete-icon' />
                        </Button>
                        <Button className='close-modal-btn' variant='link' onClick={handleModalClose} >Cerrar</Button>
                    </div>
                </Modal.Body >

            </Modal >
        </>
    )
}

export default NoteCard
