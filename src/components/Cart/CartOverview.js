import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  btnWrapper: {
    textAlign: "center",
    margin: 20,
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

  // const ttlPriceWithoutDollarSign = formattedTotalPrice.toString().slice(0, -1)
  // const ttlPriceWithEuroSign = `€ ${ttlPriceWithoutDollarSign}`

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
      <Typography
        variant="body2"
        align="right"
        color="textPrimary"
        style={{ marginRight: 10 }}
      >
        Subtotal: {formattedTotalPrice}
      </Typography>

      {/* Redirects the user to Stripe */}
      <div className={classes.btnWrapper}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
        >
          {loading ? "Loading..." : "Checkout"}
        </Button>
      </div>
    </div>
  )
}

export default Cart
