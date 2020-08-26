import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "gatsby-plugin-transition-link"
import SEO from "../components/seo"
import { useShoppingCart } from "use-shopping-cart"
const window = require("global/window")

const SuccessPage = () => {
  const { clearCart } = useShoppingCart()

  window.onload = clearCart

  return (
    <>
      <SEO title="Page success" />
      <CssBaseline />
      <h1>Hi from the success page</h1>
      <p>Successful!!!</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default SuccessPage
