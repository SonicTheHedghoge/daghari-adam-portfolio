import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-stone-900 to-stone-800 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Daghari Adam</h3>
            <p className="text-stone-300 leading-relaxed">
              Full Stack Developer crafting digital experiences that blend innovation with functionality. 
              Based in Djerba, Tunisia – bringing Mediterranean creativity to the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/daghari_adem_/" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-stone-300 hover:text-accent transition-colors">Home</Link>
              <Link to="/projects" className="text-stone-300 hover:text-accent transition-colors">Projects</Link>
              <Link to="/about" className="text-stone-300 hover:text-accent transition-colors">About</Link>
              <Link to="/contact" className="text-stone-300 hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-stone-300">
                <Mail size={16} />
                <span>daghariadem09@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-300">
                <Phone size={16} />
                <span>+216 29 769 006</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-300">
                <MapPin size={16} />
                <span>Djerba, Tunisia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; {currentYear} Daghari Adam. All rights reserved. Crafted with passion in Djerba.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
