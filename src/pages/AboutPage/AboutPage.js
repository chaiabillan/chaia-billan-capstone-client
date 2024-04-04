import './AboutPage.scss'
import hero from '../../assets/images/bio-hero.jpeg'
import gallery1 from '../../assets/images/IMG_0449.jpeg'
import gallery2 from '../../assets/images/IMG_0458.jpeg'
import gallery3 from '../../assets/images/IMG_0504.jpeg'
import gallery4 from '../../assets/images/IMG_1163.jpeg'
import gallery5 from '../../assets/images/IMG_3830.jpeg'
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
import gallery29 from '../../assets/images/gallery29.jpeg'
import gallery30 from '../../assets/images/gallery30.jpeg'
import gallery31 from '../../assets/images/gallery31.jpeg'
import gallery32 from '../../assets/images/gallery32.jpeg'
import gallery33 from '../../assets/images/gallery33.jpeg'
import { Link } from 'react-router-dom'


function AboutPage () {

    return (
        <>
            <section className='hero'>
                <img className='hero__image hero__image--about' src={hero} alt='chaia'/>
            </section>
            <section className='description introduction'>
                <div className='introduction__text'>
                    <p className='introduction__top introduction__top--about'>
                        Hello! Welcome to My Allergy Compass!
                    </p>
                    <p className='introduction__bottom introduction__bottom--about'>
                        My name is Chaia, and I made this website because I love to travel. Before embarking on my first solo backpacking 
                        trip to Europe, I experienced a major anaphylactic allergic reaction to peanuts. Naturally, I started wondering how 
                        I would stay safe while traveling alone.
                        I had SUCH a hard time finding resources online that would help me. In fact, the only helpful information
                        I found was from asking friends and family. 
                    </p>
                    <p className='introduction__bottom introduction__bottom--about'>
                        Driven by my own struggles, I crafted this platform to fill the void I encountered.  
                        The <Link to ='/travel-guide' className='link'>comprehensive travel guide</Link> covers every facet of traveling, from flight safety 
                        to navigating language barriers at restaurants. My aim is to empower fellow allergy sufferers to explore the world with confidence.
                    </p>
                    <p className='introduction__bottom introduction__bottom--about'>
                    Below, you'll find a gallery showcasing some of the dishes I was lucky enough to try during my travels last year — all safely enjoyed, of course!
                     And if you're wondering, yes, pancakes are my absolute favorite!
                    </p>
                </div>

            </section>
            <section className='gallery'>
                <img className='gallery__image' src={gallery1} alt='bao buns'/>
                <img className='gallery__image' src={gallery2} alt='pancakes'/>
                <img className='gallery__image' src={gallery3} alt='stroop waffles'/>
                <img className='gallery__image' src={gallery4} alt='pasta'/>
                <img className='gallery__image' src={gallery5} alt='pancakes'/>
                <img className='gallery__image' src={gallery7} alt='chocolate covered strawberries'/>
                <img className='gallery__image' src={gallery8} alt='shakshouka'/>
                <img className='gallery__image' src={gallery9} alt='mocha'/>
                <img className='gallery__image' src={gallery10} alt='vegetables'/>
                <img className='gallery__image' src={gallery11} alt='belgian waffle'/>
                <img className='gallery__image' src={gallery12} alt='apple pie'/>
                <img className='gallery__image' src={gallery13} alt='tiramisu'/>
                <img className='gallery__image' src={gallery14} alt='pasta'/>
                <img className='gallery__image' src={gallery15} alt='key lime pie'/>
                <img className='gallery__image' src={gallery16} alt='chicken tacos'/>
                <img className='gallery__image' src={gallery17} alt='chocolate cake'/>
                <img className='gallery__image' src={gallery18} alt='patatas bravas'/>
                <img className='gallery__image' src={gallery19} alt='salmon benedict'/>
                <img className='gallery__image' src={gallery20} alt='pizza'/>
                <img className='gallery__image' src={gallery21} alt='chicken strips'/>
                <img className='gallery__image' src={gallery22} alt='matcha pancakes'/>
                <img className='gallery__image' src={gallery23} alt='chocolate covered fruit'/>
                <img className='gallery__image' src={gallery24} alt='salad'/>
                <img className='gallery__image' src={gallery25} alt='pastel de nata'/>
                <img className='gallery__image' src={gallery26} alt='steak'/>
                <img className='gallery__image' src={gallery27} alt='straberries and burrata'/>
                <img className='gallery__image' src={gallery28} alt='dessert trio'/>
                <img className='gallery__image' src={gallery29} alt='tiramisu gelato'/>
                <img className='gallery__image' src={gallery30} alt='picnic'/>
                <img className='gallery__image' src={gallery31} alt='gelato'/>
                <img className='gallery__image' src={gallery32} alt='starbucks'/>
                <img className='gallery__image' src={gallery33} alt='chicken strips'/>
            </section>
        </>
    )
}

export default AboutPage