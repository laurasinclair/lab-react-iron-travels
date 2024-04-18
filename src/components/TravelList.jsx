import { Container, Row, Col } from 'react-bootstrap'
import './TravelList.css'
import travelPlansData from '/src/data/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'
import { useState } from 'react'

export default function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);

    const deleteTravels = travelId => {
        const filteredTravels = travels.filter(travel => {
            return travel.id !== travelId;
        });
        setTravels(filteredTravels);
    }

	return (
		<Container>
			<Row>
				{travels.map((travelPlace) => {
					return (
						<Col md="6" lg="4" key={travelPlace.id}>
                            <TravelPlanCard plan={travelPlace} clickToDelete={deleteTravels} />
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}
