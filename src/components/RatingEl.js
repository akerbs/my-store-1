import React, { useContext } from "react"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import RateReviewIcon from "@material-ui/icons/RateReview"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}))

export default function RatingEl() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Rating
        defaultValue={0}
        size="small"
        readOnly
        emptyIcon={
          <StarBorderIcon
            fontSize="inherit"
            style={{ color: "rgb(254,198,1)", cursor: "pointer" }}
          />
        }
      />
    </div>
  )
}
