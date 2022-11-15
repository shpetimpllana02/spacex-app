import {Link} from 'react-router-dom'

export default function Error () {
return (
    <>
    <section className='flex flex-col items-center justify-center text-center h-screen'>
        <h3>ERROR - THIS PAGE DOESNT EXIST</h3>
        <Link to='/' className='btn'> Back To Home </Link>
    </section>
    </>
)

} 

