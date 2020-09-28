import React, { useState, useContext, useEffect, useRef } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "@material-ui/core/Container"
import "swiper/swiper-bundle.css"
import "./swiper.css"
import "./clearfix.css"
import SwiperCore, {
  Thumbs,
  Zoom,
  Navigation,
  EffectFade,
  Pagination,
} from "swiper"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import { SRLWrapper } from "simple-react-lightbox"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { MainSwiper, ThumbsSwiper } from "../components/Swipers"

import Button from "@material-ui/core/Button"
import { DrawerCartContext } from "../context/DrawerCartContext"
import { CurrencyContext } from "../components/layout"
import { LanguageContext } from "../components/layout"

import ShareIcon from "@material-ui/icons/Share"
import Typography from "@material-ui/core/Typography"
import BreadCrumbs from "../components/BreadCrumbs"

import Link from "gatsby"
import Counter from "../components/CounterBig"
import Rating from "../components/Rating"
import Accordion from "../components/Accordion"
import Tabs from "../components/Tabs"
import inView from "in-view"
import VideoYT from "../components/VideoYT"

const document = require("global/document")
const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
  },
  contentWrapper: {
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    // flex: "0 0 auto",

    marginTop: "3%",
    [theme.breakpoints.down("sm")]: {},
  },
  // clearfix: {
  //   "&::after": {
  //     content: "",
  //     display: "block",
  //     clear: "both",
  //   },

  boxLeft: {
    // border: "1px solid rgba(0, 0, 0, 0.05)",
    float: "left",
    width: "50%",
    padding: 0,
    margin: 0,
  },
  imgBoxLeft: {
    marginBottom: 0,
    paddingBottom: 0,
    display: "block",
  },
  // boxRight: {
  //   // b  order: "1px solid rgba(0, 0, 0, 0.05)",
  //   padding: "8%",
  //   margin: 0,
  //   marginBottom: "2rem",
  //   position: "sticky",
  //   position: "-webkit-sticky",
  //   top: " 5rem",
  //   float: "right",

  //   width: "49.48%",
  // },
  btn: {
    width: 225,
    minWidth: 225,
    maxWidth: 225,
    fontSize: 15,
    fontWeight: "bold",
  },
}))

SwiperCore.use([Thumbs, Zoom, Navigation, EffectFade, Pagination])
const lightboxOptions = {
  settings: {},
  caption: { showCaption: false },
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
    showFullscreenButton: false,
    size: "50px",
  },
  thumbnails: { showThumbnails: false },
}
const lightboxCallbacks = {
  onLightboxOpened: () => {
    document.body.style.position = "fixed"
  },
  onLightboxClosed: () => {
    const scrollY = document.body.style.top
    document.body.style.position = ""
  },
}

