import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      inital="hidden"
      animate="visible"
      exit="exit"
    >
      {/* here motion is added to the component and in animate function we add the property animate to it and pass the props which we want to animate  */}{" "}
      <motion.h2
        animate={{ fontSize: 50 }}
        transition={{ delay: 0.2, duration: 1.2 }}
      >
        {" "}
        Welcome to RCB pizzas
      </motion.h2>{" "}
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza{" "}
        </motion.button>{" "}
      </Link>{" "}
    </motion.div>
  );
};

export default Home;
