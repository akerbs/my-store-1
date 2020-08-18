import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import "./layout.css"
import "@stripe/stripe-js" // https://github.com/stripe/stripe-js#import-as-a-side-effect
import { CartProvider } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"

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
        currency="USD"
        successUrl={`${window.location.origin}/success/`}
        cancelUrl={`${window.location.origin}/`}
        allowedCountries={["US", "GB", "CA"]}
        billingAddressCollection={true}
      >
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>

          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </CartProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
