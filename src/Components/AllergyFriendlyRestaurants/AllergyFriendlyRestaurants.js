import './AllergyFriendlyRestaurants.scss'
import { Link } from 'react-router-dom'

function AllergyFriendlyRestaurants() {

    return (
        <section className='resource'>
            <p className='resource__title'>
                Spokin
            </p>
            <div className='resource__description'>
                <p className='resource__description--content'>
                    Discover Spokin, your ultimate ally for dining out safely. This invaluable
                    resource empowers users to rate and review restaurants based on their 
                    allergy-friendliness, ensuring you make informed dining choices. Available 
                    as a convenient free app and website, Spokin provides a wealth of information 
                    to navigate food allergies with ease. From insightful articles on allergy-safe 
                    eating in different cities and countries to user-generated reviews, Spokin equips 
                    you with the knowledge you need to dine confidently. 
                </p>
                <p className='resource__description--content'>
                    Here is the <Link to='https://www.spokin.com/' className='link'>link</Link> to the Spokin website.
                </p>
            </div>
        </section>
    )
}

export default AllergyFriendlyRestaurants