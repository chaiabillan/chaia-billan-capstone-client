import './AllergyCards.scss';
import { Link } from 'react-router-dom';
import chefCard from '../../assets/images/chefcard.png';
import frontCard from '../../assets/images/chefcardfront.png';
import backCard from '../../assets/images/chefcardback.png';

function AllergyCards() {

    return (
        <section className='resource'>
            <p className='resource__title'>
                Chef Cards
            </p>
            <div className='resource__description'>
                <p className='resource__description--content'>
                    Chef Cards are a must for safe traveling. 
                    These portable cards are designed to fit into 
                    your wallet and serve as a concise yet comprehensive
                     guide to your food allergies, including the severity 
                     and a list of specific allergens in the language of 
                     the country you're visiting. During my three-month 
                     backpacking journey, I relied on these cards daily, 
                     finding them invaluable when communicating my dietary 
                     restrictions to chefs and restaurant staff. 
                </p>
                <p className='resource__description--content'>
                    To create your own chef cards, you can visit <Link to='https://www.foodallergy.org/resources/food-allergy-chef-cards#:~:text=manager%20at%20restaurants.-,Carrying%20a%20%22chef%20card%22%20that%20outlines%20the%20foods%20you%20must,or%20at%20ethnic%20food%20restaurants.' className='link'>this website. </Link>
                </p>
                <p className='resource__description--content'>
                    There are 11 languages to choose from to make your chef cards
                    including Chinese, French, and Spanish. Here's an example of the 
                    pdf you will be able to download (for free) in the lanuage of your choice
                    (this one is in French). 
                </p>
                <img className='resource__description--image' src={chefCard} alt='chef card'/>
                <p className='resource__description--content'>
                    All you have to do is use the table at the bottom to copy and paste your
                    translated allergen into the space at the front of the card (blue rectangle).
                    This pdf provides 2 chef cards in French (front and back). I recommend 
                    laminating your chef card after printing and assembling for long term use. 
                </p>
                <p className='resource__description--content'>
                    For someone who is allergic to peanuts and tree nuts (like myself), this is
                    what the front and back of the card will look like, respectively: 
                </p>
                <div className='chef-cards'>
                    <img className='resource__description--image chef-cards__image' src={frontCard} alt='front of chef card' />
                    <img className='resource__description--image chef-cards__image' src={backCard}  alt='back of chef card'/>
                </div>

            </div>
        </section>
    )
}

export default AllergyCards