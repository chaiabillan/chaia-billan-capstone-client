import './FlightInfo.scss';

function FlightInfo() {

    return (
            <section className='information'>
                <div className='information__body'>
                    <p className='information__body--header'>
                        Airline Accomodations   
                    </p>
                    <p className='information__body--content'>
                        I highly reccomend calling the airline a few weeks before your flight to ask about
                        the accomodations that they offer to passengers with allergies. More often than
                        not, if you have submitted the necessary form, the airline will give you priority boarding
                        so that you have time to wipe down your seats and tray table to clean off possible contamination
                        of allergens. Here is the link for the WestJet form that you can submit a few weeks before
                        your flight to apply for accomodation: link.
                    </p>
                    <p className='information__body--header'>
                        Well Too Wipes
                    </p>
                    <p className='information__body--content'>
                        Well Too Wipes are a type of disinfectant wipe that denature peanut proteins. 
                        This would be a great thing to have on a flight to ensure there is no residual peanut 
                        particles on the tray tables or seats. 
                    </p>
                </div>
            </section>

    )
}

export default FlightInfo