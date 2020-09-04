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
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "gatsby-plugin-transition-link"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
  },
  title: {
    marginBottom: 20,
  },
  btnSubscribe: {
    marginTop: 5,
    marginBottom: 20,
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
        </Grid>
        <Grid item md={4}>
          <Typography variant="body2" className={classes.title}>
            SERVICES
          </Typography>
          <Typography variant="caption">
            <Link to="/main">Terms of Service</Link>
            <br />
            <Link to="/main">Returns & Refund</Link>
            <br />
            <Link to="/main">Privacy Policy</Link>
            <br />
            <Link to="/main">Shipping Policy</Link>
            <br />
            <Link to="/main">About us</Link>
            <br />
            <Link to="/main">Contact us</Link>
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="body2" className={classes.title}>
            JOIN OUR NEWSLETTER
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your email address..."
            variant="outlined"
            size="small"
          />
          <Button
            variant="outlined"
            color="default"
            className={classes.btnSubscribe}
            size="small"
          >
            Subscribe
          </Button>
          <Typography variant="body2" className={classes.title}>
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
