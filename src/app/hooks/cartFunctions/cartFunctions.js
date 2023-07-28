export default function addToCart(product) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cartItems.find((item) => item.id === product.id);

  if (existingProduct) {
    return;
  } else {
    product.quantity = 1;
    cartItems.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
}

export function updateCartItemQuantity(itemId, increment) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemIndex = cart.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    if (increment) {
      cart[itemIndex].quantity += 1;
    } else {
      if (cart[itemIndex].quantity > 0) {
        cart[itemIndex].quantity -= 1;
      }
    }
  } else {
    if (increment) {
      cart.push({ id: itemId, quantity: 1 });
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
