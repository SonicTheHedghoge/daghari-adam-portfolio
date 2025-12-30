import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Award, BookOpen } from 'lucide-react'

const About = () => {
  const skills = [
    { category: "Frontend", technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Express", "Django", "FastAPI"] },
    { category: "Database", technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "DevOps", technologies: ["Docker", "AWS", "CI/CD", "Nginx", "Linux"] },
    { category: "Tools", technologies: ["Git", "Figma", "Postman", "Jest", "Webpack"] }
  ]

  const timeline = [
    { year: "2022", event: "Started freelance development career", icon: <Calendar /> },
    { year: "2021", event: "Completed advanced full-stack certifications", icon: <Award /> },
    { year: "2020", event: "First commercial project delivery", icon: <BookOpen /> },
    { year: "2019", event: "Began self-taught coding journey", icon: <MapPin /> }
  ]

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
              About Me
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              From the beautiful island of Djerba to the digital landscape, 
              I bridge cultures through code and creativity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6 text-stone-800">
                The Digital Alchemist Philosophy
              </h2>
              
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Born and raised in Djerba, Tunisia, I've always been fascinated by the intersection 
                  of traditional craftsmanship and modern innovation. This unique perspective shapes 
                  my approach to development: every line of code is crafted with the precision of an artisan.
                </p>
                
                <p>
                  My journey into tech started with curiosity about how digital experiences are built. 
                  What began as experimenting with HTML and CSS evolved into a passion for creating 
                  comprehensive solutions that solve real-world problems.
                </p>
                
                <p>
                  I believe in the power of technology to transform ideas into impactful digital 
                  experiences. Whether it's a simple website or a complex enterprise application, 
                  I approach each project with the same level of dedication and attention to detail.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-4">My Journey</h3>
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-800">{item.year}</div>
                      <div className="text-stone-600">{item.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6 text-stone-800">
                Technical Arsenal
              </h2>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="tech-stack"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-stone-800">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Djerba Inspiration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary to-accent rounded-2xl text-white"
              >
                <h3 className="text-xl font-semibold mb-2">Djerba Inspired</h3>
                <p className="opacity-90">
                  The rich cultural heritage and artistic traditions of Djerba inspire my work. 
                  Just as local artisans blend ancient techniques with modern designs, 
                  I merge proven methodologies with innovative technologies.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
