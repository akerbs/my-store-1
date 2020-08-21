import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Container from "@material-ui/core/Container"
import "swiper/swiper-bundle.css"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Thumbs,
  Zoom,
  Navigation,
  EffectFade,
  Pagination,
} from "swiper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "tomato",
  },
  mainSlider: {
    width: "300px",
    height: "100%",
    marginLeft: "27px",
  },
  thumbsSlider: {
    width: "95px",
    height: "100%",
  },
}))

SwiperCore.use([Thumbs, Zoom, Navigation, EffectFade, Pagination])

export default function (props) {
  const classes = useStyles()

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className={classes.root}>
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <h1>FUNNY BUNNY</h1>
        <p>Here</p>

        <Grid container spacing={3}>
          <Grid item md={1}>
            {/* Thumbs Swiper -> store swiper instance */}
            <Swiper
              spaceBetween={5}
              slidesPerView={3}
              onSwiper={setThumbsSwiper}
              className={classes.thumbsSlider}
              direction="vertical"
            >
              <SwiperSlide>
                <Img
                  fluid={props.data.img1.childImageSharp.fluid}
                  alt="Funny bunny 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Img
                  fluid={props.data.img2.childImageSharp.fluid}
                  alt="Funny bunny 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Img
                  fluid={props.data.img3.childImageSharp.fluid}
                  alt="Funny bunny 3"
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item md={5}>
            {/* Main Swiper -> pass thumbs swiper instance */}
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              direction="horizontal"
              // zoom
              loop
              className={classes.mainSlider}
              thumbs={{ swiper: thumbsSwiper }}
            >
              <SwiperSlide>
                <Img
                  fluid={props.data.img1.childImageSharp.fluid}
                  alt="Funny bunny 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Img
                  fluid={props.data.img2.childImageSharp.fluid}
                  alt="Funny bunny 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Img
                  fluid={props.data.img3.childImageSharp.fluid}
                  alt="Funny bunny 3"
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item md={6}>
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
  }
`
