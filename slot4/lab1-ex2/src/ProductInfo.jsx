import { Badge, Button, Card } from 'react-bootstrap'

function ProductInfo({ name, price, tag, avatar }) {
	const formattedPrice = `${new Intl.NumberFormat('vi-VN').format(price)} ₫`

	return (
		<Card className="product-card h-100">
			<div className="product-card__image">
				<Card.Img variant="top" src={avatar} alt={name} />
				<Badge bg="warning" text="dark" className="product-card__tag">
					{tag}
				</Badge>
			</div>
			<Card.Body className="d-flex flex-column">
				<Card.Title>{name}</Card.Title>
				<Card.Text className="product-card__price">{formattedPrice}</Card.Text>
				<Button variant="dark" className="mt-auto">
					Buy Now
				</Button>
			</Card.Body>
		</Card>
	)
}

export default ProductInfo
