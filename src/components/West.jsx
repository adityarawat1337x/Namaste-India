import React from 'react'
import "./styles.css"
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { north } from './Database';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const Block = styled.div`
  scroll-snap-align: start;
  background-size: cover;
`;

const Item = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
  background-image: url(${p => p.s});
  background-color: #eac;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const About = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Kaushan Script';
  /* backdrop-filter: blur(2px); */
  padding: 20px;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Place = ({ s, d }) => {
    return (
        <Block>
            <Item s={s}>
                <About>{d}</About>
            </Item>
        </Block>
    );
};



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
            <h1 className="region westh1">West India</h1> <Container>
                {north.map((city, index) => (
                    <Place key={index} city={city.place} s={city.dp} d={city.desc} />
                ))}
            </Container>
        </motion.div></>
    );
};

export default West;
