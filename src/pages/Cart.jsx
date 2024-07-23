import { useState, useEffect } from "react";
import { getCart } from "../utils/getCart";
import { removeFromCart } from "../utils/createCart";
import "../styles/Cart.scss";
import BreadcrumbComponent from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const handleRemove = (gameId) => {
    removeFromCart(gameId);
    setCartItems(getCart());
  };

  const breadcrumbs = [
    { label: "Browse", path: "/browse", active: false },
    { label: "Cart", path: "/cart", active: true },
  ];

  return (
    <div className="cart-page">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      {cartItems.length === 0 ? (
        <div>
          <p className="empty-cart mt-4">Your cart is empty.</p>
          <div className="checkout-container disabled">
            <button className="btn btn-primary" disabled>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-list">
          {cartItems.map((game) => (
            <div key={game.id} className="card">
              <img
                src={`${game.attributes.image.data.attributes.url}`}
                className="card-img-top"
                alt={game.attributes.image.title}
              />
              <div className="card-body">
                <h5 className="card-title">{game.attributes.title}</h5>
                <p className="card-text">
                  Platform: {game.attributes.platform}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    onClick={() => handleRemove(game.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                  <p className="card-text price">{game.attributes.price} Kr</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="checkout-container">
          <Link to="/checkout">
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
