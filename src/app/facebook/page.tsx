'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'
const Facebook = () => {

    const router = useRouter();
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <>
            hello facebook

            <Button variant='danger'>Hello Shop</Button>
            <div>
                <button type="button" onClick={() => handleBtn()}>
                    Go Home
                </button>
            </div>
        </>

    )
}


export default Facebook;