import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import CartOverview from "./Cart/CartOverview"
const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  cartTitle: {
    flexGrow: 1,
  },
}))

export default function DrawerCart(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      transitionDuration={{ enter: 400, exit: 300 }}
      className={classes.drawer}
      onEscapeKeyDown={props.onClose}
      onBackdropClick={props.onClose}
      variant="temporary"
      anchor="right"
      open={props.open}
      onClose={props.onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="body1" className={classes.cartTitle}>
          Cart
        </Typography>
        <IconButton onClick={props.onClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>

      <CartOverview
        onClose={props.handleCartDrawerClose}
        open={props.openCart}
      />
    </Drawer>
  )
}
