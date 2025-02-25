import React, { useState, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Link } from "gatsby"
import payCard1 from "../images/payCards/dark/1.png"
import payCard2 from "../images/payCards/dark/2.png"
import payCard3 from "../images/payCards/dark/3.png"
import payCard4 from "../images/payCards/dark/5.png"
import payCard5 from "../images/payCards/dark/22.png"
import payCard6 from "../images/payCards/googlePay.svg"
import payCard7 from "../images/payCards/applePay.svg"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"
import SubscribeFormFooter from "./Subscribe/SubscribeFormFooter"
const window = require("global/window")

// const footerPaddingTop = window.innerWidth <= 599 ? "20%" : "5%"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: "100%",

    padding: "5% 2% 0% 7%",

    [theme.breakpoints.down("sm")]: {
      padding: "20% 5% 0% 5%",
    },
  },
  // content: {
  //   marginTop: footerMarginTop,
  //   color: "black",
  // },

  title: {
    marginBottom: 20,
  },
  title2: {
    marginBottom: "3%",
  },
  payCards: {
    display: "flex",
    marginTop: 20,
  },
  payCardItem: {
    width: 32,
    height: 20,
    marginRight: 5,
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white",
    },
  },
}))

export default function () {
  const classes = useStyles()
  const [show, setShow] = useState(false)

  function startInView() {
    setShow(true)
  }
  function stopInView() {
    setShow(false)
  }

  useEffect(() => {
    inView("#selector").once("enter", startInView)
    inView.threshold(0.2)
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ overflow: "hidden" }} id="selector">
        <Slide in={show} timeout={1000} direction="up">
          <div>
            {/* <Container maxWidth="md" className={classes.content}> */}
            <Grid container className={classes.root} spacing={10}>
              <Grid item md={4}>
                <Typography variant="body2" className={classes.title}>
                  CONTACTS
                </Typography>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque incidunt dolorem aut explicabo aliquid. Quae officiis
                  voluptate nemo dolore cum animi inventore possimus, beatae
                  incidunt praesentium.
                </Typography>
                <div className={classes.payCards}>
                  <img
                    src={payCard1}
                    title="visa"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard2}
                    title="master card"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard3}
                    title="maestro"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard4}
                    title="pay pal"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard5}
                    title="american express"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard6}
                    title="google pay"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard7}
                    title="apple pay"
                    className={classes.payCardItem}
                  />
                </div>
              </Grid>
              <Grid item md={4}>
                <Typography variant="body2" className={classes.title}>
                  SERVICES
                </Typography>
                <Typography variant="caption">
                  <Link to="#" className={classes.link} key="termsOfService">
                    Terms of Service
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="returnsAndRefund">
                    Returns & Refund
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="privacyPolicy">
                    Privacy Policy
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="shippingPolicy">
                    Shipping Policy
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="aboutUs">
                    About us
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="contactUs">
                    Contact us
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="body2" className={classes.title2}>
                  JOIN OUR NEWSLETTER
                </Typography>
                <SubscribeFormFooter />
                <Typography variant="body2" className={classes.title2}>
                  FOLLOW US
                </Typography>
                <Link to="#" className={classes.link}>
                  <FacebookIcon />
                </Link>
                <Link to="#" className={classes.link}>
                  <InstagramIcon />
                </Link>
              </Grid>
            </Grid>
            <div
              style={{
                textAlign: "center",
                minHeight: "50px",
              }}
            >
              © {new Date().getFullYear()}, MyStore
            </div>
            {/* </Container> */}
          </div>
        </Slide>
      </div>
    </div>
  )
}
