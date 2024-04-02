import './FlightInfo.scss';

function FlightInfo() {

    return (
            <section className='information'>
                <div className='information__body'>
                    <p className='information__body--header'>
                        Airline Accomodations   
                    </p>
                    <p className='information__body--content'>
                        For a worry-free flight experience, I strongly advise reaching out to your airline a few weeks prior to your departure. 
                        Inquire about the accommodations they provide for passengers with allergies. In many cases, after completing the requisite form, 
                        airlines offer priority boarding. This grants you the time needed to meticulously sanitize your seat and tray table, minimizing
                        the risk of allergen exposure. For example, here is the <a href='https://www.westjet.com/en-ca/special-needs/allergies' className='link'>link</a> to the WestJet form which you can submit several weeks
                        ahead of your flight to request accommodations.
                    </p>
                    <p className='information__body--header'>
                        Well Too Wipes
                    </p>
                    <p className='information__body--content'>
                        Well Too Wipes offer a practical solution for individuals traveling with allergies, particularly those sensitive to peanuts. These 
                        wipes are specifically designed to disinfect surfaces by denaturing peanut proteins effectively. This feature makes them invaluable 
                        for travelers concerned about allergen exposure on tray tables and seats during flights. By using Well Too Wipes, travelers can take 
                        proactive measures to minimize the risk of encountering residual peanut particles, providing peace of mind and a safer environment for 
                        those with allergies.
                    </p>
                    <p className='information__body--header'>
                        Airplane Food
                    </p>
                    <p className='information__body--content'>
                        When it comes to airplane food, it's best to play it safe. I don't recommend eating the meals served onboard. There's just no guarantee
                         they're allergy-friendly. It's not worth risking a mid-flight allergic reaction when getting help quickly isn't easy. Instead, pack your 
                         own snacks that you know are safe to munch on. 
                    </p>
                </div>
            </section>

    )
}

export default FlightInfo