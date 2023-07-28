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
      if (cart[itemIndex].quantity > 1) {
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
export function deleteCartItem(itemId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemIndex = cart.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
export function calculateCart(cart) {
  // const subtotal = cart?.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue?.quantity * currentValue?.price;
  // }, 0);
  const subtotal = Math.floor(
    cart?.reduce(
      (total, item) => total + Number(item?.quantity) * Number(item?.price),
      0
    )
  );
  const totalItem = cart?.length;
  const deliveryCharges = (!!totalItem && totalItem > 0 && 5) || 0;
  const tax = Math.floor(
    cart?.reduce(
      (total, item) => total + Number(item?.quantity) * Number(item?.price),
      0
    ) * 0.04
  );
  const grandTotal = subtotal + deliveryCharges + tax;

  return { subtotal, totalItems: totalItem, deliveryCharges, tax, grandTotal };
}
