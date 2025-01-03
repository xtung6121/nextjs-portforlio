'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from "swr"
interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}

const CreateModal = (props: IProps) => {

    const { showModalCreate, setShowModalCreate } = props;
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = () => {
        if (!title) {
            toast.error("title is not empty");
            return
        }
        if (!author) {
            toast.error("author is not empty");
            return
        }
        if (!content) {
            toast.error("content is not empty");
            return
        }
        fetch("http://localhost:8000/blogs",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ title, author, content })
            })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success('Create new blog succeed!');
                    handleCloseModal();
                    mutate("http://localhost:8000/blogs");
                }
            })
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
                            handleSubmit()
                        }}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateModal;