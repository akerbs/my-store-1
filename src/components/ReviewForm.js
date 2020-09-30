import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useForm } from "react-hook-form"
import Rating from "@material-ui/lab/Rating"
import * as yup from "yup"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import { yupResolver } from "@hookform/resolvers"
import { LanguageContext } from "../components/layout"

const useStyles = makeStyles(theme => ({
  RatingFullReadOnly: {
    color: "rgb(89,157,210)",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const schema = yup.object().shape({
  // rating: yup
  //   .string()
  //   .nullable()
  //   .required("Please enter a star rating for this review"),
  title: yup
    .string()
    .required("Review's title can't be empty")
    .min(5, "Title must be at-least 5 characters")
    .max(20, "Name must be 20 characters or less"),
  review: yup
    .string()
    .required("Review's  body can't be empty")
    .min(5, "Review must be at-least 5 characters")
    .max(30, "Name must be 30 characters or less"),
  name: yup
    .string()
    .required("Name field can't be empty")
    .min(3, "Name must be at-least 3 characters")
    .max(20, "Name must be 20 characters or less"),
  email: yup
    .string()
    .required("Email field can't be empty")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Invalid email"
    ),
  // .email('Please check your email')
})

export default function Create() {
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const [rating, setRating] = useState(" ")
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  })

  // const errorRating =
  //   errors.hasOwnProperty("rating") && errors["rating"].message
  const errorTitle = errors.hasOwnProperty("title") && errors["title"].message
  const errorReview =
    errors.hasOwnProperty("review") && errors["review"].message
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  const onSubmit = data => {
    if (rating === " ") {
      const ratingErrorFieldEl = document.getElementById("ratingErrorField")
      ratingErrorFieldEl.style.display = "block"
    } else {
      console.log(data)
    }
  }

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography variant="body2">
        {actLanguage === "DEU"
          ? "EINE BEWERTUNG SCHREIBEN"
          : actLanguage === "RUS"
          ? "НАПИСАТЬ ОТЗЫВ"
          : actLanguage === "ENG"
          ? " WRITE A REVIEW"
          : null}
      </Typography>
      <br />
      <Typography variant="caption" style={{ color: "tomato" }}>
        *{" "}
      </Typography>
      <Typography variant="caption">
        {actLanguage === "DEU"
          ? "Markiert eine notwendiges Feld"
          : actLanguage === "RUS"
          ? "Обозначает обязательное поле"
          : actLanguage === "ENG"
          ? "Indicates a required field"
          : null}
      </Typography>
      <br /> <br />
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
          *{" "}
        </Typography>
        <Typography variant="caption">
          {actLanguage === "DEU"
            ? "Score:"
            : actLanguage === "RUS"
            ? "Оценка:"
            : actLanguage === "ENG"
            ? "Score:"
            : null}
        </Typography>
        <br />
        <span
          id="ratingErrorField"
          style={{
            display: "none",
            color: "rgb(244,67,54)",
            fontSize: "10",
            transform: `scale(0.88)`,
            marginLeft: "-4.8%",
          }}
        >
          Please enter a star rating for this review
        </span>
        <FormControlLabel
          control={
            <>
              <input
                name="rating"
                type="number"
                value={rating}
                ref={register}
                hidden
                readOnly
              />
              <Rating
                style={{ marginLeft: "6%" }}
                name="rating"
                value={rating}
                control={control}
                precision={1}
                onChange={(_, value) => {
                  setRating(value)
                  // console.log("r a t i n g", value)
                  if (value !== " ") {
                    const ratingErrorFieldEl = document.getElementById(
                      "ratingErrorField"
                    )
                    ratingErrorFieldEl.style.display = "none"
                  }
                }}
                emptyIcon={
                  <StarBorderIcon
                    fontSize="inherit"
                    style={{ color: "rgb(254,198,1)" }}
                  />
                }
              />
            </>
          }
          // label="select rating"
        />
        <br /> <br />
        <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
          *{" "}
        </Typography>
        <Typography variant="caption">
          {actLanguage === "DEU"
            ? "Titel:"
            : actLanguage === "RUS"
            ? "Заголовок:"
            : actLanguage === "ENG"
            ? "Title:"
            : null}
        </Typography>
        <br />
        <TextField
          id="title"
          variant="outlined"
          // margin="normal"
          fullWidth
          size="small"
          name="title"
          autoFocus
          inputRef={register()}
          error={!!errorTitle}
          helperText={errorTitle}
        />
        <br />
        <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
          *{" "}
        </Typography>
        <Typography variant="caption">
          {actLanguage === "DEU"
            ? "Bewertung:"
            : actLanguage === "RUS"
            ? "Отзыв:"
            : actLanguage === "ENG"
            ? "Review:"
            : null}
        </Typography>
        <br />
        <TextField
          id="review"
          variant="outlined"
          // margin="normal"
          fullWidth
          name="review"
          autoFocus
          multiline
          rows={4}
          inputRef={register()}
          error={!!errorReview}
          helperText={errorReview}
        />
        <br /> <br />
        <br />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div>
            <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
              *{" "}
            </Typography>
            <Typography variant="caption">
              {actLanguage === "DEU"
                ? "Ihr Name:"
                : actLanguage === "RUS"
                ? "Ваше имя:"
                : actLanguage === "ENG"
                ? "Your name:"
                : null}
            </Typography>
            <br />
            <TextField
              id="name"
              style={{ marginRight: "1%", marginTop: 0 }}
              variant="outlined"
              margin="normal"
              size="small"
              name="name"
              autoFocus
              inputRef={register()}
              error={!!errorName}
              helperText={errorName}
            />
          </div>
          <div>
            <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
              *{" "}
            </Typography>
            <Typography variant="caption">
              {actLanguage === "DEU"
                ? "Email:"
                : actLanguage === "RUS"
                ? "Эл. адрес:"
                : actLanguage === "ENG"
                ? "Email:"
                : null}
            </Typography>
            <br />
            <TextField
              style={{ marginTop: 0 }}
              id="email"
              variant="outlined"
              margin="normal"
              size="small"
              type="email"
              name="email"
              autoFocus
              inputRef={register()}
              error={!!errorEmail}
              helperText={errorEmail}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{
              marginTop: 0,
            }}
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  )
}
