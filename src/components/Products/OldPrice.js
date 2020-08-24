import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
root: {
 
   textDecorationLine: 'line-through',
     textDecorationColor: "red",
    textDecorationStyle: "solid",
    display: "inline" 

}
}))
  

export default function OldPrice(props) {
    const classes = useStyles()
  return (
    <p className={classes.root}>
      {props.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq" ? "999,00" : ""}
      {props.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9" ? "55,00" : ""}
    </p>
  )
}
