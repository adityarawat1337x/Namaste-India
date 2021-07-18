import React from 'react'
import "./styles.css"
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
const West = () => {
    const pageVariant = {
        initial: {
            opacity: 0, x: "100%",
            scale: 1.2
        },
        in: {
            opacity: 1, x: "0",
            scale: 1
        },
        out: {
            opacity: 0, x: "100%",
            scale: 1.2
        },

    };

    const pageTransition = {
        type: "tween",
        ease: "easeOut",
        duration: .5
    };
    return (<><NavLink className="arrow left" to="/" exact>
        🡨
    </NavLink>
        <motion.div style={{ position: "absolute" }} variants={pageVariant} transition={pageTransition} initial="initial" animate="in" exit="out" className="bg west" id="West">
            <h1 className="region">West India</h1>
        </motion.div></>
    );
};

export default West;
