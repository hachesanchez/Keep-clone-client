import { useState } from 'react'
import './NoteCard.css'
import { Card } from 'react-bootstrap'

const NoteCard = ({ title, body }) => {

    return (
        <Card className='p-1 mb-3'>
            <Card.Title className='p-3'>
                <h3 className='card-title'>{title}</h3>
            </Card.Title>
            <Card.Text>
                <p className='card-body'>{body}</p>
            </Card.Text>
        </Card>
    )
}

export default NoteCard
