'use client'

import { motion } from 'framer-motion'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Vikram Thevar</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
            <a 
              href="https://github.com/vikthevar/VikramPortfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              View Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer