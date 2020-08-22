import React from "react"

export default function OldPrice(props) {
  return (
    <p style={{ textDecoration: "line-through solid red" }}>
      {props.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq" ? "999,00 €" : ""}
      {props.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9" ? "55,00 €" : ""}
    </p>
  )
}
