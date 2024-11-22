'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { mutate } from "swr"

interface IProps {
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
    showModalEdit: boolean;
    setShowModalEdit: (value: boolean) => void;
}

const EditModal = (props: IProps) => {
    const [id, setId] = useState<Number>(0);
    const { showModalEdit, setShowModalEdit, blog, setBlog } = props;
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
    }, [blog])


    const handleSubmit = () => {
        if (!title) {
            toast.error("update is not empty!")
            return
        }
        if (!author) {
            toast.error("update is not empty!")
            return
        }
        if (!content) {
            toast.error("update is not empty!")
            return
        }
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("changed success!")
                    mutate("http://localhost:8000/blogs")
                    handleCloseModal()
                }
            }
            )
    }
    const handleCloseModal = () => {
        setShowModalEdit(false);

    }
    return (
        <div>
            <Modal
                show={showModalEdit}
                onHide={(() => {
                    handleCloseModal()
                })}
                backdrop="static" // chỉ khi bấm vào dấu X thì mới thoát cửa sổ, còn lại bấm vào bất cứ đâu trên màn hình đều không thể tự thoát cửa sổ modal
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Update Title</Form.Label>
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
                        }}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditModal;