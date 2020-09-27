import React, { useContext } from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { LanguageContext } from "../components/layout"

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState("panel1")
  const { actLanguage } = useContext(LanguageContext)

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            {actLanguage === "DEU"
              ? "Produktbeschreibung"
              : actLanguage === "RUS"
              ? "Описание товара"
              : actLanguage === "ENG"
              ? "Product description"
              : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.data.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            {actLanguage === "DEU"
              ? "Spezifikationen"
              : actLanguage === "RUS"
              ? "Характеристики"
              : actLanguage === "ENG"
              ? "Specifications"
              : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            – Print: 1-color overall screen print
            <br />
            – Size: 45×65 cm
            <br />
            – Pouch size: 13×15,5 cm
            <br />
            – Cotton & rip-stop nylon mix
            <br />
            – Reusable/eco-friendly
            <br />
            – Water-resistant
            <br />
            – Machine-washable
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            {actLanguage === "DEU"
              ? "Versand & Rückgabe"
              : actLanguage === "RUS"
              ? "Доставка и возврат"
              : actLanguage === "ENG"
              ? " Shipping & Returns"
              : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Have a question about shipping and need more information? Please
            visit our Shipping FAQ page.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
