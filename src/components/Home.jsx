import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
const VOD = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index=-1;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
    @media(max-width:800px) {
      display:none;
    } 
  `

const Home = () => {
  const pageVariant = {
    initial: {
      opacity: 0,
      scale: 1.2,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "spring",
    ease: "easeIn",
  };

  return (
    <>
      <NavLink className="arrow left" to="/east" exact>
        🡨
      </NavLink>
      <NavLink className="arrow right" to="/west" exact>
        🡪
      </NavLink>
      <NavLink className="arrow up" to="/north" exact>
        🡡
      </NavLink>
      <NavLink className="arrow down" to="/south" exact>
        🡫
      </NavLink>
      <NavLink className="formLink" to="/form" exact>
        Contact Us
      </NavLink>
      <motion.div
        style={{ position: "absolute" }}
        variants={pageVariant}
        transition={pageTransition}
        initial="initial"
        animate="in"
        exit="out"
        className="bg"
        id="Home"
      >
        <h1 className="region title">India</h1>
        <VOD>
          <iframe
            src="https://player.vimeo.com/video/576718655?background=1&autoplay=1&loop=1&byline=0&title=0"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </VOD>
      </motion.div>
    </>
  );
};

export default Home;
