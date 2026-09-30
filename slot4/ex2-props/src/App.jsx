import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ProductInfo from './ProductInfo.jsx'

const pizzas = [
  {
    name: 'Pizza Margherita',
    price: 149000,
    tag: 'Bán chạy',
    avatar: '/images/1.jpg',
  },
  {
    name: 'Pizza Pepperoni',
    price: 179000,
    tag: 'Mới',
    avatar: '/images/2.jpg',
  },
]

function App() {
  return (
    <Container as="main" className="app-shell">
      <header className="page-header">
        <p className="eyebrow">ReactJS / Props</p>
        <h1>Pizza menu</h1>
        <p className="intro">
          Pizza tươi mỗi ngày, nướng nóng và sẵn sàng cho bàn ăn của bạn.
        </p>
      </header>

      <section aria-label="Danh sách pizza">
        <Row className="g-4">
          {pizzas.map((pizza) => (
            <Col key={pizza.name} xs={12} sm={6}>
              <ProductInfo {...pizza} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  )
}

export default App
