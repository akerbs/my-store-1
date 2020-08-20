import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CSSTransition } from "react-transition-group"

const useStyles = makeStyles(theme => ({
  inner: {
    display: "flex",
    justifyContent: "center",
  },
  other: {
    fontFamily: "Poppins",
    marginTop: "200px",
    width: "340px",
    fontWeight: 300,
    lineHeight: "24px",
    fontSize: "14px",
  },
}))

const SuccessPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.inner}>
      <Title lineContent="Hello World" lineContent2="I'm Anatol K." />
      <p className={classes.other}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        autem nostrum commodi magnam doloribus laborum sed blanditiis facilis
        quisquam provident in ipsam similique magni quidem voluptatum, nulla ut?
        Pariatur saepe odio quia aspernatur ipsam cumque qui ipsa laudantium,
        mollitia nihil voluptatibus ea aliquid soluta vero nulla sint quas!
        Libero, id.
      </p>
    </div>
  )
}

export default SuccessPage
