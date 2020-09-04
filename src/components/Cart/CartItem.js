import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Counter from "./Counter"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import Divider from "@material-ui/core/Divider"
import Link from "gatsby-plugin-transition-link"
import funnyBunny from "../../images/products/funny_bunny/funny_bunny_2.jpg"
import catClock from "../../images/products/cat_clock/cat_clock_1.jpg"
import magicHat from "../../images/products/magic_hat/magic_hat_1.jpg"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
// import DB from "../DB"

// console.log("!!! :", DB[0].name)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    padding: 8,
  },
  imgBtn: {
    width: "100px",
    height: "100px",
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100px",
    height: "100px",
  },
}))

const CartItem = props => {
  const classes = useStyles()

  const productPage =
    props.item.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq" ||
    props.item.sku === "price_1HNFcEHwITO0GSJr0BcSMXko" ||
    props.item.sku === "price_1HNFbdHwITO0GSJr0cQgGhYQ"
      ? "funny_bunny"
      : props.item.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9" ||
        props.item.sku === "price_1HNFdPHwITO0GSJrVsLO5IdU" ||
        props.item.sku === "price_1HNFdwHwITO0GSJrpygU4AcI"
      ? "cat_clock"
      : props.item.sku === "price_1HHUu9HwITO0GSJrsoWoL51O" ||
        props.item.sku === "price_1HMt2gHwITO0GSJrR1YuszFV" ||
        props.item.sku === "price_1HNFZ7HwITO0GSJrieVKbbte"
      ? "magic_hat"
      : ""

  const imgLocal =
    props.item.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq" ||
    props.item.sku === "price_1HNFcEHwITO0GSJr0BcSMXko" ||
    props.item.sku === "price_1HNFbdHwITO0GSJr0cQgGhYQ"
      ? funnyBunny
      : props.item.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9" ||
        props.item.sku === "price_1HNFdPHwITO0GSJrVsLO5IdU" ||
        props.item.sku === "price_1HNFdwHwITO0GSJrpygU4AcI"
      ? catClock
      : props.item.sku === "price_1HHUu9HwITO0GSJrsoWoL51O" ||
        props.item.sku === "price_1HMt2gHwITO0GSJrR1YuszFV" ||
        props.item.sku === "price_1HNFZ7HwITO0GSJrieVKbbte"
      ? magicHat
      : props.item.image

  return (
    <>
      <CssBaseline />
      <Slide in={props.open} timeout={900} direction="up">
        <div>
          <Fade in={props.open} timeout={2000}>
            <div className={classes.root}>
              <Paper className={classes.paper} elevation="0">
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <ButtonBase
                      onClick={() => {
                        props.onClose()
                      }}
                      className={classes.imgBtn}
                    >
                      <Link
                        to={`/products/${productPage}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={imgLocal}
                          title={props.item.name}
                          className={classes.img}
                        />
                      </Link>
                    </ButtonBase>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm
                    container
                    style={{ paddingLeft: "8px", paddingRight: 0 }}
                  >
                    <Grid item xs container direction="column" spacing={1}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {props.item.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {props.item.description}
                        </Typography>
                        <Typography variant="body2" color="textPrimary">
                          <Counter
                            incrementItem={props.incrementItem}
                            decrementItem={props.decrementItem}
                            removeItem={props.removeItem}
                            quantity={props.item.quantity}
                            sku={props.item.sku}
                          />{" "}
                          {/* {(props.item.currency = "eur" ? "€" : props.item.currency)}{" "} */}
                          {/* {corrPrice} */} {props.item.formattedValue}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        {" "}
                        <IconButton
                          size="small"
                          onClick={() => props.removeItem(props.item.sku)}
                          style={{ padding: 0 }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Divider variant="middle" light={true} />
            </div>
          </Fade>
        </div>
      </Slide>
    </>
  )
}

export default CartItem
