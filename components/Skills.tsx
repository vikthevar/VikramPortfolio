'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedBorderTrail from '@/components/animata/container/animated-border-trail'
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiGit, 
  SiDocker, 
  SiVercel, 
  SiMongodb, 
  SiSupabase, 
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFlask,
  SiFastapi,
  SiVite,
  SiHtml5,
  SiRust,
  SiCplusplus
} from 'react-icons/si'
import { FaJava, FaDatabase, FaAws, FaCode } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: '#f89820' },
        { name: 'Python', icon: SiPython, color: '#3776ab' },
        { name: 'C/C++', icon: SiCplusplus, color: '#00599c' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'SQL', icon: FaDatabase, color: '#4479a1' },
        { name: 'HTML/CSS', icon: SiHtml5, color: '#e34f26' },
        { name: 'Rust', icon: SiRust, color: '#ce422b' },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: SiReact, color: '#61dafb' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'Flask', icon: SiFlask, color: '#ffffff' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', icon: SiGit, color: '#f05032' },
        { name: 'Docker', icon: SiDocker, color: '#2496ed' },
        { name: 'Vite', icon: SiVite, color: '#646cff' },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
        { name: 'AWS', icon: FaAws, color: '#ff9900' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
        { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
        { name: 'VS Code', icon: FaCode, color: '#007acc' },
      ],
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, color: '#013243' },
        { name: 'scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <Card className="glass-effect border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">
                      {category.title}
                    </h3>
                    <div className={`grid gap-2 sm:gap-3 ${
                      category.title === 'Libraries' ? 'grid-cols-1' : 
                      category.title === 'Frameworks' ? 'grid-cols-1' : 
                      'grid-cols-2'
                    }`}>
                        {category.skills.map((skill, skillIndex) => {
                          const IconComponent = skill.icon
                          return (
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
                              className="flex flex-col items-center p-3 sm:p-4 glass-effect rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                            >
                              <motion.div
                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.5 }}
                                className="mb-2 sm:mb-3"
                              >
                                {IconComponent ? (
                                  <IconComponent 
                                    className="text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110" 
                                    style={{ color: skill.color }}
                                  />
                                ) : (
                                  <div 
                                    className="text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110 w-6 h-6 bg-white/20 rounded flex items-center justify-center"
                                    style={{ color: skill.color }}
                                  >
                                    {skill.name.charAt(0)}
                                  </div>
                                )}
                              </motion.div>
                              <span className="text-xs font-medium text-center leading-tight group-hover:text-white/90 transition-colors duration-300">
                                {skill.name}
                              </span>
                            </motion.div>
                          )
                        })}
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