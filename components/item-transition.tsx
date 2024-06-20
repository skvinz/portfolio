"use client";
import * as React from "react";
import { motion } from "framer-motion";

const ItemTransition = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: delay, duration: 1 },
      }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default ItemTransition;
