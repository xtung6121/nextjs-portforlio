'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}
const CreateModal = (props: IProps) => {

    const { showModalCreate, setShowModalCreate } = props;
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleClickSave = () => {
        toast.warning(`form check warning`)
        console.log('check data', title, author, content)
    }
    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModalCreate(false);
    }
    return (
        <div>
            <Modal
                show={showModalCreate}
                onHide={(() => {
                    handleCloseModal()
                })}
                backdrop="static" // chỉ khi bấm vào dấu X thì mới thoát cửa sổ, còn lại bấm vào bất cứ đâu trên màn hình đều không thể tự thoát cửa sổ modal
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new a blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Create Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleCloseModal()
                    }}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => {
                            handleClickSave()
                        }}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateModal;