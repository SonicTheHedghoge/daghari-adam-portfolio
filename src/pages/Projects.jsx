import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Palette, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Nexus Commerce",
      description: "A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Built with MERN stack and Stripe integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      github: "#",
      live: "#",
      category: "Full Stack",
      featured: true
    },
    {
      title: "MediTrack Pro",
      description: "Healthcare management system for clinics with patient records, appointment scheduling, and telemedicine features. HIPAA compliant with advanced security.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Redis"],
      github: "#",
      live: "#",
      category: "Enterprise",
      featured: true
    },
    {
      title: "ArtFlow Studio",
      description: "Digital art collaboration platform with real-time canvas, version control, and export capabilities. Supports multiple artists working simultaneously.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Canvas API", "AWS S3", "WebRTC"],
      github: "#",
      live: "#",
      category: "Real-time"
    },
    {
      title: "FinAnalytica",
      description: "Financial dashboard with predictive analytics, investment tracking, and AI-powered insights. Real-time market data integration and portfolio management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["TypeScript", "Next.js", "Python", "ML", "Chart.js"],
      github: "#",
      live: "#",
      category: "Data Visualization"
    },
    {
      title: "EduVerse Learning",
      description: "Interactive learning platform with video courses, quizzes, progress tracking, and AI tutoring. Multi-language support and mobile optimization.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Video.js", "AI Chat", "Payment"],
      github: "#",
      live: "#",
      category: "Education"
    },
    {
      title: "TaskFlow Manager",
      description: "Project management tool with Kanban boards, time tracking, team collaboration, and automated reporting. Integrates with popular productivity tools.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["Angular", "NestJS", "MySQL", "WebSocket", "OAuth"],
      github: "#",
      live: "#",
      category: "Productivity"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
              My Digital Creations
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Each project represents a unique challenge solved with innovative thinking, 
              technical expertise, and attention to detail.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-semibold">{project.category}</span>
                    <div className="flex space-x-2">
                      <a href={project.github} className="p-1 text-stone-400 hover:text-primary">
                        <Github size={18} />
                      </a>
                      <a href={project.live} className="p-1 text-stone-400 hover:text-primary">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-stone-800 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
