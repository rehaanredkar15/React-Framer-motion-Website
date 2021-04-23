import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="home container">
      {/* here motion is added to the component and in animate function we add the property animate to it and pass the props which we want to animate  */}
      <motion.h2 animate={{ fontSize: 50, color: "#ff2994", x: 100, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
