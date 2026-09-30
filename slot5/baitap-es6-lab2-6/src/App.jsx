import Card from 'react-bootstrap/Card'
import AppButton from './components/AppButton.jsx'
import InputField from './components/InputField.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductList from './components/ProductList.jsx'
import { products } from './data/products.js'

function App() {
  const product = products[0]
  const saleProducts = products.slice(0, 2)
  const newProducts = products.slice(6)
  const featured = [...saleProducts, ...newProducts]

  const baseStyle = { borderRadius: 12 }
  const highlight = { border: '2px solid gold' }

  return (
    <main className="container my-4">
      <div className="d-flex gap-2 mb-4 flex-wrap">
        <AppButton>Primary mặc định</AppButton>
        <AppButton variant="danger" size="sm">
          Danger Small
        </AppButton>
        <AppButton disabled>Disabled</AppButton>
      </div>

      <InputField
        id="contactEmail"
        label="Email"
        type="email"
        placeholder="name@example.com"
        required
        helpText="Chúng tôi không chia sẻ email của bạn"
      />

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard product={{ ...product, discount: 30 }} />
        </div>
      </div>

      <ProductList products={featured} />

      <Card
        className="mb-4"
        style={{
          ...baseStyle,
          ...highlight,
        }}
      >
        <Card.Body>
        </Card.Body>
      </Card>
    </main>
  )
}

export default App
