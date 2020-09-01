import React, { useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Badge from "@material-ui/core/Badge"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import DrawerMenu from "./DrawerMenu"
import DrawerCart from "./DrawerCart"
import { useShoppingCart } from "use-shopping-cart"
import Link from "gatsby-plugin-transition-link"
import { DrawerCartContext } from "../context/DrawerCartContext"
const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShiftToRight: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: 100,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftToLeft: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

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
  const { cartCount } = useShoppingCart()
  const [openDrawerMenu, setOpenDrawerMenu] = React.useState(false)
  const {
    openDrawerCart,
    handleDrawerCartOpen,
    handleDrawerCartClose,
  } = useContext(DrawerCartContext)

  const handleDrawerMenuOpen = () => {
    setOpenDrawerMenu(true)
    document.body.style.position = "fixed"
  }
  const handleDrawerMenuClose = () => {
    setOpenDrawerMenu(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShiftToLeft]: openDrawerCart,
            [classes.appBarShiftToRight]: openDrawerMenu,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerMenuOpen}
              edge="start"
              className={clsx(
                classes.menuButton,
                openDrawerMenu && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              <Link to="/"> Logo </Link>
            </Typography>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerCartOpen}
              edge="end"
              className={clsx(
                classes.menuButton,
                openDrawerCart && classes.hide
              )}
            >
              <Badge badgeContent={cartCount} color="secondary" variant="dot">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <DrawerMenu onClose={handleDrawerMenuClose} open={openDrawerMenu} />
      <DrawerCart onClose={handleDrawerCartClose} open={openDrawerCart} />
    </div>
  )
}
