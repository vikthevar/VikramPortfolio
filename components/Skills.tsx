'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'C/C++', icon: '⚙️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'SQL', icon: '🗃️' },
        { name: 'HTML/CSS', icon: '🌐' },
        { name: 'Rust', icon: '🦀' },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Flask', icon: '🌶️' },
        { name: 'FastAPI', icon: '⚡' },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', icon: '📝' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Vite', icon: '⚡' },
        { name: 'Vercel', icon: '▲' },
        { name: 'AWS', icon: '☁️' },
        { name: 'MongoDB', icon: '🌱' },
        { name: 'Supabase', icon: '⚡' },
        { name: 'VS Code', icon: '💻' },
      ],
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'scikit-learn', icon: '🤖' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-header">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <Card className="glass-effect border-white/10 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">
                      {category.title}
                    </h3>
                    <div className={`grid gap-3 ${
                      category.title === 'Libraries' ? 'grid-cols-1' : 
                      category.title === 'Frameworks' ? 'grid-cols-1' : 
                      'grid-cols-2'
                    }`}>
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="group flex flex-col items-center p-4 glass-effect rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                        >
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="mb-3"
                          >
                            <span className="text-2xl group-hover:opacity-80 transition-opacity duration-300">
                              {skill.icon}
                            </span>
                          </motion.div>
                          <span className="text-xs font-medium text-center leading-tight group-hover:text-white/90 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills