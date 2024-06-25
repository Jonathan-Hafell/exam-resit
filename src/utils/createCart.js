import { getCart } from "./getCart";

export function addToCart(game) {
  const cart = getCart();
  if (!cart.find((item) => item.id === game.id)) {
    cart.push(game);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

export function removeFromCart(gameId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== gameId);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function isInCart(gameId) {
  const cart = getCart();
  return cart.some((item) => item.id === gameId);
}
