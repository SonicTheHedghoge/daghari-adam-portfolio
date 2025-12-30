import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Palette, Server, Zap } from 'lucide-react'

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Digital Alchemist</span>
              <br />
              <span className="text-stone-800">Transforming Ideas into</span>
              <br />
              <span className="text-stone-800">Digital Experiences</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer from Djerba, Tunisia specializing in creating beautiful, 
              functional web applications that bridge the gap between imagination and reality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link 
                to="/projects" 
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              What I Do
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              I specialize in creating comprehensive digital solutions that combine 
              cutting-edge technology with exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Palette size={48} className="text-primary" />,
                title: "Frontend Alchemy",
                description: "Crafting intuitive, responsive interfaces with React, Vue, and modern CSS frameworks that delight users and drive engagement."
              },
              {
                icon: <Server size={48} className="text-primary" />,
                title: "Backend Sorcery",
                description: "Building robust, scalable server architectures with Node.js, Python, and cloud services that power amazing applications."
              },
              {
                icon: <Zap size={48} className="text-primary" />,
                title: "Full Stack Magic",
                description: "Creating seamless end-to-end solutions that integrate beautiful frontends with powerful backends for complete digital experiences."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="tech-stack text-center p-8"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-stone-800">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "25+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Tech Stacks" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold font-playfair">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
