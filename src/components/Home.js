import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion ";
const Home = () => {
  return (
    <div className="home container">
      {/* here motion is added to the component and in animate function we add the property animate to it and pass the props which we want to animate  */}
      <motion.h2 animate