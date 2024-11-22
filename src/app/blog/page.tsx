"use client"

import AppTable from '@/app/components/app.table';
import useSWR from "swr";

const CreateBlog = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs",
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
        < div className='mt-4'>
            <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []} />
        </div>
    )
}


export default CreateBlog;
