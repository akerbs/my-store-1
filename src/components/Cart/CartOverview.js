import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
// import Coupon from "./Coupon"

const useStyles = makeStyles(theme => ({
  btnWrapper: {
    textAlign: "center",
    margin: 20,
  },
}))

const Cart = props => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    cartDetails,
    // totalPrice,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart()

  console.log(cartDetails)

  // const [discount, setDiscount] = useState(0.5)

  // const ttlPriceWithDiscount =
  //   ((totalPrice * discount) / 100).toFixed(2) + " " + "€"

  // const ttlPriceWithoutDollarSign = formattedTotalPrice.toString().slice(0, -1)
  // const ttlPriceWithEuroSign = `€ ${ttlPriceWithoutDollarSign}`

  // console.log(ttlPriceWithEuroSign)

  return (
    <div>
      <div>
        {Object.keys(cartDetails).map((item, idx) => {
          const cartItem = cartDetails[item]
          return (
            <CartItem
              onClose={props.onClose}
              open={props.open}
              key={idx}
              item={cartItem}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              removeItem={removeItem}
            />
          )
        })}
      </div>

      {!cartCount ? (
        <Typography variant="body2" align="center" color="textSecondary">
          Cart is empty...
        </Typography>
      ) : (
        <>
          {/* <Coupon /> */}
          <Typography
            variant="body2"
            align="right"
            color="textPrimary"
            style={{ marginRight: 10 }}
          >
            Subtotal: {formattedTotalPrice}
          </Typography>

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
        </>
      )}
    </div>
  )
}

export default Cart
