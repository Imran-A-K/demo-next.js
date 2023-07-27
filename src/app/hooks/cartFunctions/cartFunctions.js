export default function addToCart(product) {
  // Check if there's any cart field array set in local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart by checking its ID
  const existingProduct = cartItems.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, do nothing
    return;
  } else {
    // If the product is not in the cart, add it with quantity 1
    product.quantity = 1;
    cartItems.push(product);
  }

  // Save the updated cart array back to local storage
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
