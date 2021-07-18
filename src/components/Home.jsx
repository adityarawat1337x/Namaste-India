import React from 'react'
import "./styles.css"
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = () => {
    const pageVariant = {
        initial: {
            opacity: 0,
            scale: 1.2,
        },
        in: {
            opacity: 1,
            scale: 1
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

    return (<>
        <NavLink className="arrow left" to="/east" exact>
            East
        </NavLink>
        <NavLink className="arrow right" to="/west" exact>
            West
        </NavLink>
        <NavLink className="arrow up" to="/north" exact>
            North
        </NavLink>
        <NavLink className="arrow down" to="/south" exact>
            South
        </NavLink>

        <motion.div style={{ position: "absolute" }} variants={pageVariant} transition={pageTransition} initial="initial" animate="in" exit="out" className="bg" id="Home">
        </motion.div></>
    );
};

export default Home;
