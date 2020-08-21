import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "gatsby-plugin-transition-link"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"
import Skus from "../components/Products/Skus"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "tomato",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
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

        <Footer />
      </Container>
    </div>
  )
}

export default IndexPage
