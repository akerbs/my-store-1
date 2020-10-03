import React, { useState, useContext, useEffect, useRef } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import YouTube from "react-youtube"
import inView from "in-view"

const useStyles = makeStyles(theme => ({
  videoWrapper: {
    // margin: 0,
    // padding: 0,

    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    minHeight: "100%",
  },
  video: {
    position: "absolute",
    // leftMargin: "50%",
    // right: "50%",
    // top: "-39%",
    // width: "100%",
    height: "100vh",
    minHeight: "100%",

    // bottom: "36%",
    bottom: "14%",
    right: "-160px",
    // width: '100%',
    // height: '500px',
    border: "0px",
    // marginTop: " -16%",
    // marginTop: " -97%",
    // marginBottom: " -97%",
  },
}))

export default function (props) {
  const classes = useStyles()

  // useEffect(() => {
  //   console.log("IN VIEW WORKS")
  //   inView("#videoWrapper").on("enter", startInViewShowVideo)
  //   // .on("enter", startInViewShowVideo)
  //   // .on("exit", stopInViewShowVideo)
  //   inView.threshold(0.2)
  // }, [props.itemInView])

  // function startInViewShowVideo() {
  //   console.log(" videoWrapper in View!")
  //   onPlay()
  // }

  // function stopInViewShowVideo() {
  //   console.log(" videoWrapper OUT of View!")
  //   onPause()
  // }

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      enablejsapi: 1,
      rel: 0,
      showinfo: 0,
      controls: 0,
      fs: 0,
      playsinline: 1,
      // wmode: "opaque",
      // origin: "http://localhost:8000",
      // autohide:1,
      // loop: 1,
      // suggestedQuality: "hd1080",
    },
  }

  async function onReady(event) {
    window.YTPlayer = event.target
    await window.YTPlayer.mute()
    await window.YTPlayer.setPlaybackQuality("hd1080")
    console.log(" onReady")
  }

  async function onPlay() {
    await window.YTPlayer.playVideo()
    console.log(" onPlay")
  }

  async function onPause() {
    await window.YTPlayer.pauseVideo()
    console.log(" onPause")
  }

  return (
    <div className={classes.videoWrapper} id="videoWrapper">
      {/* <video
              // onplay="handleFirstPlay()"
              id="myVideo"
              src={itemInfo.video}
              type="video/mp4"
              // controls
              width="100%"
              autoPlay
              loop
              muted
              playsInline
            /> */}
      <YouTube
        className={classes.video}
        videoId={props.itemInfo.videoId}
        opts={opts}
        onReady={onReady}
        id="myVideo"
      />

      {/* <iframe
              className="myVideo"
              id="myVideo"
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/-i_94tW_iSM?rel=0&controls=0&hd=1&showinfo=0&enablejsapi=1&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
      <div
        style={{
          // left: "100%",
          backgroundColor: "#fafafa",
          width: "100%",
          height: "19%",
          // zIndex: "0",
          position: "absolute",
          bottom: "18%",
        }}
      ></div>
    </div>
  )
}
