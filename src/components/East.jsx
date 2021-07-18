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
  position:relative;
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
  position:absolute;
  top:70%;
  left:20px;
  color: #fff;
  font-size:100px;
  padding:20px;
  color:rgb(255,255,255);
  font-weight: 900;

 @keyframes textShow {
	from {
		opacity: 0;
		left: -100%;
	}
	to {
		opacity: 1;
		left: 0%;
	}
    }
	animation-name: textShow;
	animation-duration: 1s;
`;



const East = () => {
    const pageVariant = {
        initial: {
            opacity: 0, x: "-100%",
            scale: 1.2
        },
        in: {
            opacity: 1, x: "0",
            scale: 1
        },
        out: {
            opacity: 0, x: "-100%",
            scale: 1.2
        },

    };

    const pageTransition = {
        type: "tween",
        ease: "easeOut",
        duration: .5
    };


    const Place = ({ s, d, city }) => {
        return (
            <Block>
                <Item s={s}>
                    <About>{city}</About>
                </Item>
            </Block>
        );
    };

    return (<><NavLink className="arrow right" to="/" exact>
        🡪
    </NavLink>
        <motion.div style={{ position: "absolute" }} variants={pageVariant} transition={pageTransition} initial="initial" animate="in" exit="out" className="bg east" id="East">
            <h1 className="region easth1">East India</h1>
            <Container>
                {north.map((city, index) => (
                    <Place key={index} city={city.place} s={city.dp} d={city.desc} />
                ))}
            </Container>
        </motion.div></>
    );
};

export default East;
