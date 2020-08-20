import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import TransitionLink from "gatsby-plugin-transition-link"
import Header from "../components/header"
import Footer from "../components/footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "lime",
  },
  inner: {
    marginTop: "200px",
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
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <div className={classes.inner}>
          <Title lineContent="Hello World" lineContent2="I'm Anatol K." />
          <p className={classes.other}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            autem nostrum commodi magnam doloribus laborum sed blanditiis
            facilis quisquam provident in ipsam similique magni quidem
            voluptatum, nulla ut? Pariatur saepe odio quia aspernatur ipsam
            cumque qui ipsa laudantium, mollitia nihil voluptatibus ea aliquid
            soluta vero nulla sint quas! Libero, id.
          </p>
        </div>
        <AniLink
          to="/"
          // paintDrip
          // color="rebeccapurple"
          // hex="#334b99"
          //////////////////
          cover
          // bg="#334b99"
          bg="
          url(https://source.unsplash.com/random)
          center / cover   /* position / size */
          no-repeat        /* repeat */
          fixed            /* attachment */
          padding-box      /* origin */
          content-box      /* clip */
          white            /* color */
        "
          //////////////////
          // swipe
          // fade
          duration={3}
          direction="up"
          top="entry"
          // top="exit"
          entryOffset={80}
        >
          Go to Home Page
        </AniLink>
        <Footer />
      </Container>
    </div>
  )
}

export default SuccessPage
