import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import CreateModal from './create.modal';

interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {
    const { blogs } = props

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
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
                                    <Button variant='success'>View</Button>
                                    <Button className='mx-2' variant='warning'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
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
        </div>
    )
}


export default AppTable;