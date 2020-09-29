import React, { useContext, useState } from "react"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import RateReviewIcon from "@material-ui/icons/RateReview"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import FormControl from "@material-ui/core/FormControl"

const useStyles = makeStyles(theme => ({
  RatingFullReadOnly: {
    color: "rgb(89,157,210)",
  },
  button: {
    margin: theme.spacing(1),
  },
  // formControl: {
  //   margin: theme.spacing(0),
  //   width: 185,
  // },
}))

const schema = yup.object().shape({
  rating: yup
    .string()
    // .nullable()
    .required("Please enter a star rating for this review"),
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

export default function ReviewForm() {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  debugger
  const errorRating =
    errors.hasOwnProperty("rating") && errors["rating"].message
  const errorTitle = errors.hasOwnProperty("title") && errors["title"].message
  const errorReview =
    errors.hasOwnProperty("review") && errors["review"].message
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  const [ratingValue, setRatingValue] = useState(0)

  console.log("ratingValue", ratingValue)

  // const defaultValues = {
  //   rating: 0,
  // }

  const {
    register,
    handleSubmit,
    control,
    reset,
    errors,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues,
  })

  const handleRatingValueChange = event => {
    ratingValue(event.target.value)
    // setValue(event.target.value)
  }

  async function onSubmit(data) {
    await console.log("FORM---DATA:", data)
  }

  return (
    <div className={classes.root}>
      <Typography variant="body2"> WRITE A REVIEW</Typography>
      <br />
      <Typography variant="caption" style={{ color: "tomato" }}>
        *{" "}
      </Typography>
      <Typography variant="caption">Indicates a required field</Typography>
      <br /> <br /> <br />
      <Typography variant="caption" style={{ color: "tomato" }}>
        *{" "}
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={classes.form}
      >
        {/* <FormControl className={classes.formControl}> */}
        <Typography variant="caption">Score:</Typography>
        <Rating
          // defaultValue=""
          onChange={handleRatingValueChange}
          value={ratingValue}
          name="rating"
          control={control}
          error={!!errorRating}
          helperText={errorRating}
          // inputRef={register}
          emptyIcon={
            <StarBorderIcon
              fontSize="inherit"
              style={{ color: "rgb(254,198,1)" }}
            />
          }
        />
        {/* <FormControl className={classes.formControl}>
  <InputLabel id="demo-simple-select-label">
                      Score:
                    </InputLabel>

                    <Controller
                      as={
                        <Select>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={11}>11-15</MenuItem>
                          <MenuItem value={16}>16-20</MenuItem>
                          <MenuItem value={20}>20+</MenuItem>
                        </Select>
                      }
                      name="rating"
                      rules={{ required: "this is required" }}
                      control={control}
                      defaultValue=""
                      error={!!errorRating}
                      helperText={errorRating}
                      // inputRef={register({
                      //   required: true,
                      // })}
                    />
</FormControl> */}
        <TextField
          // inputProps={{
          //   style: {
          //     padding: inputPadding,
          //   },
          // }}
          // margin="dense"
          fullWidth={true}
          className={classes.formElement}
          type="text"
          name="title"
          label={
            actLanguage === "DEU"
              ? "Titel:"
              : actLanguage === "RUS"
              ? "Заголовок:"
              : actLanguage === "ENG"
              ? "Title:"
              : null
          }
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errorTitle}
          helperText={errorTitle}
        />
        <TextField
          // margin="dense"
          fullWidth={true}
          className={classes.formElement}
          type="text"
          name="review"
          label={
            actLanguage === "DEU"
              ? "Bewertung:"
              : actLanguage === "RUS"
              ? "Отзыв:"
              : actLanguage === "ENG"
              ? "Review:"
              : null
          }
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errorReview}
          helperText={errorReview}
        />
        <TextField
          // margin="dense"
          fullWidth={false}
          className={classes.formElement}
          type="text"
          name="name"
          placeholder={
            actLanguage === "DEU"
              ? "Ihr Name"
              : actLanguage === "RUS"
              ? "Ваше имя"
              : actLanguage === "ENG"
              ? "Your name"
              : null
          }
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errorName}
          helperText={errorName}
        />
        {/* </FormControl>
      <FormControl className={classes.formControl}> */}
        <TextField
          fullWidth={false}
          // margin="dense"
          className={classes.formElement}
          type="email"
          name="email"
          placeholder={
            actLanguage === "DEU"
              ? "Email"
              : actLanguage === "RUS"
              ? "Эл. адрес"
              : actLanguage === "ENG"
              ? "Email"
              : null
          }
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errorEmail}
          helperText={errorEmail}
        />
        {/* </FormControl> */}
        <Button
          fullWidth={false}
          id="submit"
          name="submit"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.btn}
          size="small"
        >
          post
        </Button>
      </form>
    </div>
  )
}
