import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import CreateModal from './create.modal';
import EditModal from './edit.modal';
import DeleteModal from './delete.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from "swr"

interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {
    const { blogs } = props;

    const [blog, setBlog] = useState<IBlog | null>(null);
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
    const [showModalDetele, setShowModalDetele] = useState<boolean>(false);

    const handleDelete = (id: number) => {
        if (confirm(`Are you sure want to delete a blog ? ${id} `) == true) {
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
                    }
                })
        }
    }

    return (
        <div>
            <div className='mb-3' style={{
                display: 'flex',
                justifyContent: "space-between",
            }}>
                <h2>Table Blogs</h2>
                <Button onClick={() => {
                    setShowModalCreate(true)
                }}>Add New</Button>
            </div>

            <Table striped bordered hover className='md'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Link className='btn btn-primary'
                                        href={`/blog/${blog.id}`} >View</Link>
                                    <Button
                                        className='mx-2'
                                        variant='warning'
                                        onClick={() => {
                                            setBlog(blog)
                                            setShowModalEdit(true)
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(blog.id)}
                                        variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <EditModal
                showModalEdit={showModalEdit}
                setShowModalEdit={setShowModalEdit}
                blog={blog}
                setBlog={setBlog}
            />
            <DeleteModal
                showModalDelete={showModalDetele}
                setShowModalDetele={setShowModalDetele} />
        </div>
    )
}


export default AppTable;