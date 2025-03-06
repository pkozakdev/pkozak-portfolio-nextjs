"use client"

import { useState, useEffect } from "react"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export default function CVSkills() {
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "SQL", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 80 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 60 },
  ]

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 page-content">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">CV & Skills</h1>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Work Experience</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    role: "Senior Frontend Developer",
                    company: "Tech Innovations Inc.",
                    period: "2021 - Present",
                    description:
                      "Leading frontend development for enterprise applications, implementing modern React architectures, and mentoring junior developers.",
                  },
                  {
                    role: "Full Stack Developer",
                    company: "Digital Solutions Ltd.",
                    period: "2018 - 2021",
                    description:
                      "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL, focusing on performance optimization and scalability.",
                  },
                  {
                    role: "Web Developer",
                    company: "Creative Web Agency",
                    period: "2016 - 2018",
                    description:
                      "Created responsive websites and web applications for various clients, utilizing modern frontend technologies and content management systems.",
                  },
                ].map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground/70">{job.company}</span>
                      <span className="text-primary">{job.period}</span>
                    </div>
                    <p className="text-foreground/80">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    degree: "MSc in Computer Science",
                    institution: "University of Technology",
                    period: "2014 - 2016",
                    description:
                      "Specialized in Software Engineering with focus on web technologies and distributed systems.",
                  },
                  {
                    degree: "BSc in Computer Science",
                    institution: "State University",
                    period: "2010 - 2014",
                    description:
                      "Fundamental computer science education with emphasis on programming, algorithms, and data structures.",
                  },
                ].map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground/70">{edu.institution}</span>
                      <span className="text-primary">{edu.period}</span>
                    </div>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Certifications</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "AWS Certified Developer",
                    issuer: "Amazon Web Services",
                    year: "2022",
                  },
                  {
                    name: "Professional Scrum Master I",
                    issuer: "Scrum.org",
                    year: "2021",
                  },
                  {
                    name: "MongoDB Certified Developer",
                    issuer: "MongoDB University",
                    year: "2020",
                  },
                ].map((cert, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium">{cert.name}</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">{cert.issuer}</span>
                      <span className="text-primary">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Languages</h2>

              <div className="space-y-5">
                {[
                  { name: "English", level: 95 },
                  { name: "Spanish", level: 75 },
                  { name: "French", level: 40 },
                ].map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-primary">{language.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: skillsVisible ? `${language.level}%` : "0%",
                          transitionDelay: `${index * 0.1 + 1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Problem Solving",
                  "Team Leadership",
                  "Communication",
                  "Time Management",
                  "Adaptability",
                  "Critical Thinking",
                  "Collaboration",
                  "Creativity",
                ].map((skill, index) => (
                  <div key={index} className="bg-card p-3 rounded-lg text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

