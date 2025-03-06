import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="page-content min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block">Innovative</span>
          <span className="text-primary">Developer Solutions</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Transforming complex ideas into elegant, scalable applications. Specializing in modern web technologies and
          creating exceptional digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/portfolio" className="animated-button group rounded-md">
            View My Work
            <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-foreground/20 rounded-md hover:bg-foreground/10 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="mt-16 md:mt-32 w-full max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-fade-in">
          {[
            {
              title: "Frontend Development",
              description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
              title: "Backend Solutions",
              description: "Building robust APIs and server-side applications with scalability in mind.",
              skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
            },
            {
              title: "DevOps & Cloud",
              description: "Deploying and managing applications with modern cloud infrastructure.",
              skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
            },
          ].map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-medium mb-3">{category.title}</h3>
              <p className="text-foreground/70 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

