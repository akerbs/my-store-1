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
import { LanguageContext } from "../layout"
import ReviewForm from "./ReviewForm"
import RatingEl from "./RatingEl"

const useStyles = makeStyles(theme => ({
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

  const handleAccOpen = () => {
    setExpanded(true)
  }
  const handleAccClose = () => {
    setExpanded(false)
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Accordion
        square
        expanded={expanded}
        onChange={e => handleAccOpen(e)}
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
            <RatingEl ratingValue={props.averageRatingValue} />
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
          <ReviewForm
            itemInfo={props.itemInfo}
            handleAccClose={handleAccClose}
          />
        </AccordionDetails>
      </Accordion>
      <br /> <br />
      {!props.itemInfo.reviews.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RatingEl
            ratingValue={5}
            starsSize="small"
            starsColor="rgb(89,157,210)"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="small"
            onClick={e => {
              handleAccOpen(e)
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
      ) : (
        <div>
          {actLanguage === "DEU"
            ? "Bewertungen"
            : actLanguage === "RUS"
            ? "Отзывы"
            : actLanguage === "ENG"
            ? "Reviews"
            : null}{" "}
          ({props.itemInfo.reviews.length})
          <hr />
          {props.itemInfo.reviews.map((rev, i) => (
            // <div key={`rev-${i}`}>{rev.review}</div>
            <ReviewItem {...rev} key={`rev-${i}`} />
          ))}
        </div>
      )}
    </Container>
  )
}
const ReviewItem = props => {
  // const [price, setPrice] = useState(props.price);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{props.name} Verified Buyer</span>
          <RatingEl ratingValue={props.rating} starsSize="small" />

          <span>{props.title}</span>
          <span>{props.review}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{props.date}</span>
        </div>
      </div>
      <hr />
    </>
  )
}
