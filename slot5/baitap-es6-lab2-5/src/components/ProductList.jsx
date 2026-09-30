import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProductCard from './ProductCard.jsx'

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const categories = [
    'Tất cả',
    ...new Set(products.map((product) => product.category.name)),
  ]
  const filteredProducts =
    selectedCategory === 'Tất cả'
      ? products
      : products.filter((product) => product.category.name === selectedCategory)

  return (
    <div>
      <h2>{`Có ${filteredProducts.length} sản phẩm`}</h2>

      <div className="d-flex gap-2 mb-4 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline-primary'}
            size="sm"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductList