import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [showTitle, setTitle] = useState(true);

  setTimeout(() => {
    setTitle(false);
  }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {showTitle && <h2> Thank you for your order:</h2>}
      <motion.p variants={childVariants}>
        You ordered a {pizza.base}
        pizza with:
      </motion.p>{" "}
      <motion.div variants={childVariants}>
        {" "}
        {pizza.toppings.map((topping) => (
          <div key={topping}> {topping} </div>
        ))}{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

export default Order;
