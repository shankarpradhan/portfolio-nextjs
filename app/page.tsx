"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Loading from "./components/loading";
import Image from "next/image";

const textAnimation = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.05 },
  }),
};

const Airplane = () => {
  const [position, setPosition] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Track airplane direction
  const totalSegments = 12;

  useEffect(() => {
    const updatePosition = () => {
      const currentHour = new Date().getHours();
      const segmentWidth = 100 / totalSegments; // 8.33% of screen width

      let newPosition;
      if (currentHour < 12) {
        newPosition = currentHour * segmentWidth; // Move left to right
        setIsFlipped(false); // Normal airplane direction
      } else {
        newPosition = (24 - currentHour) * segmentWidth; // Move right to left
        setIsFlipped(true); // Flip airplane direction
      }

      setPosition(newPosition);
    };

    updatePosition(); // Set initial position
    const interval = setInterval(updatePosition, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.img
      src="/images/airplane.png"
      alt="Airplane"
      className="absolute top-10 w-24 sm:w-32 md:w-40"
      style={{
        left: `${position}vw`,
        transform: `translateX(-50%) ${isFlipped ? "scaleX(-1)" : ""}`, // Flip horizontally if needed
      }}
    />
  );
};




export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;

  const name = "Shankar Pradhan".split("").map((char) => (char === " " ? " " : char));
  const title = "Software Engineer | Full-Stack Developer | Networking Enthusiast"
    .split("")
    .map((char) => (char === " " ? " " : char));

  return (
    <>
      <Head>
        <title>Shankar Pradhan | Portfolio</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-2 text-center overflow-hidden"
      >
        <Airplane />
        <motion.div
          className="rounded-full overflow-hidden border-4 border-blue-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/profile.jpeg" 
            alt="Shankar Pradhan" 
            width={160} 
            height={160} 
            className="object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
          />
        </motion.div>

        <motion.h6 className="text-lg font-bold text-blue-400 flex flex-wrap justify-center text-center mt-6 leading-snug">
          {title.map((char, i) => (
            <motion.span 
              key={i} 
              custom={i} 
              variants={textAnimation} 
              initial="hidden" 
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </motion.h6>

        <motion.div className="text-sm sm:text-lg md:text-xl mt-4 flex leading-relaxed px-4">
          <div className="flex gap-4 mt-4">
            <a
              href="/resume_shan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              View Resume
            </a>
            <a
              href="/resume_shan.pdf"
              download="Resume.pdf"
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
