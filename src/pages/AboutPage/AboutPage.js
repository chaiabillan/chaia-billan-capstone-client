import './AboutPage.scss'
import bioImage from '../../assets/images/IMG_6295.jpeg'
import bioImage2 from '../../assets/images/IMG_0350.jpeg'
import bioImage3 from '../../assets/images/bio-hero.jpeg'
import gallery1 from '../../assets/images/IMG_0449.jpeg'
import gallery2 from '../../assets/images/IMG_0458.jpeg'
import gallery3 from '../../assets/images/IMG_0504.jpeg'
import gallery4 from '../../assets/images/IMG_1163.jpeg'
import gallery5 from '../../assets/images/IMG_3830.jpeg'
import gallery6 from '../../assets/images/IMG_3999.jpeg'
import gallery7 from '../../assets/images/IMG_4582.jpeg'
import gallery8 from '../../assets/images/IMG_4623.jpeg'
import gallery9 from '../../assets/images/IMG_4692.jpeg'
import gallery10 from '../../assets/images/IMG_4694.jpeg'
import gallery11 from '../../assets/images/IMG_4913.jpeg'
import gallery12 from '../../assets/images/IMG_4981.jpeg'
import gallery13 from '../../assets/images/IMG_5531.jpeg'
import gallery14 from '../../assets/images/IMG_5623.jpeg'
import gallery15 from '../../assets/images/gallery15.jpeg'
import gallery16 from '../../assets/images/gallery16.jpeg'
import gallery17 from '../../assets/images/gallery17.jpeg'
import gallery18 from '../../assets/images/gallery18.jpeg'
import gallery19 from '../../assets/images/gallery19.jpeg'
import gallery20 from '../../assets/images/gallery20.jpeg'
import gallery21 from '../../assets/images/gallery21.jpeg'
import gallery22 from '../../assets/images/gallery22.jpeg'
import gallery23 from '../../assets/images/gallery23.jpeg'
import gallery24 from '../../assets/images/gallery24.jpeg'
import gallery25 from '../../assets/images/gallery25.jpeg'
import gallery26 from '../../assets/images/gallery26.jpeg'
import gallery27 from '../../assets/images/gallery27.jpeg'
import gallery28 from '../../assets/images/gallery28.jpeg'
import hero from '../../assets/images/hero-about.jpeg'


function AboutPage () {

    return (
        <>
            <section className='hero'>
                <img className='hero__image hero__image--about' src={hero}/>
            </section>
            <section className='description'>
                <p className='description__title'>
                    Hello! Welcome to SafeTravels Allergy Compass!
                </p>
                <p className='description__bio'>
                    My name is Chaia, and I made this website because I LOVE to travel. I have a severe nut allergy,
                    and about a year before my first big solo backpacking trip to Europe, I had my first major
                    anaphylactic allergic reaction. Naturally, I started wondering how I would stay safe while traveling alone.
                    I had SUCH a hard time finding resources online that would help me. In fact, the only helpful information
                    I found was from asking friends and family. 
                </p>
                <p className='description__bio'>
                    I decided to create this website and curate it to be something that would've helped me on my trip. The comprehensive 
                    travel guide includes information and tips for each aspect of traveling, such as flight safety and how to eat 
                    at restaurants whose wait staff speak a different language. My hope is that this website inspires those with 
                    food allergies to feel more confident to go see the world! 
                </p>
                <p className='description__bio'>
                    The gallery below shows some of the food I was able to eat (safely!) while traveling last year. My favourite food
                    is pancakes, if you can't tell!
                </p>
            </section>
            <section className='gallery'>
                <img className='gallery__image' src={gallery1}/>
                <img className='gallery__image' src={gallery2}/>
                <img className='gallery__image' src={gallery3}/>
                <img className='gallery__image' src={gallery4}/>
                <img className='gallery__image' src={gallery5}/>
                <img className='gallery__image' src={gallery7}/>
                <img className='gallery__image' src={gallery8}/>
                <img className='gallery__image' src={gallery9}/>
                <img className='gallery__image' src={gallery10}/>
                <img className='gallery__image' src={gallery11}/>
                <img className='gallery__image' src={gallery12}/>
                <img className='gallery__image' src={gallery13}/>
                <img className='gallery__image' src={gallery14}/>
                <img className='gallery__image' src={gallery15}/>
                <img className='gallery__image' src={gallery16}/>
                <img className='gallery__image' src={gallery17}/>
                <img className='gallery__image' src={gallery18}/>
                <img className='gallery__image' src={gallery19}/>
                <img className='gallery__image' src={gallery20}/>
                <img className='gallery__image' src={gallery21}/>
                <img className='gallery__image' src={gallery22}/>
                <img className='gallery__image' src={gallery23}/>
                <img className='gallery__image' src={gallery24}/>
                <img className='gallery__image' src={gallery25}/>
                <img className='gallery__image' src={gallery26}/>
                <img className='gallery__image' src={gallery27}/>
                <img className='gallery__image' src={gallery28}/>

            </section>
        </>
    )
}

export default AboutPage