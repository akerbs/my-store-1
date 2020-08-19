import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Badge from "@material-ui/core/Badge"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"
import DrawerMenu from "./DrawerMenu"
import DrawerCart from "./DrawerCart"
import { useShoppingCart } from "use-shopping-cart"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  shoppingCartButton: {},
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [openCart, setOpenCart] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleCartDrawerOpen = () => {
    setOpenCart(true)
  }
  const handleCartDrawerClose = () => {
    setOpenCart(false)
  }

  const { cartCount } = useShoppingCart()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleCartDrawerOpen}
              edge="end"
              className={clsx(
                classes.shoppingCartButton,
                openCart && classes.hide
              )}
            >
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <DrawerMenu onClose={handleDrawerClose} open={open} />
      <DrawerCart onClose={handleCartDrawerClose} open={openCart} />
    </div>
  )
}
