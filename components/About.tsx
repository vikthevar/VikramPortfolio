"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            >
              <Card className="glass-effect border-none">
                <CardContent className="p-8">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    I'm Vikram, a Computer Science student at Arizona State
                    University, passionate about building technology that
                    actually makes a difference. I've worked on projects across
                    AI/ML, full stack development, and assistive tech -- from
                    developing AI powered voice assistants that expand
                    accessibility to tools that tackle sustainability
                    challenges.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    I enjoy taking ideas from concept to polished products,
                    focusing on clean design, smooth UI/UX, and real world
                    impact. I’m always learning, experimenting, and looking for
                    ways to grow as a developer while contributing to meaningful
                    projects.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Beyond coding, I’m often giving out buckets on the
                    basketball court, keeping up with fashion, listening to
                    music, or checking out the latest cars. I think staying
                    active and creative outside of tech makes me a stronger
                    developer inside of it.
                  </p>
                </CardContent>
              </Card>
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
                      <h3 className="text-2xl font-bold text-white mb-2">
                        4.0
                      </h3>
                      <p className="text-muted-foreground">GPA at ASU</p>
                    </Card>
                  </AnimatedBorderTrail>
                </div>
                <div className="group">
                  <AnimatedBorderTrail>
                    <Card className="glass-effect border-none text-center p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        2028
                      </h3>
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
  );
};

export default About;
