import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  inital: {
    opacity: 0,
    x: "100vw",
  },

  animate: {
    opacity: 1,
    x: 0,
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variant={containerVariants}
      initial="initial"
      animate="animate"
      transition={{ type: "spring", delay: 0.1, stiffness: 50 }}
    >
      <h3> Step 1: Choose Your Base </h3>{" "}
      <ul>
        {" "}
        {bases.map((base) => {
          //used the map funciotn to traverse through bases array
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: "#e8ff0c" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}> {base} </span>{" "}
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <Link to="/toppings">
          <motion.div>
            <motion.button
              className="next"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.1,

                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              {" "}
              Next{" "}
            </motion.button>{" "}
          </motion.div>
        </Link>
      )}{" "}
    </motion.div>
  );
};

export default Base;
