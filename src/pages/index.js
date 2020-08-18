import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>

    <CartOverview />
    <Skus />
  </Layout>
)

export default IndexPage
