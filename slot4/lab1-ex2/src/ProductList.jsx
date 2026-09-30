import { Col, Container, Row } from 'react-bootstrap'
import ProductInfo from './ProductInfo.jsx'

const pizzas = [
	{
		name: 'Margherita Classica',
		price: 125000,
		tag: 'Classic',
		avatar:
			'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85',
	},
	{
		name: 'Pepperoni Piccante',
		price: 150000,
		tag: 'Bestseller',
		avatar:
			'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85',
	},
]

function ProductList() {
	return (
		<main className="pizza-page">
			<Container className="py-5">
				<header className="pizza-header">
					<a className="pizza-brand" href="#menu" aria-label="Forno home">
						FORNO<span>.</span>
					</a>
					<span className="pizza-header__note">HAND-STRETCHED · WOOD-FIRED</span>
				</header>

				<section id="menu" aria-labelledby="menu-title">
					<div className="menu-heading">
						<p className="menu-eyebrow">THE NEIGHBORHOOD PIZZERIA</p>
						<h1 id="menu-title">A slice of the good life.</h1>
						<p className="menu-description">
							Slow dough, bright ingredients, and a very hot oven.
						</p>
					</div>

					<Row className="g-4">
						{pizzas.map((pizza) => (
							<Col key={pizza.name} xs={12} sm={6} lg={4}>
								<ProductInfo {...pizza} />
							</Col>
						))}
					</Row>
				</section>
			</Container>
		</main>
	)
}

export default ProductList
