import React from "react"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import Counter from "./Counter"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
  },
  image: {
    width: "100px",
    height: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100px",
    height: "auto",
  },
}))

const CartItem = props => {
  const classes = useStyles()

  const price = props.item.price.toString()
  const beforeDot = price.slice(0, -2)
  const afterDot = price.slice(-2)
  const corrPrice = `${beforeDot}.${afterDot}`

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ButtonBase className={classes.image}>
              <img
                src={props.item.image}
                title={props.item.name}
                className={classes.img}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.item.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <Counter
                    incrementItem={props.incrementItem}
                    decrementItem={props.decrementItem}
                    removeItem={props.removeItem}
                    quantity={props.item.quantity}
                    sku={props.item.sku}
                  />{" "}
                  {(props.item.currency = "eur" ? "€" : props.item.currency)}{" "}
                  {corrPrice}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {" "}
                <IconButton
                  size="small"
                  onClick={() => props.removeItem(props.item.sku)}
                >
                  <HighlightOffIcon />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Divider />
    </div>
  )
}

export default CartItem
