"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 text-white z-50"
    >
      <motion.div
        className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
      ></motion.div>
    </motion.div>
  );
}
