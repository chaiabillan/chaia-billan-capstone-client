import './ResourcesPage.scss'
import EmergencyNumber from '../../Components/EmergencyNumber/EmergencyNumber'
import AllergyCards from '../../Components/AllergyCards/AllergyCards'

function ResourcesPage () {

    return (
        <>
            <section>
                <p>this is the resources page</p>
            </section>
            <section>
                <p>pick a resource!</p>
                <button>emergnecy number </button>
                <button>aallergy cards</button>
                <EmergencyNumber />
                <AllergyCards />
            </section>
            
        </>

    )
}

export default ResourcesPage