import React, { useEffect } from "react";

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

const Order = ({ pizza, setShowModal }) => {
  //here we will use useeffect hook , we can use set time out also but it will repeat always
  //when the component is changed but we want to show the modal when just value changes for that we have use effect hook to
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 exit={{ opacity: 0 }}>Thank you for your order:</motion.h2>
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
