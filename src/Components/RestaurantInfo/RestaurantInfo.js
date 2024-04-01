import './RestaurantInfo.scss'
import { Link } from 'react-router-dom'

function RestaurantInfo() {

    return (
        <section className='information'>
            <div className='information__body'>
                <p className='information__body--header'>
                    Spokin
                </p>
                <p className='information__body--content'>
                    Discover Spokin, your ultimate ally for dining out safely. This invaluable resource empowers users to rate and review restaurants
                     based on their allergy-friendliness, ensuring you make informed dining choices. Available as a convenient free app and website, 
                     Spokin provides a wealth of information to navigate food allergies with ease. From insightful articles on allergy-safe eating in 
                     different cities and countries to user-generated reviews, Spokin equips you with the knowledge you need to dine confidently. 
                     Explore our <Link to='/resources?selectedResource=allergy-friendly-restaurants' className='link'>resources page</Link> for 
                     additional information on how Spokin can enhance your dining experiences.
                </p>
                <p className='information__body--header'>
                    Chef Cards
                </p>
                <p className='information__body--content'>
                    I highly recommend crafting allergy alert cards, especially for avid travelers. These portable cards are designed to fit into your 
                    wallet and serve as a concise yet comprehensive guide to your food allergies, including the severity and a list of specific allergens 
                    in the language of the country you're visiting.
                    During my three-month backpacking journey, I relied on these cards daily, finding them invaluable when communicating my dietary 
                    restrictions to chefs and restaurant staff. For detailed instructions on creating these cards, please refer to 
                    the <Link to="/resources?selectedResource=allergy-cards" className='link'>resources page.</Link>
                </p>

            </div>
        </section>
    )
}

export default RestaurantInfo