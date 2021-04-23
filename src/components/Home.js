import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
    return ( <
        motion.div className = "home container"
        initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } } >
        { /* here motion is added to the component and in animate function we add the property animate to it and pass the props which we want to animate  */ } { " " } <
        motion.h2 animate = {
            { fontSize: 50 } } > Welcome to Pizza Joint < /motion.h2>{" "} <
        Link to = "/base" >
        <
        motion.button animate = {
            { scale: 1.5 } } >
        Create Your Pizza { " " } <
        /motion.button>{" "} <
        /Link>{" "} <
        /motion.div>
    );
};

export default Home;