"use client"

import Link from 'next/link'
import AppTable from './components/app.table';
import useSWR from "swr";
export default function Home() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }
  );

  if (!data) {
    return <>....Loading</>
  }
  return (
    <div>
      <ul>
        <li>
          <Link className='nav-link' href={'/facebook'}>Facebook</Link>
        </li>
        <li>
          <Link className='nav-link' href={'/instagram'}>instagram</Link>
        </li>
        <li>
          <Link className='nav-link' href={'/linkin'}>LinkIn</Link>
        </li>
      </ul>

      <AppTable blogs={data} />
    </div >
  )
}
