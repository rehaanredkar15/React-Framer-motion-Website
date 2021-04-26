import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
export const Modal = ({ ShowModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {ShowModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>want to make another pizza ? </p>
            <Link to="/">
              <button>Start Again </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// default Modal;
