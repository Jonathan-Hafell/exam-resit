import { useState, useEffect } from "react";
import { getCart } from "../utils/getCart";
import { removeFromCart } from "../utils/createCart";
import "../styles/Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const handleRemove = (gameId) => {
    removeFromCart(gameId);
    setCartItems(getCart()); // Update the state after removal
  };

  return (
    <div className="cart-page mx-auto my-5">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((game) => (
            <div key={game.id} className="card" style={{ width: "18rem" }}>
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
                <button
                  onClick={() => handleRemove(game.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
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
