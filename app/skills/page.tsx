"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaLinux, FaCloud, FaNetworkWired 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiMongodb, SiTailwindcss, SiFirebase, SiTypescript, SiCisco 
} from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";

const developmentSkills = [
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

const networkingSkills = [
  { name: "Cisco Networking", icon: <SiCisco className="text-blue-500" /> },
  { name: "Linux", icon: <FaLinux className="text-orange-500" /> },
  { name: "Networking Fundamentals", icon: <FaDatabase className="text-gray-400" /> },
  { name: "Cloud Computing", icon: <FaCloud className="text-blue-300" /> },
  { name: "EVE-NG", icon: <FaNetworkWired className="text-purple-400" /> },
  { name: "GNS3", icon: <GiNetworkBars className="text-green-400" /> },
  { name: "Cisco Packet Tracer", icon: <SiCisco className="text-blue-500" /> },
];

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Shankar Pradhan - MERN Stack Developer & Network Specialist</title>
        <meta name="description" content="Shankar Pradhan's technical skills in web development (React, Next.js, Node.js) and networking (Cisco, Linux, Cloud Computing)" />
        <meta name="keywords" content="Shankar Pradhan skills, React developer skills, Next.js expertise, Node.js developer, Cisco networking skills, MERN stack developer" />
        <meta property="og:title" content="Technical Skills | Shankar Pradhan" />
        <meta property="og:description" content="Professional skills in full-stack development and computer networking" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shan.in.net/skills" />
        <link rel="canonical" href="https://shan.in.net/skills" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shankar Pradhan's Technical Skills" />
        <meta name="twitter:description" content="Full-stack development and networking expertise" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Skills",
            "description": "Technical skills of Shankar Pradhan",
            "url": "https://shan.in.net/skills",
            "mainEntity": [
              {
                "@type": "ItemList",
                "name": "Development Skills",
                "itemListElement": developmentSkills.map((skill, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": skill.name
                }))
              },
              {
                "@type": "ItemList",
                "name": "Networking Skills",
                "itemListElement": networkingSkills.map((skill, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": skill.name
                }))
              }
            ]
          })}
        </script>
      </Head>

      {/* Original Design Below - No Changes Made */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6"
      >
        <h1 className="text-4xl font-bold text-blue-400 m-11">Skills & Technologies</h1>

        {/* Development Skills */}
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Development Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full text-center">
          {developmentSkills.map((skill, index) => (
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

        {/* Networking Skills */}
        <h2 className="text-2xl font-semibold text-green-300 mt-10 mb-4">Networking Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full text-center">
          {networkingSkills.map((skill, index) => (
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