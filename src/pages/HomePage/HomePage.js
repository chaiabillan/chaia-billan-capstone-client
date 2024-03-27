import './HomePage.scss'
import { Link } from 'react-router-dom'

function HomePage () {

    return (
        <>
            <p>this is the home page</p>
            <Link to="/resources?selectedResource=emergency-number">Go to Resources Page with Emergency Number</Link>


        </>
    )
}

export default HomePage