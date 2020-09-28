import React, { useContext } from "react"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import RateReviewIcon from "@material-ui/icons/RateReview"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  RatingFullReadOnly: {
    color: "rgb(89,157,210)",
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default function ReviewForm() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6"> WRITE A REVIEW</Typography>
      <Typography variant="caption" style={{ color: "tomato" }}>
        * <Typography variant="caption">Indicates a required field</Typography>
      </Typography>
    </div>
  )
}
