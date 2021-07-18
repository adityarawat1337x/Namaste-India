import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
        <h1 className="regio title">India</h1>
        <video className="bidio" autoplay muted loop id="myVideo">
          <source src="../assets/bg.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </>
  );
};

export default Home;
