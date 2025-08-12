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
          
          <div className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS & Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer