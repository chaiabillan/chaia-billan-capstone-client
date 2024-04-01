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
                    Spokin is an excellent resource for eating out at restaurants. It allows users to rate and comment on restaurants in regards to the allergy-friendliness. 
                    There is a free app as well as a website. 
                    They also post articles regularly about allergy safe eating in various countries/cities.
                </p>
                <p className='information__body--header'>
                    Chef Cards
                </p>
                <p className='information__body--content'>
                    I cannot emphasize enough how much I recommend creating chef cards. They are cards that you can fit into your wallet that explain the severity of your food allergies as well as a list of your allergens in the language of the country that you are in. 
                    The 
                    When I was backpacking for 3 months, I used these multiple times a day. 
                    I explain how to create these in more depth on the <Link to="/resources?selectedResource=allergy-cards" className='link'>resources page.</Link>
                </p>

            </div>
        </section>
    )
}

export default RestaurantInfo