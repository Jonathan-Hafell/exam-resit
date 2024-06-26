import { useState, useEffect } from "react";
import { getCart } from "../utils/getCart";
import { Modal, Button } from "react-bootstrap";
import "../styles/Checkout.scss";
import BreadcrumbComponent from "../components/Breadcrumb";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "credit",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCvv: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const breadcrumbs = [
    { label: "Browse", path: "/browse", active: false },
    { label: "Cart", path: "/cart", active: false },
    { label: "Checkout", path: "/checkout", active: true },
  ];

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalConfirm = () => {
    setShowModal(false);
    localStorage.removeItem("cart");
    window.location.href = "/browse";
  };

  return (
    <div className="checkout-page">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">
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
                  ${item.attributes.price}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (NOK)</span>
              <strong>200</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form
            className="needs-validation"
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  defaultValue={formValues.firstName}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  defaultValue={formValues.lastName}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  defaultValue={formValues.email}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  defaultValue={formValues.address}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  defaultValue={formValues.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  defaultValue={formValues.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  defaultValue={formValues.zip}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <div className="form-check my-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
                defaultValue={formValues.saveInfo}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  value="credit"
                  checked={formValues.paymentMethod === "credit"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  value="debit"
                  checked={formValues.paymentMethod === "debit"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  value="paypal"
                  checked={formValues.paymentMethod === "paypal"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  defaultValue={formValues.ccName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <small className="text-body-secondary">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  defaultValue={formValues.ccNumber}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  defaultValue={formValues.ccExpiration}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  defaultValue={formValues.ccCvv}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to proceed with the payment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModalConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
