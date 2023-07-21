import { useState } from 'react'
import './NoteCard.css'
import { Button, Card, Modal } from 'react-bootstrap'
import NoteDetails from '../NoteDetails/NoteDetails'

const NoteCard = ({ title, body }) => {

    const [showModal, setShowModal] = useState(false)

    const handleModalOpen = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <Card className='p-1 mb-3'>
                <Card.Title className='p-3'>
                    <h3 className='card-title'>{title}</h3>
                </Card.Title>
                <Card.Text>
                    <p className='card-body'>{body}</p>
                </Card.Text>
                <Button variant='btn-custom btn-details' size='sm' onClick={handleModalOpen} >Detalles</Button>
            </Card>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Body>
                        <NoteDetails title={title} body={body} />
                    </Modal.Body>

                </Modal.Header>

            </Modal>
        </>


    )
}

export default NoteCard
