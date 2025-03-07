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
    { name: "C#", level: 90 },
    { name: ".NET 8/9", level: 85 },
    { name: "MS SQL Server", level: 88 },
    { name: "PostgreSQL", level: 88 },
    { name: "Entity Framework", level: 88 },
    { name: "DynamoDB", level: 70 },
    { name: "AWS", level: 70 },
    { name: "Serverless", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "Blazor", level: 60 },
    { name: "Angular", level: 50 },
    { name: "NextJS", level: 40 },
    { name: "MAUI", level: 40 },
    { name: "REST API", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "CQRS/MediatR", level: 90 },
    { name: "Microservices", level: 80 },
    { name: "Git", level: 90 },
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
                    degree: "IT Project Management",
                    institution: "Poznan University of Economics and Business",
                    period: "2022 - 2023",
                    description:
                      "Postgraduate studies focused on project management methodologies, tools, and best practices. Obtained PRINCE2 Foundation and AgilePM Foundation as part of the course.",
                  },
                  {
                    degree: "MSc Computing and IT with Advance Practice",
                    institution: "Northumbria University",
                    period: "2010 - 2014",
                    description:
                      "Master's degree in Computing and IT with a focus on software development, databases, and web technologies.",
                  },
                  {
                    degree: "Computer Science & Engineering",
                    institution: "Politecnico di Milano",
                    period: "2018-2019",
                    description:
                      "Erasmus+ exchange program focused on software engineering, recommender systems, middleware for distributed systems, game development, mobile development, game theory, and data science.",
                  },
                  {
                    degree: "BSc Biomedical Science",
                    institution: "University of Sunderland",
                    period: "2015-2017",
                    description:
                      "Bachelor's degree in Biomedical Science with a focus on human anatomy, physiology, biochemistry, and microbiology.",
                  },
                  {
                    degree: "BSc Medical Bioscience",
                    institution: "London Metropolitan University",
                    period: "2014-2015",
                    description:
                      "Finished first year and transferred to University of Sunderland to complete the degree on an IBMS accredited program.",
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
                    name: "AgilePM Foundation",
                    issuer: "APMG International",
                    year: "2023",
                  },
                  {
                    name: "Swift Level 1",
                    issuer: "Cambridge Certification Authority",
                    year: "2019",
                  },
                  {
                    name: "TOEFL iBT",
                    issuer: "ETS EMEA",
                    year: "2014",
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
                  { name: "Polish", level: 100 },
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
                  "Teamwork",
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

