import React from "react"
import { makeStyles } from "@material-ui/core/styles"
const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {
    textDecorationLine: "line-through",
    // textDecorationColor: "red",
    // color: "gray",
    textDecorationStyle: "solid",
    display: "inline",
  },
}))

export default function OldPrice(props) {
  const classes = useStyles()
  return (
    <p className={classes.root}>
      {props.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq"
        ? window.innerWidth <= 599
          ? "€999,00"
          : "999,00 €"
        : ""}
      {props.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9"
        ? window.innerWidth <= 599
          ? "€55,00"
          : "55,00 €"
        : ""}
    </p>
  )
}
