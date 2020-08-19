import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    cartDetails,
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
  } = useShoppingCart()

  console.log(cartDetails)

  return (
    <div>
      {/* This is where we'll render our cart */}
      {/* {
  cartDetails.map(item => (
    return(<p>{item.name}</p>)
     ))} */}

      <div>
        {Object.keys(cartDetails).map((item, idx) => {
          const cartItem = cartDetails[item]
          return <CartItem key={idx} item={cartItem} />
        })}
      </div>

      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>

      {/* Redirects the user to Stripe */}
      <button
        style={buttonStyles}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? "Loading..." : "Checkout"}
      </button>
      <button style={buttonStyles} onClick={clearCart}>
        Clear cart
      </button>
    </div>
  )
}

export default Cart

const CartItem = ({ item }) => {
  return (
    <div>
      <h6>
        {item.name} {item.quantity}
      </h6>
    </div>
  )
}
