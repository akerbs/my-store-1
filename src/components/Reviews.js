import React, { useContext } from "react"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import { Link, navigate } from "gatsby"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import RateReviewIcon from "@material-ui/icons/RateReview"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "./layout"
import ReviewForm from "./ReviewForm"

const useStyles = makeStyles(theme => ({
  RatingFullReadOnly: {
    color: "rgb(89,157,210)",
  },
  button: {
    margin: theme.spacing(1),
  },
  accordion: {
    backgroundColor: "#fafafa",
    border: "none",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  accSummary: {
    border: "none",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  accSummaryContent: {
    display: "block",
    "&$expanded": {
      margin: "12px 0",
    },
  },
}))

export default function (props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const [expanded, setExpanded] = React.useState(false)

  const handleExpand = () => {
    setExpanded(true)
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Accordion
        square
        expanded={expanded}
        onChange={e => handleExpand(e)}
        classes={{
          root: classes.accordion,
        }}
      >
        <AccordionSummary
          classes={{
            root: classes.accSummary,
            content: classes.accSummaryContent,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Rating
              defaultValue={0}
              readOnly
              size="small"
              emptyIcon={
                <StarBorderIcon
                  fontSize="inherit"
                  style={{ color: "rgb(254,198,1)" }}
                />
              }
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<RateReviewIcon />}
              size="small"
            >
              {actLanguage === "DEU"
                ? "eine Bewertung schreiben"
                : actLanguage === "RUS"
                ? "написать отзыв"
                : actLanguage === "ENG"
                ? "write a review"
                : null}
            </Button>
          </div>
          <hr />
        </AccordionSummary>
        <AccordionDetails>
          <ReviewForm />
        </AccordionDetails>
      </Accordion>
      <br /> <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Rating
          defaultValue={5}
          readOnly
          size="small"
          classes={{
            iconFilled: classes.RatingFullReadOnly,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="small"
          onClick={e => {
            handleExpand(e)
            setTimeout(function () {
              navigate(`/products/${props.itemInfo.linkId}#reviews`)
            }, 300)
          }}
        >
          {actLanguage === "DEU"
            ? "als Erster eine Bewertung schreiben"
            : actLanguage === "RUS"
            ? "быть первым, кто напишет отзыв"
            : actLanguage === "ENG"
            ? "to be first to write a review"
            : null}
        </Button>
      </div>
    </Container>
  )
}
