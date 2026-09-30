import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="brand-mark">
            Pizza House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="pizza-house-navigation" />
          <Navbar.Collapse id="pizza-house-navigation">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="home" className="hero">
          <Container>
            <Row className="align-items-center gy-5">
              <Col md={6} className="hero-copy">
                <p className="eyebrow">Fresh from our oven</p>
                <h1>Delicious Pizza</h1>
                <p className="hero-description">
                  Enjoy delicious and fresh pizza with our special recipes.
                </p>
                <Button variant="danger" href="#menu">
                  Order Now
                </Button>
              </Col>
              <Col md={6}>
                <img
                  src="/Images/pizza1.jpg"
                  alt="Fresh pizza topped with tomato and herbs"
                  className="hero-image"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="menu" className="menu-section">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Made with care</p>
              <h2>Our Menu</h2>
            </div>
            <Row className="g-4">
              <Col md={4}>
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src="/Images/pizza2.jpg"
                    alt="Pizza Margherita"
                  />
                  <Card.Body>
                    <Card.Title>Pizza Margherita</Card.Title>
                    <Card.Text>
                      Fresh tomato, cheese and delicious pizza sauce.
                    </Card.Text>
                    <Button variant="danger" href="#contact">
                      Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src="/Images/pizza3.jpg"
                    alt="Cheese pizza"
                  />
                  <Card.Body>
                    <Card.Title>Cheese Pizza</Card.Title>
                    <Card.Text>
                      A delicious pizza with lots of cheese.
                    </Card.Text>
                    <Button variant="danger" href="#contact">
                      Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src="/Images/pizza4.jpg"
                    alt="Special pizza with fresh ingredients"
                  />
                  <Card.Body>
                    <Card.Title>Special Pizza</Card.Title>
                    <Card.Text>
                      Our special pizza with fresh ingredients.
                    </Card.Text>
                    <Button variant="danger" href="#contact">
                      Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="about-section">
          <Container>
            <Row>
              <Col lg={8}>
                <p className="eyebrow">A little about us</p>
                <h2>Good food, shared moments</h2>
                <p>
                  Pizza House provides delicious pizza made from fresh
                  ingredients.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact" className="contact-section">
          <Container>
            <Row className="gy-3">
              <Col md={6}>
                <p className="eyebrow">Come say hello</p>
                <h2>Contact Us</h2>
              </Col>
              <Col md={3}>
                <h3>Email</h3>
                <p>pizzahouse@example.com</p>
              </Col>
              <Col md={3}>
                <h3>Phone</h3>
                <p>0123 456 789</p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <Container>
          <p>© 2026 Pizza House</p>
        </Container>
      </footer>
    </>
  )
}

export default App;
