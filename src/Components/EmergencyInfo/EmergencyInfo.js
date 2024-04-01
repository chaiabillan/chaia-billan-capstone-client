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
                    Being equipped to handle emergencies is crucial for travelers with allergies. While 9-1-1 may be 
                    the go-to emergency number in some places, it's not universal. Ensure you're prepared by knowing 
                    the local ambulance phone number at your destination. Explore <Link to="/resources?selectedResource=emergency-number" className='link'>this resource</Link> to find the correct emergency
                    contact information for your travels, giving you peace of mind in case of allergic reactions.
                </p>
                <p className='information__body--header'>
                    What to pack
                </p>
                <p className='information__body--content'>
                    Embarking on adventures in new cities can be thrilling, but for allergy travelers, smart packing is crucial. 
                    In addition to your typical travel gear like clothing and toiletries, make sure to include allergy-specific essentials.
                    Remember to pack your EpiPen and Benadryl—these lifesaving medications can provide immediate relief in the event of an
                    allergic reaction. It's advisable to carry two EpiPens at all times, as there's always a chance that the first may not
                    work effectively. Additionally, don't forget to carry <Link to='/resources?selectedResource=allergy-cards' className='link'> allergy identification cards </Link> to 
                    communicate your allergies effectively in any language. Being prepared with these essentials ensures you can explore new environments 
                    safely and with confidence.                    
                </p>
                
            </div>
        </section>
    )
}

export default EmergencyInfo