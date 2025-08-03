"use client";

import { motion } from "framer-motion";

export const Preloader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#1e1e1e] z-50"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }} 
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Welcome to Niwa's Portfolio
      </h1>
    </motion.div>
  );
};