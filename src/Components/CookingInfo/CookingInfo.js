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
                    One of the perks of staying in hostels or Airbnbs is the access to kitchen facilities, which can be a game-changer 
                    for travelers with food allergies. With kitchens commonly available in these accommodations, you have the freedom to
                     prepare your own meals, ensuring they meet your dietary needs and safety standards.
                </p>
                <p className='information__body--header'>
                    Yummly
                </p>
                <p className='information__body--content'>
                    When it comes to finding delicious and allergy-friendly recipes, <Link to="/resources?selectedResource=yummly" className='link'>Yummly</Link> is a go-to resource. This comprehensive platform
                     offers a vast collection of recipes tailored to various dietary preferences and restrictions. Whether you're seeking 
                     gluten-free, dairy-free, or nut-free options, Yummly provides a diverse range of recipes to suit your needs. With intuitive
                      search features and personalized recommendations, Yummly makes it easy to discover new dishes and plan your meals with 
                      confidence. 
                </p>
                
            </div>
        </section>
    )
}

export default CookingInfo