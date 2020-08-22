import React from "react"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Counter from "./Counter"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import Divider from "@material-ui/core/Divider"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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

  // const price = props.item.price.toString()
  // const beforeDot = price.slice(0, -2)
  // const afterDot = price.slice(-2)
  // const corrPrice = `${beforeDot}.${afterDot}`

  //   <Img
  //   fluid={props.data.img1.childImageSharp.fluid}
  //   alt="Funny bunny 1"
  // />

  let photo =
    props.item.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq"
      ? "funny_bunny"
      : props.item.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9"
      ? "cat_clock"
      : props.item.sku === "price_1HHUu9HwITO0GSJrsoWoL51O"
      ? "magic_hat"
      : ""

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation="0">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ButtonBase className={classes.image}>
              <Img
                fluid={`props.data.${photo}.childImageSharp.fluid`}
                alt={props.item.name}
              />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={8}
            sm
            container
            style={{ paddingLeft: "15px", paddingRight: 0 }}
          >
            <Grid item xs container direction="column" spacing={2}>
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
              {/* <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid> */}
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
  )
}

export default CartItem

export const query = graphql`
  query {
    funny_bunny: file(
      relativePath: { eq: "products/funny_bunny/funny_bunny_1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cat_clock: file(
      relativePath: { eq: "products/cat_clock/cat_clock_1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    magic_hat: file(
      relativePath: { eq: "products/magic_hat/magic_hat_1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
