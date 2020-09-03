import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { makeStyles } from "@material-ui/core/styles"
import Link from "gatsby-plugin-transition-link"
// import SnakeBar from "../SnakeBar"
import OldPrice from "./OldPrice"
import { DrawerCartContext } from "../../context/DrawerCartContext"
import funnyBunny from "../../images/products/funny_bunny/funny_bunny_2.jpg"
import catClock from "../../images/products/cat_clock/cat_clock_1.jpg"
import magicHat from "../../images/products/magic_hat/magic_hat_1.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: "1rem",
    // padding: "1rem",
    transition: "0.3s linear",
    "&:hover": {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    },
  },
  cardMedia: {
    transition: "1s",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
})

const SkuCard = ({ sku }, props) => {
  const classes = useStyles()
  const { addItem } = useShoppingCart()
  const {
    handleDrawerCartClose,
    openDrawerCart,
    handleDrawerCartOpen,
  } = useContext(DrawerCartContext)

  // const [openSnackbar, setOpenSnackbar] = useState(false)

  // const handleSnakebarShow = () => {
  //   setOpenSnackbar(true)
  // }
  // const handleSnakebarClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return
  //   }
  //   setOpenSnackbar(false)
  // }

  const productPage =
    sku.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq" ||
    sku.sku === "price_1HNFcEHwITO0GSJr0BcSMXko" ||
    sku.sku === "price_1HNFbdHwITO0GSJr0cQgGhYQ"
      ? "funny_bunny"
      : sku.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9" ||
        sku.sku === "price_1HNFdPHwITO0GSJrVsLO5IdU" ||
        sku.sku === "price_1HNFdwHwITO0GSJrpygU4AcI"
      ? "cat_clock"
      : sku.sku === "price_1HHUu9HwITO0GSJrsoWoL51O" ||
        sku.sku === "price_1HMt2gHwITO0GSJrR1YuszFV" ||
        sku.sku === "price_1HNFZ7HwITO0GSJrieVKbbte"
      ? "magic_hat"
      : ""

  const imgLocal =
    sku.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq" ||
    sku.sku === "price_1HNFcEHwITO0GSJr0BcSMXko" ||
    sku.sku === "price_1HNFbdHwITO0GSJr0cQgGhYQ"
      ? funnyBunny
      : sku.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9" ||
        sku.sku === "price_1HNFdPHwITO0GSJrVsLO5IdU" ||
        sku.sku === "price_1HNFdwHwITO0GSJrpygU4AcI"
      ? catClock
      : sku.sku === "price_1HHUu9HwITO0GSJrsoWoL51O" ||
        sku.sku === "price_1HMt2gHwITO0GSJrR1YuszFV" ||
        sku.sku === "price_1HNFZ7HwITO0GSJrieVKbbte"
      ? magicHat
      : sku.image

  // console.log(
  //   formatCurrencyString({
  //     value: parseInt(sku.price),
  //     currency: sku.currency,
  //   })
  // )

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <Link
            to={`/products/${productPage}`}
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt={sku.name}
              height="300"
              image={imgLocal}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {sku.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {sku.description}
                <br />
                Price: <OldPrice sku={sku.sku} />{" "}
                {formatCurrencyString({
                  value: parseInt(sku.price),
                  currency: sku.currency,
                })}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              addItem(sku)
              // handleSnakebarShow()
              handleDrawerCartOpen()
            }}
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
      {/* 
      <SnakeBar
        open={openSnackbar}
        onClose={handleSnakebarClose}
        message="Item added into cart"
      /> */}
    </>
  )
}

export default SkuCard
