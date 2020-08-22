import React, { useState } from "react"
import { graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../../components/seo"
import Header from "../../components/header"
import Footer from "../../components/footer"
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
import { SRLWrapper } from "simple-react-lightbox"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import Title1 from "../../components/Title1"
import Counter from "../../components/Cart/Counter"
import { useShoppingCart } from "use-shopping-cart"
import ThumbsSwiper from "../../components/ProductDetailsPage/ThumbsSwiper"
import MainSwiper from "../../components/ProductDetailsPage/MainSwiper"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    marginTop: 70,
  },
}))

SwiperCore.use([Thumbs, Zoom, Navigation, EffectFade, Pagination])

const lightboxOptions = {
  settings: {},
  caption: { showCaption: false },
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
    size: "50px",
  },
  thumbnails: { showThumbnails: false },
}

const FunnyBunny = props => {
  const classes = useStyles()

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const { addItem } = useShoppingCart()

  const ItemInfo = {
    sku: props.data.stripePrice.id,
    name: props.data.stripePrice.product.name,
    price: props.data.stripePrice.unit_amount,
    currency: props.data.stripePrice.currency,
    image: props.data.stripePrice.product.images,
    description: props.data.stripePrice.product.description,
  }

  return (
    <div className={classes.root}>
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className={classes.contentWrapper}>
        <Title1 lineContent="Funny Bunny" />
        <Grid container spacing={0}>
          <Hidden smDown>
            <Grid item md={1}>
              <ThumbsSwiper
                thumbsSwiper={thumbsSwiper}
                setThumbsSwiper={setThumbsSwiper}
                data={props.data}
              />
            </Grid>
          </Hidden>
          <Grid item md={5} sm={12}>
            <SRLWrapper options={lightboxOptions}>
              <MainSwiper
                thumbsSwiper={thumbsSwiper}
                setThumbsSwiper={setThumbsSwiper}
                data={props.data}
              />
            </SRLWrapper>
          </Grid>
          <Grid item md={6} sm={12}>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                addItem(ItemInfo)
                // handleClick()
              }}
            >
              ADD TO CART
            </Button>
            {/* <Counter
              incrementItem={props.incrementItem}
              decrementItem={props.decrementItem}
              removeItem={props.removeItem}
              quantity={props.item.quantity}
              sku={props.item.sku}
            /> */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            non optio unde quisquam aspernatur praesentium dolorum magni!
            Repellendus esse quis aliquid! Nemo cum aliquam suscipit dolorum
            temporibus numquam quasi consequatur quia sequi earum nisi optio
            adipisci, ut, at quibusdam ex sapiente facilis mollitia incidunt
            dolor. Dolorum reprehenderit ex libero earum!
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  )
}

FunnyBunny.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(FunnyBunny)

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "products/funny_bunny/funny_bunny_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "products/funny_bunny/funny_bunny_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "products/funny_bunny/funny_bunny_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    stripePrice(id: { eq: "price_1HGjcwHwITO0GSJrJEhUG0Aq" }) {
      id
      currency
      unit_amount
      product {
        name
        description
        images
      }
    }
  }
`
