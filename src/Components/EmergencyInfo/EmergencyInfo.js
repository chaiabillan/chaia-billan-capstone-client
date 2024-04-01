import './EmergencyInfo.scss'
import { Link } from 'react-router-dom'

function EmergencyInfo() {

    return (
        <section className='information'>
            <div className='information__body'>
                <p className='information__body--header'>
                    Ambulance Phone Number
                </p>
                <p className='information__body--content'>
                    Every country does not use 9-1-1 as their emergency phone number. <Link to="/resources?selectedResource=emergency-number" className='link'>Link</Link>
                </p>
                <p className='information__body--header'>
                    What to pack
                </p>
                <p className='information__body--content'>
                    There are certain things that you should always bring with you when exporing new cities (and in general).
                    
                </p>
                
            </div>
        </section>
    )
}

export default EmergencyInfo