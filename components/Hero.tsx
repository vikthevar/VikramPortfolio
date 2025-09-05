'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 uppercase leading-tight">
              <span className="gradient-text">VIKRAM THEVAR</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Computer Science Student & Full Stack Developer building impactful technology solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <Button variant="outline" size="lg" onClick={scrollToProjects} className="w-full sm:w-auto">
              View My Work
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <a href="/Vikram_Thevar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/vikthevar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-white/10 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vikramthevar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-white/10 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vikthevar@gmail.com"
              className="p-3 rounded-full glass-effect hover:bg-white/10 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full glass-effect hover:bg-white/10 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}

export default Hero