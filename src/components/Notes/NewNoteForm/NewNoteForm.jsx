import { Form } from "react-bootstrap"

const NewNoteForm = () => {

    return (

        <Form>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label className="title-label">Título</Form.Label>
                <Form.Control type="text" name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
                <Form.Label className="body-label">Añade una nota...</Form.Label>
                <Form.Control type="text" name="body" />
            </Form.Group>
        </Form>
    )
}

export default NewNoteForm