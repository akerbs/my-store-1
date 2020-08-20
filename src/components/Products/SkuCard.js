import React from "react"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { makeStyles } from "@material-ui/core/styles"

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

const SkuCard = ({ sku }) => {
  const classes = useStyles()
  const { addItem } = useShoppingCart()
  const [openSnackbar, setOpenSnackbar] = React.useState(false)

  const handleClick = () => {
    setOpenSnackbar(true)
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpenSnackbar(false)
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt={sku.name}
            height="300"
            image={sku.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {sku.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {sku.description}
              <br />
              Price:{" "}
              {formatCurrencyString({
                value: parseInt(sku.price),
                currency: sku.currency,
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              addItem(sku)
              handleClick()
            }}
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Item added into cart"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  )
}

export default SkuCard
