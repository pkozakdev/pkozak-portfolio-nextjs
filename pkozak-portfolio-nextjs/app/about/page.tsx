import Image from "next/image"
import { Code, Globe, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="page-content max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Developer portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Hello, I'm <span className="text-primary">John Doe</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience building web applications and
              digital solutions. My journey in software development started with a curiosity about how things work on
              the web, and it has evolved into a career focused on creating elegant, efficient, and user-friendly
              applications.
            </p>
            <p className="text-foreground/80 mb-4">
              I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Next.js, Node.js, and various
              database technologies. I'm constantly learning and adapting to new technologies to ensure I can provide
              the best solutions for modern web development challenges.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">My Approach</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Clean Code",
                description:
                  "I believe in writing clean, maintainable code that follows best practices and design patterns.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                title: "Problem Solving",
                description:
                  "I approach each project as a unique problem to solve, focusing on the best solution for specific needs.",
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "User-Centric",
                description:
                  "I prioritize user experience in everything I build, ensuring applications are intuitive and accessible.",
              },
              {
                icon: <Rocket className="h-8 w-8 text-primary" />,
                title: "Continuous Learning",
                description:
                  "I'm committed to staying updated with the latest technologies and continuously improving my skills.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg flex gap-4">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Professional Journey</h2>

          <div className="space-y-8">
            {[
              {
                period: "2021 - Present",
                role: "Senior Frontend Developer",
                company: "Tech Innovations Inc.",
                description:
                  "Leading frontend development for enterprise applications, implementing modern React architectures, and mentoring junior developers.",
              },
              {
                period: "2018 - 2021",
                role: "Full Stack Developer",
                company: "Digital Solutions Ltd.",
                description:
                  "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL, focusing on performance optimization and scalability.",
              },
              {
                period: "2016 - 2018",
                role: "Web Developer",
                company: "Creative Web Agency",
                description:
                  "Created responsive websites and web applications for various clients, utilizing modern frontend technologies and content management systems.",
              },
            ].map((experience, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="mb-1 text-sm text-primary font-medium">{experience.period}</div>
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <div className="text-foreground/70 mb-2">{experience.company}</div>
                <p className="text-foreground/80">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

