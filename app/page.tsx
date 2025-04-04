"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const totalSegments = 12;

  useEffect(() => {
    const updatePosition = () => {
      const currentHour = new Date().getHours();
      const segmentWidth = 100 / totalSegments;

      let newPosition;
      if (currentHour < 12) {
        newPosition = currentHour * segmentWidth;
        setIsFlipped(false);
      } else {
        newPosition = (24 - currentHour) * segmentWidth;
        setIsFlipped(true);
      }

      setPosition(newPosition);
    };

    updatePosition();
    const interval = setInterval(updatePosition, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.img
      src="/images/airplane.png"
      alt="Airplane illustration showing current time position"
      className="absolute top-10 w-24 sm:w-32 md:w-40"
      style={{
        left: `${position}vw`,
        transform: `translateX(-50%) ${isFlipped ? "scaleX(-1)" : ""}`,
      }}
    />
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const fadeIn = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const scaleText = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>Shankar Pradhan | MERN Stack Developer & Network Specialist</title>
        <meta name="description" content="Portfolio of Shankar Pradhan - Full-stack developer specializing in React, Next.js, Node.js and networking technologies" />
        <meta name="keywords" content="Shankar Pradhan, MERN stack developer, React portfolio, Next.js developer, networking specialist" />
        <meta property="og:title" content="Shankar Pradhan - Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing full-stack development and networking projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shan.in.net" />
        <meta property="og:image" content="/profile.jpeg" />
        <link rel="canonical" href="https://shan.in.net" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shankar Pradhan - Developer Portfolio" />
        <meta name="twitter:description" content="Full-stack developer and networking specialist" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shankar Pradhan",
            "jobTitle": "Full-Stack Developer & Network Specialist",
            "url": "https://shan.in.net",
            "sameAs": [
              "https://linkedin.com/in/shankar-pradhan",
              "https://github.com/shankar-pradhan"
            ],
            "Skills": [
              "React.js",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Networking",
              "CCNA",
              "CCNP (Routing & Switching)"
            ]
          })}
        </script>
      </Head>

      {/* First Section - Hi, Shankar Pradhan 👋 */}
      <motion.section
        style={{ opacity: fadeOut, scale: scaleText }}
        className="h-screen flex items-center justify-center bg-white text-black font-bold text-6xl md:text-8xl"
        aria-label="Introduction section"
      >
        <motion.span
          animate={{ rotate: [0, 20, 0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          role="img"
          aria-label="Waving hand"
        >
          👋
        </motion.span>{" "}
        Hi, Shankar Pradhan
      </motion.section>

      {/* Second Section - Portfolio Content */}
      <motion.section
        style={{ opacity: fadeIn }}
        className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-2 text-center overflow-hidden"
        aria-label="About section"
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
            alt="Professional portrait of Shankar Pradhan"
            width={160}
            height={160}
            className="object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            priority
          />
        </motion.div>

        <motion.h1 className="text-lg font-bold text-blue-400 flex flex-wrap justify-center text-center mt-6 leading-snug">
          {"Software\u00A0 Engineer\u00A0 | \u00A0Full-Stack\u00A0 Developer\u00A0 | \u00A0Networking\u00A0 Enthusiast"
            .split("")
            .map((char, i) => (
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
        </motion.h1>

        <motion.div className="text-sm sm:text-lg md:text-xl mt-4 flex leading-relaxed px-4">
          <div className="flex gap-4 mt-4">
            <a
              href="/resume_shan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              aria-label="View resume in new tab"
            >
              View Resume
            </a>
            <a
              href="/resume_shan.pdf"
              download="Shankar_Pradhan_Resume.pdf"
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
              aria-label="Download resume"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}