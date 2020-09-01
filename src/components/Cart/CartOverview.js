import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
// import Coupon from "./Coupon"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"

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
        <Slide in={props.open} timeout={1000} direction="up">
          <div>
            <Fade in={props.open} timeout={2000}>
              <Typography
                variant="body2"
                align="center"
                color="textSecondary"
                // className={(clsx(open && classes.hide), classes.closeDrawerBtn)}
                // className={clsx(
                //   classes.byCloseDrawer,
                //   props.open && classes.byOpenDrawer
                // )}
                // className={clsx(classes.byCloseDrawer, {
                //   [classes.byOpenDrawer]: props.open,
                // })}
              >
                Cart is empty...
              </Typography>
            </Fade>
          </div>
        </Slide>
      ) : (
        <>
          {/* <Coupon /> */}
          <Slide in={props.open} timeout={900} direction="up">
            <div>
              <Fade in={props.open} timeout={2000}>
                <Typography
                  variant="body2"
                  align="right"
                  color="textPrimary"
                  style={{ marginRight: 10 }}
                >
                  Subtotal: {formattedTotalPrice}
                </Typography>
              </Fade>
            </div>
          </Slide>

          <div className={classes.btnWrapper}>
            <Slide in={props.open} timeout={900} direction="up">
              <div>
                <Fade in={props.open} timeout={2000}>
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
                </Fade>
              </div>
            </Slide>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
