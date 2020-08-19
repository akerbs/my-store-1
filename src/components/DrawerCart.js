import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import CartOverview from "../components/CartOverview"

const drawerWidth = 240

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
  }
}))

export default function DrawerCart(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
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

      <CartOverview />
    </Drawer>
  )
}
