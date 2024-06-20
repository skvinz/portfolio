"use client";
import React from "react";
import { motion } from "framer-motion";

const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionProvider;
