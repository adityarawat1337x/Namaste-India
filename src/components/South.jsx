import React from 'react'
import "./styles.css"
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
const South = () => {
    const pageVariant = {
        initial: {
            opacity: 0, y: "100%",
            scale: 1.2
        },
        in: {
            opacity: 1, y: "0",
            scale: 1
        },
        out: {
            opacity: 0, y: "100%",
            scale: 1.2
        },

    };

    const pageTransition = {
        type: "tween",
        ease: "easeOut",
        duration: .5
    };
    return (<><NavLink className="arrow up" to="/" exact>
        Home
    </NavLink>
        <motion.div style={{ position: "absolute" }} variants={pageVariant} transition={pageTransition} initial="initial" animate="in" exit="out" className="bg south" id="South">
            South
        </motion.div></>
    );
};

export default South;
