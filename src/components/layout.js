import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./layout.css"
import "@stripe/stripe-js" // https://github.com/stripe/stripe-js#import-as-a-side-effect
import { CartProvider } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"
import SimpleReactLightbox from "simple-react-lightbox"

// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(
  "pk_test_51HGUuRHwITO0GSJr0YK6FwbE17LUTst9UCvm2uH0RdjBtAnQJqgPmDn0BSunRc8FIEXRW3HatsFd1uDHkfaGJtUm00IA2780Iw"
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        currency="EUR"
        // successUrl="https://kerbs-store-1.vercel.app/success/"
        // cancelUrl="https://kerbs-store-1.vercel.app/"
        successUrl="http://localhost:8000/success/"
        cancelUrl="http://localhost:8000/"
        // successUrl={`${window.location.origin}/success/`}
        // cancelUrl={`${window.location.origin}/`}
        allowedCountries={["US", "GB", "CA", "DE"]}
        billingAddressCollection={true}
      >
        <CssBaseline />
        <SimpleReactLightbox>{children}</SimpleReactLightbox>
      </CartProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
