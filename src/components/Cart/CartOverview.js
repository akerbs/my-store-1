import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  btn: {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
  },
}))

const Cart = () => {
  const classes = useStyles()
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

  const ttlPriceWithoutDollarSign = formattedTotalPrice.toString().slice(0, -1)
  const ttlPriceWithEuroSign = `€ ${ttlPriceWithoutDollarSign}`

  // console.log(ttlPriceWithEuroSign)

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

      {/* <p>Number of Items: {cartCount}</p> */}
      <p>Total: {ttlPriceWithEuroSign}</p>

      {/* Redirects the user to Stripe */}
      <button
        className={classes.btn}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? "Loading..." : "Checkout"}
      </button>
    </div>
  )
}

export default Cart
