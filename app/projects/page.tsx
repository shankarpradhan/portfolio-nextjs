"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    title: "ExpertUro Connect",
    description:
      "A professional website for Dr. Srikanth V, integrated with Firebase for real-time data handling and EmailJS for communication.",
    technologies: "React, Firebase, EmailJS, TailwindCSS",
    link: "https://drsrikanthurologist.com",
    image: "/images/experturo.jpg",
  },
  {
    title: "MegaShop Platform",
    description:
      "A full-stack e-commerce application using the MERN stack with Redux Toolkit for state management.",
    technologies: "React, Redux Toolkit, Express, MongoDB",
    link: "https://github.com/shankarpradhan/ShanShopi",
    image: "/images/megashop.png",
  },
  {
    title: "Online Tutorial Management System",
    description:
      "An e-learning platform using React for the frontend and Spring Boot for the backend, implementing secure authentication and RESTful APIs.",
    technologies: "React, Spring Boot, MVC Architecture",
    link: "https://github.com/shankarpradhan/E-Learning.git",
    image: "/images/online-tutorial.webp",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Shankar Pradhan</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 text-white"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center h-screen p-10 bg-gray-800 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-[1.02] ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Left Side (Image) */}
            <motion.div
              className="w-full md:w-1/2 h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-3/4 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Side (Text) */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center p-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h2 className="text-4xl font-bold text-blue-400">{project.title}</h2>
              <p className="mt-4 text-lg text-gray-300">{project.description}</p>
              <p className="text-sm text-blue-400 mt-4">Tech Stack: {project.technologies}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}