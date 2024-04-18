import { Card } from 'react-bootstrap'

export default function TravelPlanCard(props) {
    const { plan, clickToDelete } = props;

	return (
		<Card>
			<div className="card-img" style={{ backgroundImage: 'url(' + plan.image + ')' }}>
				{plan.totalCost <= 350 && <p className="tag tag_deals">Great Deal!</p>}

				{plan.totalCost >= 1500 && <p className="tag tag_premium">Premium</p>}

				{plan.allInclusive && <p className="tag tag_inclusive">All Inclusive</p>}
			</div>
			<Card.Body>
				<Card.Title>
					<h3>
						{plan.destination} ({plan.days} days)
					</h3>
				</Card.Title>
				<p>{plan.description}</p>

				<p>
					<strong>Price: </strong>
					{plan.totalCost}&nbsp;€
				</p>

				<button onClick={() => clickToDelete(plan.id)}>Delete item</button>
			</Card.Body>
		</Card>
	)
}
