import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Link from "gatsby-plugin-transition-link"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 80,
    margin: 0,
    paddingRight: 5,
  },
  icon: {
    paddingLeft: 3,
  },
}))

export default function SelectLanguage() {
  const classes = useStyles()
  const [language, setLanguage] = React.useState("Deu")

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          classes={{
            icon: classes.icon,
          }}
          disableUnderline={true}
          autoWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={language}
          onChange={e => {
            handleChange(e)
          }}
          // onChange={handleCurrencyChange}
          style={{ color: "white" }}
        >
          <MenuItem value={"Eng"}>🇬🇧</MenuItem>
          <MenuItem value={"Deu"}>🇩🇪</MenuItem>
          <MenuItem value={"Rus"}>🇷🇺</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
