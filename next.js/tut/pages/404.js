import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])

    return ( 
        <div className="not-found">
            <h1>Ops...</h1>
            <h2>That Page Not Found</h2>
            <p>Go Back to <Link href="/"><a>Home Page</a></Link> </p>
        </div>
     );
}
 
export default NotFound;