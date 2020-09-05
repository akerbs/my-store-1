import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
// import Link from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import payCard1 from "../images/payCards/dark/1.png"
import payCard2 from "../images/payCards/dark/2.png"
import payCard3 from "../images/payCards/dark/3.png"
import payCard4 from "../images/payCards/dark/5.png"
import payCard5 from "../images/payCards/dark/22.png"
import payCard6 from "../images/payCards/googlePay.svg"
import payCard7 from "../images/payCards/applePay.svg"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
  },
  title: {
    marginBottom: 20,
  },
  title2: {
    marginBottom: 10,
  },
  textFieldEmail: {
    marginRight: 5,
    marginBottom: 3,
  },
  btnSubscribe: {
    marginBottom: 30,
    marginTop: 1,
  },
  payCards: {
    display: "flex",
    marginTop: 20,
  },
  payCardItem: {
    width: 35,
    marginRight: 5,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.root} spacing={3}>
        <Grid item md={4}>
          <Typography variant="body2" className={classes.title}>
            CONTACTS
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            incidunt dolorem aut explicabo aliquid. Quae officiis voluptate nemo
            dolore cum animi inventore possimus, beatae incidunt praesentium.
          </Typography>

          <div className={classes.payCards}>
            <img src={payCard1} title="visa" className={classes.payCardItem} />
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
            <Link to="/services/terms">Terms of Service</Link>
            <br />
            <Link to="/services/returns">Returns & Refund</Link>
            <br />
            <Link to="/services/privacy-policy">Privacy Policy</Link>
            <br />
            <Link to="/services/shipping-policy">Shipping Policy</Link>
            <br />
            <Link to="/services/about-us">About us</Link>
            <br />
            <Link to="/services/contact-us">Contact us</Link>
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="body2" className={classes.title2}>
            JOIN OUR NEWSLETTER
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your email address..."
            variant="outlined"
            size="small"
            className={classes.textFieldEmail}
          />
          <Button
            variant="outlined"
            color="default"
            className={classes.btnSubscribe}
            // size="small"
          >
            Subscribe
          </Button>
          <Typography variant="body2" className={classes.title2}>
            FOLLOW US
          </Typography>
          <FacebookIcon /> <InstagramIcon />
        </Grid>
      </Grid>
      <div
        style={{
          textAlign: "center",
          minHeight: "50px",
        }}
      >
        © {new Date().getFullYear()}, Gatsby
      </div>
    </Container>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
