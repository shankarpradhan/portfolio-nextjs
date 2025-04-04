"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Shankar Pradhan - MERN Stack Developer</title>
        <meta name="description" content="Learn about Shankar Pradhan, a passionate MERN Stack Developer specializing in React, Next.js, Node.js and MongoDB. Discover my skills and experience." />
        <meta name="keywords" content="Shankar Pradhan, About, MERN Developer, React Developer, Next.js Developer, Portfolio" />
        <meta property="og:title" content="About | Shankar Pradhan - MERN Stack Developer" />
        <meta property="og:description" content="Professional background and skills of Shankar Pradhan, MERN Stack Developer" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Shankar" />
        <meta property="profile:last_name" content="Pradhan" />
        <meta property="profile:username" content="shankarpradhan" />
        <link rel="canonical" href="https://shan.in.net/about" />
      </Head>
      
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          itemProp="headline"
        >
          About Me
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-4xl" itemScope itemType="https://schema.org/Person">
          {/* Profile Image with Schema */}
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            itemProp="image"
          >
            <Image 
              src="/profile.jpeg" 
              alt="Professional portrait of Shankar Pradhan" 
              width={192} 
              height={192} 
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          {/* About Text with Schema */}
          <motion.div
            className="text-lg text-gray-300 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            itemProp="description"
          >
            <p>
              Hi, I&apos;m <span itemProp="name">Shankar Pradhan</span>, a passionate <span itemProp="jobTitle">Software Engineer and Full-Stack Developer</span>. 
              With expertise in modern web technologies and networking, I love building scalable 
              and efficient applications. My focus is on crafting seamless user experiences and 
              writing clean, maintainable code.
            </p>
            <p className="mt-4">
              Let&apos;s create something amazing together!
            </p>
            
            {/* Hidden structured data for SEO */}
            <div className="hidden" itemProp="knowsAbout" itemScope itemType="https://schema.org/ItemList">
              <span itemProp="name">React</span>
              <span itemProp="name">Next.js</span>
              <span itemProp="name">Node.js</span>
              <span itemProp="name">MongoDB</span>
              <span itemProp="name">JavaScript</span>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}