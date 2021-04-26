import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
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
        >
          <motion.div className="modal">
            <p>want to make another pizza ? </p>
            <Link to="/">
              <button> Start Again </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// default Modal;
