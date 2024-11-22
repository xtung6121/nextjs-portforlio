"use client"
import Link from 'next/link';
import { use } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }
    );

    if (isLoading) {
        return <>....Loading</>
    }

    return (
        <div className='my-3 mt-5'>
            <div>
                <Link href={'/blog'} style={{ margin: "2px", textDecoration: 'none', fontSize: '20px', color: "#000" }}>Go back</Link>
            </div>
            <Card className='text-center' style={{ margin: "0 auto" }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Title: {data?.title}</ListGroup.Item>
                    <ListGroup.Item>{data?.content}</ListGroup.Item>
                    <ListGroup.Item>Author: {data?.author}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div >
    );
};

export default ViewDetailBlog