import React, { useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import SEO from "../../components/seo"
import ProductPageTemplate from "../../templates/ProductPageTemplate"
import { ItemsContext } from "../../context/ItemsContext"

export default function () {
  const { products } = useContext(ItemsContext)

  const Obj = products.filter(x => {
    return x.productId === "prod_HrDKbPKHBo6qPK"
  })

  const item = Obj[0]

  console.log("OUE", item)

  return (
    <>
      <SEO title="Magic hat" keywords={[`gatsby`, `application`, `react`]} />
      <ProductPageTemplate item={item} />
    </>
  )
}
