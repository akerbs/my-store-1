import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"

import Counter from "./Counter"

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
    incrementItem,
    decrementItem,
    removeItem,
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

      <div>
        {Object.keys(cartDetails).map((item, idx) => {
          const cartItem = cartDetails[item]
          return (
            <CartItem
              key={idx}
              item={cartItem}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              removeItem={removeItem}
            />
          )
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

const CartItem = props => {
  const price = props.item.price.toString()
  const beforeDot = price.slice(0, -2)
  const afterDot = price.slice(-2)
  const corrPrice = `${beforeDot}.${afterDot}`

  return (
    <div>
      <h6>
        {props.item.name}
        <br />
        <Counter
          incrementItem={props.incrementItem}
          decrementItem={props.decrementItem}
          quantity={props.item.quantity}
          sku={props.item.sku}
        />
        {" x "}
        {corrPrice} {props.item.currency}
      </h6>
    </div>
  )
}
