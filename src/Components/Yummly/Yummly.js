import { Link } from "react-router-dom"

function Yummly() {

    return (
        <section className='resource'>
            <p className='resource__title'>
                Yummly
            </p>
            <div className='resource__description'>
                <p className='resource__description--content'>
                    When it comes to finding delicious and allergy-friendly recipes, 
                    Yummly is a go-to resource. This comprehensive platform offers a 
                    vast collection of recipes tailored to various dietary preferences 
                    and restrictions. Whether you're seeking gluten-free, dairy-free, 
                    or nut-free options, Yummly provides a diverse range of recipes to 
                    suit your needs. With intuitive search features and personalized 
                    recommendations, Yummly makes it easy to discover new dishes and 
                    plan your meals with confidence.
                </p>
                <p className='resource__description--content'>
                    Here is the <Link to='https://www.yummly.com/' className='link'>link</Link> to the website.
                </p>
            </div>
        </section>
    )
}

export default Yummly