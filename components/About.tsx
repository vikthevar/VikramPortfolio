'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedBorderTrail from '@/components/animata/container/animated-border-trail'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-header">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <AnimatedBorderTrail>
                <Card className="glass-effect border-none">
                  <CardContent className="p-8">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      I'm Vikram Thevar, a Computer Science student at Arizona State University 
                      passionate about building impactful technology solutions. My work spans 
                      AI/ML, full stack development, and assistive technologies, from AI-powered 
                      voice assistants for accessibility to sustainable tech projects.
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      I enjoy taking ideas from concept to production, focusing on clean design, 
                      user experience, and real-world impact. Always eager to learn, I'm committed 
                      to continuous growth and exploring how technology can solve meaningful problems.
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      When I'm not coding, you'll find me exploring music, staying up to date with fashion, 
                      playing basketball, or checking out the latest cars. I believe these interests fuel 
                      my creativity and bring fresh perspectives to my development work.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedBorderTrail>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <AnimatedBorderTrail>
                    <Card className="glass-effect border-none text-center p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">4.0</h3>
                      <p className="text-muted-foreground">GPA at ASU</p>
                    </Card>
                  </AnimatedBorderTrail>
                </div>
                <div className="group">
                  <AnimatedBorderTrail>
                    <Card className="glass-effect border-none text-center p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">2028</h3>
                      <p className="text-muted-foreground">Expected Grad</p>
                    </Card>
                  </AnimatedBorderTrail>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About