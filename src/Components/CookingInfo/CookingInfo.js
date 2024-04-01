import './CookingInfo.scss'
import { Link } from 'react-router-dom'

function CookingInfo() {

    return (
        <section className='information'>
            <div className='information__body'>
                <p className='information__body--header'>
                    Cooking in Hostels
                </p>
                <p className='information__body--content'>
                    Fortunately, most hostels and AirBnB's have kitchens. 
                </p>
                <p className='information__body--header'>
                    Yummly
                </p>
                <p className='information__body--content'>
                    Yummly is a great resource... <Link to="/resources?selectedResource=yummly" className='link'>Link</Link>
                </p>
                
            </div>
        </section>
    )
}

export default CookingInfo