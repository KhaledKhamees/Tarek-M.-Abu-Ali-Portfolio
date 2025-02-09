import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Mail, MapPin, Phone, Download, ExternalLink, Brain, Code2, GraduationCap, BookOpen, Layers, Database, Lock, Globe, Search } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      id: 1,
      title: "--",
      shortDescription: "--",
      fullDescription: "--",
      technologies: [
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      features: [
        "--"
      ],
      github: "--",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
      icons: [BookOpen, Database, Lock]
    }
  ];

  const skills = {
    technical: [
      {
        category: "Programming Languages",
        items: ["Python", "SQL"]
      },
      {
        category: "Frameworks & Libraries",
        items: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"]
      },
      {
        category: "Tools & Platforms",
        items: ["Docker"]
      },
      {
        category: "Databases",
        items: ["MongoDB"]
      }
    ],
    soft: [
      "Quick Learner",
      "Project Support",
      "Analytical Mindset",
      "Attention to Detail",
      "Effective Communication",
      "Problem-Solving Skills",
      "Critical Thinking",
      "Adaptability",
      "Collaboration & Teamwork",
      "Curiosity & Continuous Learning",
      "Time Management",
      "Creativity & Innovation",
      "Presentation Skills",
      "Resilience & Perseverance",
      "Business Acumen",
      "Storytelling with Data",
      "Accountability & Ownership"
    ]
  };

  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "IEEE",
      period: "Feb 2024 - Apr 2024",
      description: "Analyzed problems and collaborated with teams to devise solutions. Gained industry experience and applied learned concepts to real-world situations. Organized files, spreadsheets, and reports while fostering a cohesive work environment."
    },
    {
      title: "AI & Machine Learning Intern",
      company: "Google Developer Student Clubs",
      period: "Oct 2023 - Jan 2024",
      description: "Engaged in professional development to enhance skills and improve employment prospects. Acquired hands-on experience with software programs, boosting technical competencies."
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1E1E32] rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Description</h4>
            <p className="text-gray-300">{project.fullDescription}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Key Features</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1B] via-[#1A1A2E] to-[#0F0F1B] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Tarek M. Abu Ali
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-6"
          >
            <a href="#home" className="hover:text-purple-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors duration-300">Experience</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors duration-300">Skills</a>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold mb-4"
            >
              Junior Data Scientist
              <span className="block text-purple-400">ML Engineer</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 mb-8 text-xl"
            >
              I’m Tarek Magdy, a Data Scientist and Machine Learning Engineer with expertise in AI, data analytics, and predictive modeling. I develop data-driven solutions that enhance decision-making, optimize processes, and drive innovation. Explore my projects and case studies, or connect with me for tailored AI solutions, strategic consulting, and collaboration opportunities.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Mail className="mr-2" size={20} />
                <a href="mailto:tarikkmagdy@gmail.com">tarikkmagdy@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Phone className="mr-2" size={20} />
                <a href="tel:+201033916672">+201033916672</a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="mr-2" size={20} />
                <span>L Salam, Cairo, Egypt</span>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4"
            >
              <motion.a
                href="https://onedrive.live.com/?authkey=%21AMLwNJt7Y9F4z%5F0&id=E236C2E1FD4C15B1%21109&cid=E236C2E1FD4C15B1&parId=root&parQt=sharedby&o=OneUp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors duration-300"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-purple-600 rounded-lg flex items-center space-x-2 hover:bg-purple-600/10 transition-colors duration-300"
              >
                <ExternalLink size={20} />
                <span>View Experience</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-xl relative">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-500/20 absolute"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(157,111,255,0.2) 0%, rgba(96,165,250,0.2) 100%)",
                    "linear-gradient(225deg, rgba(157,111,255,0.2) 0%, rgba(96,165,250,0.2) 100%)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code2 size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E1E32] p-8 rounded-xl transform hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <GraduationCap className="text-purple-400 mr-4" size={32} />
            </motion.div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="ml-12">
            <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
            <p className="text-gray-400">El-Shorouk Academy</p>
            <p className="text-gray-400">Expected 2023 - 2027</p>
            <p className="text-purple-400 mt-2">Majors: AI & Computer Science</p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20">
        <motion.h2 
          {...fadeIn}
          className="text-3xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1E1E32] p-8 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <p className="text-purple-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <motion.h2 
          {...fadeIn}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#1E1E32] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E32] to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className="w-full px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <ExternalLink size={18} />
                  <span>View Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <motion.h2 
          {...fadeIn}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Code2 className="text-purple-400 mr-4" size={28} />
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.technical.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#1E1E32] p-6 rounded-xl"
                >
                  <h4 className="text-lg font-semibold mb-4 text-purple-400">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-600/20 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Brain className="text-purple-400 mr-4" size={28} />
              Soft Skills
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#1E1E32] p-6 rounded-xl"
            >
              <div className="flex flex-wrap gap-4">
                {skills.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 rounded-full"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-[#1E1E32] p-8 rounded-xl hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com/Tarekk05" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-[#2A2A42] rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/tarek-m-abu-ali-33380b343" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-[#2A2A42] rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/share/161ePsW4BY/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-[#2A2A42] rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              <Facebook size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 Tarek M. Abu Ali. All Rights Reserved.</p>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;