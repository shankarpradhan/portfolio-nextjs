"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Shankar Pradhan</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-4xl">
          {/* Profile Image */}
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/profile.jpeg" 
              alt="Shankar Pradhan" 
              width={192} 
              height={192} 
              className="object-cover w-full h-full" 
            />
          </motion.div>

          {/* About Text */}
          <motion.p
            className="text-lg text-gray-300 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm Shankar Pradhan, a passionate Software Engineer and Full-Stack Developer. With expertise in modern web technologies and networking, I love building scalable and efficient applications. My focus is on crafting seamless user experiences and writing clean, maintainable code. Let's create something amazing together!
          </motion.p>
        </div>
      </div>
    </>
  );
}
