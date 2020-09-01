import React, { useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import clsx from "clsx"
import Link from "gatsby-plugin-transition-link"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Skus from "../components/Products/Skus"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { DrawerCartContext } from "../context/DrawerCartContext"
import { DrawerMenuContext } from "../context/DrawerMenuContext"
const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  // contentWrapper: {
  //   flex: "1 0 auto",
  // },

  contentToRight: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShiftToRight: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  contentToLeft: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShiftToLeft: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  const {
    openDrawerCart,
    handleDrawerCartOpen,
    handleDrawerCartClose,
  } = useContext(DrawerCartContext)

  const {
    openDrawerMenu,
    handleDrawerMenuOpen,
    handleDrawerMenuClose,
  } = useContext(DrawerMenuContext)

  return (
    <div className={classes.root} id="root">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container
        maxWidth="md"
        // className={classes.contentWrapper}
        className={clsx(
          openDrawerCart && classes.contentToLeft,
          openDrawerMenu && classes.contentToRight,
          {
            [classes.contentShiftToLeft]: openDrawerCart,
            [classes.contentShiftToRight]: openDrawerMenu,
          }
        )}
      >
        <h1>Hi people</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          itaque ratione. Omnis, dolores voluptas quia recusandae similique
          corrupti quae vero veniam id blanditiis beatae, nobis est totam. Dicta
          voluptates illo ipsum excepturi ipsam saepe dolorum molestiae,
          quisquam officia rerum illum, eaque in quaerat corporis omnis repellat
          vero sint. Exercitationem, libero, nisi ab quod atque accusantium
          voluptatum recusandae quibusdam asperiores eligendi, incidunt amet.
          Ipsa qui consequatur laboriosam libero omnis. Magnam omnis, soluta
          ipsam quaerat ut, impedit reprehenderit placeat ipsum repudiandae
          maxime aut itaque molestias amet, et sit commodi nisi! Iusto ratione
          distinctio et aperiam quaerat nisi aut odit optio impedit.
        </p>
        <Skus />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          itaque ratione. Omnis, dolores voluptas quia recusandae similique
          corrupti quae vero veniam id blanditiis beatae, nobis est totam. Dicta
          voluptates illo ipsum excepturi ipsam saepe dolorum molestiae,
          quisquam officia rerum illum, eaque in quaerat corporis omnis repellat
          vero sint. Exercitationem, libero, nisi ab quod atque accusantium
          voluptatum recusandae quibusdam asperiores eligendi, incidunt amet.
          Ipsa qui consequatur laboriosam libero omnis. Magnam omnis, soluta
          ipsam quaerat ut, impedit reprehenderit placeat ipsum repudiandae
          maxime aut itaque molestias amet, et sit commodi nisi! Iusto ratione
          distinctio et aperiam quaerat nisi aut odit optio impedit.
        </p>
      </Container>
      <Footer />
    </div>
  )
}

export default IndexPage
