'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { mutate } from "swr"

interface IProps {
    showModalDelete: boolean;
    setShowModalDetele: (value: boolean) => void;
}

const DeleteModal = (props: IProps) => {

    const [blog, setBlog] = useState<IBlog | null>(null);
    const { showModalDelete, setShowModalDetele } = props;

    const handleSubmit = (id: number) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Delete blog success!")
                    mutate("http://localhost:8000/blogs")
                    handleCloseModal()
                }
            })
    }
    const handleCloseModal = () => {
        setShowModalDetele(false);

    }
    return (
        <div>
            <Modal
                show={showModalDelete}
                onHide={() => {
                    handleCloseModal()
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this blog?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleCloseModal()
                    }}>
                        Close
                    </Button>
                    <Button variant="danger"
                        onClick={() => {
                            blog && handleSubmit(blog.id)
                        }}>Delete
                    </Button>


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteModal;