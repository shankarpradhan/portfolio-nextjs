"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    title: "Employees-Hub",
    description:
      "The Employee Hub system will have role-based access for Admin, HR, and Employees, with key features like attendance tracking, employee separation management, and reports. Employees can mark attendance online only if they are within 3 km of the office using Geolocation API. HR can manage records, approve requests, and handle employee exits. Admins will have full control over users, attendance, and reports. The tech stack includes Next.js (frontend & backend), MongoDB (database), JWT (authentication), and Google Maps API (geolocation). Hosted on Vercel, this system ensures secure, efficient employee management with real-time data access. 🚀",
    technologies: "React, Next.js(Frontend, Backend), cloudinary, Geolocation, Recaptcha",
    link: "https://emloyeehub.vercel.app/",
    image: "/images/employeeHub.jpg",
  },
  {
    title: "MegaShop Platform",
    description:
      "This full-stack e-commerce application is built using the MERN stack with Next.js for the frontend, providing a fast and seamless user experience. The backend is powered by Node.js and Express.js, ensuring efficient API handling, while MongoDB serves as the database for scalable data storage. JWT authentication with bcrypt enhances security, allowing secure user logins. Additionally, the app integrates Razorpay (Test Mode) for payment processing, enabling smooth transactions. With a modern tech stack, this project delivers a secure, high-performance, and user-friendly e-commerce platform, making online shopping effortless and efficient. 🚀",
    technologies: "React.js , Next.js, Node.js , Express.js , TypeScript, Mongodb, Jwt, Bcrypt ",
    link: "https://github.com/shankarpradhan/Megashopping",
    image: "/images/megashop.jpg",
  },
  {
    title: "ExpertUro Connect",
    description:
      "drsrikanthurologist.com is a professionally designed urology website built as a freelancing project using React, Firebase, EmailJS, and TailwindCSS. The site features a responsive design, fast performance, while leveraging Firebase for backend services and EmailJS for direct communication. With 80% SEO optimization, it ensures better search rankings, improved user engagement, and a smooth browsing experience. This project showcases expertise in modern web development, SEO optimization, and healthcare website design to enhance online presence. 🚀",
    technologies: "React, Firebase, EmailJS, TailwindCSS",
    link: "https://drsrikanthurologist.com",
    image: "/images/experturo.jpg",
  },
  {
    title: "Shiva's Portfolio Website",
    description:
      "This portfolio website was designed as a freelancing project for a client named Shiva. It features a modern and interactive user interface with smooth animations, ensuring a seamless browsing experience. Built with React and Next.js, the website is optimized for speed and performance. It leverages JavaScript for dynamic content updates and animations to enhance the visual appeal. With a focus on responsiveness and SEO, the site effectively showcases Shiva’s professional work while maintaining an engaging and user-friendly layout. This project demonstrates expertise in modern frontend development, animation effects, and UI/UX design. 🚀",
    technologies: "React, Spring Boot, MVC Architecture",
    link: "https://siva-7975f.web.app/",
    image: "/images/shiva-portfolio.jpg",
  },
  {
    "title": "Qveto Corporate Website",
    "description": "Qveto.in is a modern and responsive website designed for Qveto. The frontend was developed using HTML, CSS, SCSS, and JavaScript to ensure a smooth and engaging user experience. With an emphasis on visual aesthetics, animations, and responsiveness, the website adapts seamlessly to both mobile and desktop devices. Currently, SEO optimization is being implemented to improve search engine rankings and increase organic traffic. This project highlights expertise in frontend development, user experience design, and performance optimization. 🚀",
    "technologies": "HTML, CSS, SCSS, JavaScript",
    "link": "https://qveto.in/",
    "image": "/images/qveto.jpg"
  },
  {
    title: "Online Tutorial Management System",
    description:
      "This E-Learning Platform is a backend-focused project designed to learn and implement Spring Boot. It uses React for the frontend and Spring Boot for the backend, emphasizing secure authentication, RESTful APIs, and efficient data management. The project focuses on building scalable backend logic, handling API requests, and integrating authentication mechanisms, rather than frontend design. By developing this system, it provides hands-on experience in Spring Boot development, API implementation, and backend security best practices, making it a valuable learning project for mastering Java-based web applications. 🚀",
    technologies: "React, Spring Boot, MVC Architecture",
    link: "https://github.com/shankarpradhan/E-Learning.git",
    image: "/images/online-tutorial.webp",
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>Projects | Shankar Pradhan - MERN Stack Developer Portfolio</title>
        <meta name="description" content="Explore Shankar Pradhan's professional projects including Employees-Hub, MegaShop Platform, ExpertUro Connect and more MERN stack applications" />
        <meta name="keywords" content="Shankar Pradhan projects, MERN stack projects, Next.js portfolio, React developer projects, Full-stack developer portfolio" />
        <meta property="og:title" content="Projects | Shankar Pradhan - MERN Stack Developer" />
        <meta property="og:description" content="Professional projects portfolio showcasing full-stack applications built with modern web technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shan.in.net/projects" />
        <link rel="canonical" href="https://shan.in.net/projects" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shankar Pradhan's Projects" />
        <meta name="twitter:description" content="Professional full-stack developer project portfolio" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description.substring(0, 150) + "...",
                "url": project.link,
                "keywords": project.technologies
              }
            }))
          })}
        </script>
      </Head>

      {/* Original Design Below - No Changes Made */}
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
              <a href={project.link} aria-label={`View ${project.title} project`}>
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  width={500}
                  height={300}
                  className="w-full h-3/4 object-cover rounded-lg shadow-lg"
                  priority={index < 3} // Only prioritize first 3 images
                />
              </a>
            </motion.div>

            {/* Right Side (Text) */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center p-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h2 className="text-4xl font-bold text-blue-400">{project.title}</h2>

              {/* Scrollable Description */}
              <div className="mt-4 text-lg text-gray-300 max-h-40 overflow-y-auto md:max-h-none scrollbar-thin scrollbar-thumb-gray-600">
                {project.description}
              </div>

              <p className="text-sm text-blue-400 mt-4">Tech Stack: {project.technologies}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${project.title} project`}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}