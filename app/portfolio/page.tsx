import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Finance Dashboard",
    description: "An interactive dashboard for tracking financial data with visualizations and reporting features.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Express", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Content Management System",
    description: "A custom CMS built for content creators with a focus on ease of use and flexibility.",
    image: "/placeholder.svg",
    tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Listing Platform",
    description: "A platform for real estate listings with search, filtering, and property management features.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health & Fitness Tracker",
    description: "A mobile-first application for tracking health metrics, workouts, and nutrition.",
    image: "/placeholder.svg",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Portfolio() {
  return (
    <div className="page-content">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-foreground/80 mb-12 max-w-2xl">
            Explore a selection of my recent projects showcasing my skills and experience in web development. Each
            project represents unique challenges and solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md card-hover">
                <div className="relative h-48 w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                    priority={index < 2} // Prioritize loading the first two images
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={project.liveUrl}
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

