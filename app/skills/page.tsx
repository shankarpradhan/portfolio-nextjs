"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiFirebase, SiTypescript } from "react-icons/si";

const Skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "SQL & Databases", icon: <FaDatabase className="text-gray-400" /> },
];

export default function skills() {
  return (
    <>
      <Head>
        <title>My Skills | Shankar Pradhan</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Skills & Technologies</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full text-center">
          {Skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="mt-2 text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
