"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex items-center space-x-10 h-[200px] justify-center">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Link href={"https://github.com/skvinz"}>
          <Github size={48} color="#ffffff" strokeWidth={2.25} />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Link href={"https://www.linkedin.com/in/vinzhp/"}>
          <FaLinkedin className="w-[3rem] h-[3rem] text-white" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
