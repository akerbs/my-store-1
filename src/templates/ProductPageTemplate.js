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

import { Link, navigate } from "gatsby"
import Counter from "../components/CounterBig"

import RatingEl from "../components/Reviews/RatingEl"
import ReviewForm from "../components/Reviews/ReviewForm"
import Reviews from "../components/Reviews/Reviews"

import Accordion from "../components/Accordion"
import Tabs from "../components/Tabs"
import inView from "in-view"
import VideoYT from "../components/VideoYT"
import VideoYTmob from "../components/VideoYTmob"

import Scroll from "../components/ScrollToTopBtn"

const document = require("global/document")
const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {},
  contentWrapper: {
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
    // flex: "0 0 auto",

    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      marginTop: "15%",
    },
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
    cursor: "pointer ",
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
    [theme.breakpoints.down("md")]: {
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
      marginBottom: "8%",
    },
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
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    cartDetails,
    // totalPrice,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart()
  const { handleDrawerCartOpen } = useContext(DrawerCartContext)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [quantityOfItem, setQuantityOfItem] = useState(1)
  const [loading, setLoading] = useState(false)
  const [itemInView, setItemInView] = useState(null)

  // const [pageOk, setPageOk] = useState(false)

  // useEffect(() => {
  //   window.location.reload(false)
  //   setPageOk(true)
  // }, [pageOk])

  function handleSetItemInView() {
    setItemInView(itemInfo.productId)
  }

  useEffect(() => {
    // console.log("BROWSING WORKS")
    window.onpageshow = function () {
      console.log("PAGE IS LOADED")
    }
    handleSetItemInView()
    console.log("ITEM", itemInfo.productId, "is BROWSING")
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
    linkId: props.item.linkId,
    // reviews: props.item.reviews,

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

  const reviews = props.item.reviews

  //////////////////////////////////////////////////////
  const newArr = reviews.map(el => Number(el.rating))
  const sum = newArr.reduce((a, b) => a + b, 0)
  const quantity = newArr.length
  const averageRatingValue = sum / quantity
  // console.log("->!!!!->", newArr, sum, quantity, averageRatingValue)
  //////////////////////////////////////////////////////

  console.log("DATA:", `/products/${itemInfo.linkId}#reviews`)

  // let sessionId
  // function getJSessionId() {
  //   sessionId = document.cookie.match(/JSESSIONID=[^;]+/)
  //   if (sessionId != null) {
  //     if (sessionId instanceof Array) sessionId = sessionId[0].substring(11)
  //     else sessionId = sessionId.substring(11)
  //   }
  //   return sessionId
  // }

  // function handlePayment(e) {
  //   // setLoading(true)
  //   addItem(itemInfo, quantityOfItem)
  //   setTimeout(function () {
  //     console.log("cartDetails", cartDetails)
  //   }, 2000)

  //   // await redirectToCheckout(e)
  // }

  return (
    <div className={classes.root} id="root">
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Scroll showBelow={250} />

      <Container className={classes.contentWrapper} id="wrapper">
        <Hidden smDown id="big">
          <div id="content" className="clearfix">
            <div className={classes.boxLeft}>
              <SRLWrapper
                options={lightboxOptions}
                // callbacks={lightboxCallbacks}
              >
                <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
                <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
                <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
                <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
                <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
                <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
              </SRLWrapper>
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
              {/* <Link to="#reviews"> */}
              <Link
                to={`/products/${itemInfo.linkId}#reviews`}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {/* <Link to="/"> */}
                {/* <bitton onClick={() => alert("click")}>BTN</bitton> */}
                <div style={{ display: "flex" }}>
                  <RatingEl
                    ratingValue={averageRatingValue}
                    starsSize="small"
                    starsColor="black"
                  />
                  <span>
                    {reviews.length > 0 ? reviews.length : null}{" "}
                    {actLanguage === "DEU"
                      ? reviews.length === 1
                        ? "Bewertung"
                        : "Bewertungen"
                      : actLanguage === "ENG"
                      ? reviews.length === 1
                        ? "Review"
                        : "Reviews"
                      : actLanguage === "RUS"
                      ? reviews.length === 1 || reviews.length === 21
                        ? "Отзыв"
                        : reviews.length > 1 && reviews.length < 5
                        ? "Отзывa"
                        : reviews.length >= 5 && reviews.length <= 20
                        ? "Отзывов"
                        : null
                      : null}
                  </span>
                </div>
              </Link>
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
                    // console.log("cartDetails", cartDetails)
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
                  // data-checkout-mode="payment"
                  // data-price-id={itemInfo.sku}
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  // disabled={loading}
                  onClick={() => {
                    // addItem(itemInfo, quantityOfItem)
                    // console.log("cartDetails", cartDetails)
                    // handleDrawerCartOpen()

                    // handlePayment()
                    redirectToCheckout()
                  }}

                  // onClick={() => {
                  //   addItem(itemInfo, quantityOfItem)
                  //   console.log("cartDetails", cartDetails)
                  //   setLoading(true)
                  //   redirectToCheckout()
                  // }}
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
          <VideoYT itemInView={itemInView} itemInfo={itemInfo} />
          <br />
          {/* <hr /> */}
          <div id="reviews">
            <Reviews
              reviews={reviews}
              itemInfo={itemInfo}
              averageRatingValue={averageRatingValue}
            />
          </div>
          <br /> <br /> <br />
        </Hidden>
        <Hidden mdUp id="little">
          {/* <Grid container direction="column" spacing={2}> */}
          <SRLWrapper
            options={lightboxOptions}
            // callbacks={lightboxCallbacks}
          >
            <MainSwiper
              thumbsSwiper={thumbsSwiper}
              setThumbsSwiper={setThumbsSwiper}
              data={itemInfo}
            />
          </SRLWrapper>
          <div
            style={{
              margin: "0% 5%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BreadCrumbs data={itemInfo} />
            <br />
            <Typography variant="h4" align="center">
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
            <Link
              to={`/products/${itemInfo.linkId}#reviews`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
            >
              {/* <Link to="/"> */}
              {/* <bitton onClick={() => alert("click")}>BTN</bitton> */}
              <div style={{ display: "flex" }}>
                <RatingEl
                  ratingValue={averageRatingValue}
                  starsSize="small"
                  starsColor="black"
                />
                <span>
                  {reviews.length > 0 ? reviews.length : null}{" "}
                  {actLanguage === "DEU"
                    ? reviews.length === 1
                      ? "Bewertung"
                      : "Bewertungen"
                    : actLanguage === "ENG"
                    ? reviews.length === 1
                      ? "Review"
                      : "Reviews"
                    : actLanguage === "RUS"
                    ? reviews.length === 1 || reviews.length === 21
                      ? "Отзыв"
                      : reviews.length > 1 && reviews.length < 5
                      ? "Отзывa"
                      : reviews.length >= 5 && reviews.length <= 20
                      ? "Отзывов"
                      : null
                    : null}
                </span>
              </div>
            </Link>
            <br /> <br />
            <Counter
              incrementItem={increment}
              decrementItem={decrement}
              quantity={quantityOfItem}
              sku={itemInfo}
            />
            <br />
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              // className={classes.btn1}
              onClick={() => {
                addItem(itemInfo, quantityOfItem)
                // console.log("cartDetails", cartDetails)
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
              // data-checkout-mode="payment"
              // data-price-id={itemInfo.sku}
              className={classes.btn}
              variant="contained"
              color="primary"
              // disabled={loading}
              onClick={() => {
                // addItem(itemInfo, quantityOfItem)
                // console.log("cartDetails", cartDetails)
                // handleDrawerCartOpen()

                // handlePayment()
                redirectToCheckout()
              }}

              // onClick={() => {
              //   addItem(itemInfo, quantityOfItem)
              //   console.log("cartDetails", cartDetails)
              //   setLoading(true)
              //   redirectToCheckout()
              // }}
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
            <br /> <br />
            <Accordion data={itemInfo} />
          </div>
          <br /> <br />
          <VideoYTmob itemInView={itemInView} itemInfo={itemInfo} />
          <br /> <br />
          <div
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div id="reviews" style={{ width: "100vw" }}>
              <Reviews
                reviews={reviews}
                itemInfo={itemInfo}
                averageRatingValue={averageRatingValue}
              />
            </div>
          </div>
        </Hidden>
      </Container>
      <Footer />
    </div>
  )
}

ProductPageTemplate.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(ProductPageTemplate)

// <iframe width="560" height="315" src="https://www.youtube.com/embed/-i_94tW_iSM?controls=0" frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
// </iframe>
