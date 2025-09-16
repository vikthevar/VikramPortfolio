"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "VisionAssist Smart Glasses",
      description:
        "Wearable assistive device using Raspberry Pi and Python with ultrasonic sensors and haptic feedback. Achieved 95% obstacle detection accuracy with sub-200ms response time for real-time navigation assistance.",
      image: "/images/vision-assist-glasses.png",
      technologies: [
        "Python",
        "Raspberry Pi",
        "Ultrasonic Sensors",
        "Hardware",
      ],
      github: "https://github.com/vikthevar/VisionAssist",
      live: null,
      period: "Aug 2024 - Dec 2024",
    },
    {
      title: "ReThread Chrome Extension",
      description:
        "2nd place winner at DevLabs hackathon. Chrome extension using Google Gemini Vision for reverse image search, redirecting users from fast fashion to secondhand marketplaces with 85% matching accuracy.",
      image: "/images/rethread-logo.png",
      technologies: ["JavaScript", "Chrome APIs", "Google Gemini Vision"],
      github: "https://github.com/vikthevar/ReThread",
      live: null,
      period: "Mar 2025",
    },
    {
      title: "Heimdall AI Voice Assistant",
      description:
        "AI-powered voice assistant for visually impaired users to navigate computer screens using natural voice commands. Features OCR, computer vision, and secure AWS cloud integration.",
      image: "/images/heimdall-logo.jpg",
      technologies: [
        "Python",
        "Ollama",
        "AWS",
        "OCR",
        "YOLOv8",
        "Whisper",
      ],
      github: "https://github.com/vikthevar/Heimdall",
      live: null,
      period: "Jul 2025 - Aug 2025",
    },
    {
      title: "Vintage Clothing E-commerce Website",
      description:
        "Full-stack e-commerce platform featuring secure payment processing, real-time inventory tracking, and responsive design. Implements RESTful APIs, database optimization, and automated email notifications for seamless user experience.",
      image: "/images/IMG_3321.jpeg",
      technologies: ["React.js", "Supabase", "Stripe", "Vercel"],
      github: null,
      live: "Site Undergoing Maintenance",
      period: "Jun 2025 - Present",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-header">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <AnimatedBorderTrail>
                  <Card className="glass-effect border-none overflow-hidden hover:bg-white/5 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-black flex items-center justify-center">
                        {project.image.startsWith("/images/") ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <span className="text-muted-foreground">
                            Project Image
                          </span>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.github ? (
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>
                            <Github className="mr-2 h-4 w-4" />
                            Private Repo
                          </Button>
                        )}
                        {project.live && 
                         project.live !== "Coming Soon" && 
                         project.live !== "Site Undergoing Maintenance" && (
                          <Button size="sm" asChild>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {(project.live === "Coming Soon" || 
                          project.live === "Site Undergoing Maintenance") && (
                          <Button size="sm" disabled>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {project.live}
                          </Button>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedBorderTrail>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
