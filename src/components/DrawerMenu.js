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
import Link from "gatsby-plugin-transition-link"
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
}))

export default function DrawerMenu(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      className={classes.drawer}
      onEscapeKeyDown={props.onClose}
      onBackdropClick={props.onClose}
      variant="temporary"
      anchor="left"
      open={props.open}
      onClose={props.onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.onClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>

      <List>
        <Link
          to="#"
          // className={classes.drawerItem}
          // activeClassName={classes.active}
          // onClick={handleDrawerClose}
        >
          <ListItem button key={"HOME"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  HOME
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Link
          to="#"
          // className={classes.drawerItem}
          // activeClassName={classes.active}
          // onClick={handleDrawerClose}
        >
          <ListItem button key={"ABOUT US"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  ABOUT US
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Link
          to="#"
          // className={classes.drawerItem}
          // activeClassName={classes.active}
          // onClick={handleDrawerClose}
        >
          <ListItem button key={"TRENDS"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  TRENDS
                </Typography>
              }
            />
          </ListItem>
        </Link>

        <Link
          to="#"
          // className={classes.drawerItem}
          // activeClassName={classes.active}
          // onClick={handleDrawerClose}
        >
          <ListItem button key={"CONTACT US"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  CONTACT US
                </Typography>
              }
            />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}