function ProductPageTemplate(props) {
  const classes = useStyles()
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)
  const {
    addItem,
    redirectToCheckout,
    incrementItem,
    decrementItem,
    removeItem,
  } = useShoppingCart()
  const { handleDrawerCartOpen } = useContext(DrawerCartContext)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [quantityOfItem, setQuantityOfItem] = useState(1)
  const [loading, setLoading] = useState(false)
  const [itemInView, setItemInView] = useState(null)

  useEffect(() => {
    console.log("BROWSING WORKS")
    setItemInView(itemInfo.productId)
    console.log(itemInfo.productId, "is browsing")
  })

  function increment() {
    setQuantityOfItem(quantityOfItem + 1)
  }
  function decrement() {
    setQuantityOfItem(quantityOfItem - 1)
  }
  const itemInfo = {
    name:
      actLanguage === "ENG"
        ? props.item.nameEng
        : actLanguage === "DEU"
        ? props.item.nameDeu
        : actLanguage === "RUS"
        ? props.item.nameRus
        : null,
    description:
      actLanguage === "ENG"
        ? props.item.descriptionEng
        : actLanguage === "DEU"
        ? props.item.descriptionDeu
        : actLanguage === "RUS"
        ? props.item.descriptionRus
        : null,
    productId: props.item.productId,
    videoId: props.item.videoId,

    sku:
      actCurrency === "USD"
        ? props.item.skuUsd
        : actCurrency === "EUR"
        ? props.item.skuEur
        : actCurrency === "RUB"
        ? props.item.skuRub
        : null,
    price:
      actCurrency === "USD"
        ? props.item.priceUsd
        : actCurrency === "EUR"
        ? props.item.priceEur
        : actCurrency === "RUB"
        ? props.item.priceRub
        : null,
    currency:
      actCurrency === "USD"
        ? props.item.currencyUsd
        : actCurrency === "EUR"
        ? props.item.currencyEur
        : actCurrency === "RUB"
        ? props.item.currencyRub
        : null,
    currencySign:
      actCurrency === "USD"
        ? props.item.currencySignUsd
        : actCurrency === "EUR"
        ? props.item.currencySignEur
        : actCurrency === "RUB"
        ? props.item.currencySignRub
        : null,
    image: props.item.firstImg,
    firstImg: props.item.firstImg,
    scndImg: props.item.scndImg,
    hovered: props.item.hovered,
  }
  function handleClick(event) {
    event.preventDefault()
    console.info("You clicked a breadcrumb.")
  }

  console.log("DATA:", itemInfo)

  return (
    <div className={classes.root} id="root">
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container className={classes.contentWrapper} id="wrapper">
        <Hidden smDown id="big">
          <div id="content" className="clearfix">
            <div className={classes.boxLeft}>
              <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
              <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
              <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
              <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
              <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
              <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
            </div>

            <div className="boxRight">
              <BreadCrumbs data={itemInfo} />
              <br />
              <Typography variant="h4">
                <b>{itemInfo.name}</b>
              </Typography>
              <br />
              <Typography variant="h5">
                {formatCurrencyString({
                  currency: itemInfo.currency,
                  value: parseInt(itemInfo.price),
                })}
              </Typography>
              <br />
              <Rating />
              <br /> <br />
              <Counter
                incrementItem={increment}
                decrementItem={decrement}
                quantity={quantityOfItem}
                sku={itemInfo}
              />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                }}
              >
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  // className={classes.btn1}
                  onClick={() => {
                    addItem(itemInfo, quantityOfItem)
                    handleDrawerCartOpen()
                  }}
                >
                  {actLanguage === "DEU"
                    ? "in Warenkorb legen"
                    : actLanguage === "RUS"
                    ? "добавить в корзину"
                    : actLanguage === "ENG"
                    ? "add to cart"
                    : null}
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  onClick={e => {
                    addItem(itemInfo, quantityOfItem)
                    setLoading(true)
                    redirectToCheckout(e)
                  }}
                >
                  {loading
                    ? actLanguage === "DEU"
                      ? "Wird geladen..."
                      : actLanguage === "RUS"
                      ? "Загрузка ..."
                      : actLanguage === "ENG"
                      ? "Loading..."
                      : null
                    : actLanguage === "DEU"
                    ? "Kaufen jetzt"
                    : actLanguage === "RUS"
                    ? "Купить сейчас"
                    : actLanguage === "ENG"
                    ? "Buy it now"
                    : null}
                </Button>
              </div>
              <br />
              <br />
              <br />
              {/* <Accordion data={itemInfo} /> */}
              <Tabs data={itemInfo} />
              <br />
            </div>
          </div>
          {/* <br /> */}

          <VideoYT itemInView={itemInView} itemInfo={itemInfo} />
        </Hidden>
      </Container>
      <Footer />
    </div>
  )
}

// ProductPageTemplate.propTypes = {
//   width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
// }
// export default withWidth()(ProductPageTemplate)
export default ProductPageTemplate

// <iframe width="560" height="315" src="https://www.youtube.com/embed/-i_94tW_iSM?controls=0" frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
// </iframe>
