
import logo from '../../assets/error.png.webp'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <section className="d-flex align-items-center vh-100 p-4 bg-light text-dark">
            <div className="container d-flex flex-column justify-content-center align-items-center px-5 my-8">
                {/* <FaceFrownIcon className="w-25 h-25 text-warning" /> */}
                <img className="w-full h-full rounded-lg mx-auto" src={logo} alt="" />
                <div className="mx-auto text-center relative -top-32">
                    
                    <p className="mb-4 font-weight-bold h2 text-danger">
                        {error?.message}
                    </p>
                    <Link to='/' className='btn'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage