'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedBorderTrail from '@/components/animata/container/animated-border-trail'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })



  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-header">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group"
              >
                <AnimatedBorderTrail>
                  <Card className="glass-effect border-none">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          Expected 2028
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <span className="font-medium">Arizona State University</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          Arizona, USA
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Currently pursuing a Bachelor's degree in Computer Science with a focus on 
                        AI/ML, software engineering, and assistive technologies. Maintaining a 4.0 GPA 
                        while actively working on projects that combine technical excellence with 
                        real-world impact.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedBorderTrail>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience