import { useState, useEffect, useRef } from "react";
import { getCart } from "../utils/getCart";
import BreadcrumbComponent from "../components/Breadcrumb";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "../styles/Checkout.scss";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.attributes.price,
    0
  );

  const breadcrumbs = [
    { label: "Browse", path: "/browse", active: false },
    { label: "Cart", path: "/cart", active: false },
    { label: "Checkout", path: "/checkout", active: true },
  ];

  const handleSubmit = (event) => {
    const form = formRef.current;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setShowModal(true);
    }
    setValidated(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const confirmPayment = () => {
    localStorage.removeItem("cart");
    setShowModal(false);
    window.location.href = "/browse";
  };

  return (
    <div className="checkout-page">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <Container>
        <Row className="checkout-conatiner">
          <Col md={5} lg={4} className="order order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="your-cart">Your cart</span>
              <span className="your-cart-items badge rounded-pill">
                {cartItems.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{item.attributes.title}</h6>
                    <small className="text-body-secondary">
                      {item.attributes.description}
                    </small>
                  </div>
                  <span className="text-body-secondary">
                    {item.attributes.price}
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (NOK)</span>
                <strong>{totalPrice}</strong>
              </li>
            </ul>
          </Col>
          <Col md={7} lg={8} className="checkout-form">
            <h4 className="mb-3">Billing address</h4>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <Row className="g-3">
                <Col sm={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="[A-Za-z]+"
                    />
                    <Form.Control.Feedback type="invalid">
                      Valid first name is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="[A-Za-z]+"
                    />
                    <Form.Control.Feedback type="invalid">
                      Valid last name is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="email">
                    <Form.Label>Email (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="you@example.com" />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address for shipping updates.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Karl Johans gt. 37"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your shipping address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Select required>
                      <option value="">Choose...</option>
                      <option>Norway</option>
                      <option>Sweden</option>
                      <option>Denmark</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a valid country.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="state">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="[A-Za-z]+"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="zip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="\d{2,5}"
                      minLength="2"
                      maxLength="5"
                    />
                    <Form.Control.Feedback type="invalid">
                      Zip code required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="form-check my-4">
                <Form.Check
                  type="checkbox"
                  id="save-info"
                  label="Save this information for next time"
                />
              </Form.Group>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <Form.Group className="my-3">
                <Form.Check
                  type="radio"
                  label="Credit card"
                  name="paymentMethod"
                  id="credit"
                  required
                />
                <Form.Check
                  type="radio"
                  label="Debit card"
                  name="paymentMethod"
                  id="debit"
                  required
                />
                <Form.Check
                  type="radio"
                  label="PayPal"
                  name="paymentMethod"
                  id="paypal"
                  required
                />
              </Form.Group>

              <Row className="gy-3">
                <Col md={6}>
                  <Form.Group controlId="cc-name">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="[A-Za-z\s]+"
                    />
                    <small className="text-body-secondary">
                      Full name as displayed on card
                    </small>
                    <Form.Control.Feedback type="invalid">
                      Name on card is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="cc-number">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="\d{16}"
                      maxLength="16"
                    />
                    <Form.Control.Feedback type="invalid">
                      Card number is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="cc-expiration">
                    <Form.Label>Expiration</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="MM/YY"
                      pattern="\d{2}/\d{2}"
                      maxLength="5"
                    />
                    <Form.Control.Feedback type="invalid">
                      Expiration date required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="cc-cvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      pattern="\d{3}"
                      maxLength="3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Security code required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <hr className="my-4" />

              <Button className="checkout-btn w-100 btn-lg" type="submit">
                Continue to checkout
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to proceed with the payment?
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="cancel-payment"
            variant="secondary"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            className="confirm-payment"
            variant="primary"
            onClick={confirmPayment}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
