import React, { useState, useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "@material-ui/core/Container"
import "swiper/swiper-bundle.css"
import "./swiper.css"
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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  contentWrapper: {
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    // flex: "0 0 auto",

    marginTop: 120,
    [theme.breakpoints.down("sm")]: {
      marginTop: 55,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  contentFirst: {
    // paddingLeft: "10%",
    // paddingRight: "10%",
  },
  btn: {
    width: 225,
    minWidth: 225,
    maxWidth: 225,
    fontSize: 15,
    fontWeight: "bold",
  },
  mediaBlock: {
    width: "100vw",
    minWidth: "100vw",
    maxWidth: "100vw",
  },
  boxLeft: {
    border: "1px solid rgba(0, 0, 0, 0.05)",
    float: "left",
  },
  boxRight: {
    border: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "8%",
    position: "sticky",
    position: "-webkit-sticky",
    top: " 5rem",
    float: "right",
  },
  imgBoxLeft: {
    margin: 0,
    padding: 0,
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
  // console.log(
  //   "???:",
  //   formatCurrencyString({
  //     currency: itemInfo.currency,
  //     value: parseInt(itemInfo.price),
  //   })
  // )

  return (
    <div className={classes.root} id="root">
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container className={classes.contentWrapper} id="wrapper">
        <Hidden smDown id="big">
          <Grid container spacing={0} className={classes.contentFirst}>
            <Grid item md={6} className={classes.boxLeft}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
                  <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
                  <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
                  <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
                  <img src={itemInfo.firstImg} className={classes.imgBoxLeft} />
                  <img src={itemInfo.scndImg} className={classes.imgBoxLeft} />
                  {/* <SRLWrapper
                    options={lightboxOptions}
                    // callbacks={lightboxCallbacks}
                  >
                    <MainSwiper
                      thumbsSwiper={thumbsSwiper}
                      setThumbsSwiper={setThumbsSwiper}
                      data={itemInfo}
                    />
                  </SRLWrapper>
                </Grid>
                <Grid item>
                  <ThumbsSwiper
                    thumbsSwiper={thumbsSwiper}
                    setThumbsSwiper={setThumbsSwiper}
                    data={itemInfo}
                  /> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} className={classes.boxRight}>
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
            </Grid>
          </Grid>

          <div

          // item
          // md={12}
          // style={{ backgroundImage: `src(${itemInfo.firstImg})` }}
          >
            <img src={itemInfo.firstImg} className={classes.mediaBlock} />
          </div>
        </Hidden>

        {/* <Hidden mdUp id="little">
          <MainSwiper
            thumbsSwiper={thumbsSwiper}
            setThumbsSwiper={setThumbsSwiper}
            data={itemInfo}
          />
          <br /> <br />
          <Container>
            {formatCurrencyString({
              currency: itemInfo.currency,
              value: parseInt(itemInfo.price),
            })}
            <br />
            <Button
              size="small"
              color="primary"
              onClick={() => {
                addItem(itemInfo, quantityOfItem)
                handleDrawerCartOpen()
              }}
            >
              ADD TO CART
            </Button>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            non optio unde quisquam aspernatur praesentium dolorum magni!
            Repellendus esse quis aliquid! Nemo cum aliquam suscipit dolorum
            temporibus numquam quasi consequatur quia sequi earum nisi optio
            adipisci, ut, at quibusdam ex sapiente facilis mollitia incidunt
            dolor. Dolorum reprehenderit ex libero earum! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Doloribus non optio unde quisquam
            aspernatur praesentium dolorum magni! Repellendus esse quis aliquid!
            Nemo cum aliquam suscipit dolorum temporibus numquam quasi
            consequatur quia sequi earum nisi optio adipisci, ut, at quibusdam
            ex sapiente facilis mollitia incidunt dolor. Dolorum reprehenderit
            ex libero earum! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Doloribus non optio unde quisquam aspernatur praesentium
            dolorum magni! Repellendus esse quis aliquid! Nemo cum aliquam
            suscipit dolorum temporibus numquam quasi consequatur quia sequi
            earum nisi optio adipisci, ut, at quibusdam ex sapiente facilis
            mollitia incidunt dolor. Dolorum reprehenderit ex libero earum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            non optio unde quisquam aspernatur praesentium dolorum optio
            adipisci, ut, at quibusdam ex sapiente facilis mollitia incidunt
            dolor. Dolorum reprehenderit ex libero earum!
          </Container>
        </Hidden> */}
      </Container>
      <Footer />
    </div>
  )
}

ProductPageTemplate.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(ProductPageTemplate)
