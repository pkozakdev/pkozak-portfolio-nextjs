import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="page-content min-h-screen flex flex-col px-4">
      <div className="h-[35vh] md:hidden" /> {/* Reduced top spacing on mobile */}
      <div className="flex-grow md:flex md:flex-col md:justify-center">
        <div className="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            <span className="block">.NET/Serverless</span>
            <span className="text-primary">Full-Stack Developer</span>
          </h1>

          <p className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Transforming complex ideas into elegant, scalable applications. Specializing in modern web technologies and
            creating exceptional digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-8">
            <Link href="/cv-skills" className="animated-button group rounded-md">
              View My Skills
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

        {/* Fixed position for scroll icon and cards */}
        <div className="mt-16 md:mt-32 w-full max-w-5xl mx-auto pb-6">
          <div className="flex flex-col items-center justify-center">
            <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-center mb-12">
              Technical Expertise
            </h2>
            <ChevronDown className="md:hidden h-8 w-8 text-foreground/60 animate-bounce mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 staggered-fade-in">
            {[
              {
                title: "Front-end",
                description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
                skills: ["Angular", "Next.js", "Javascript", "Typescript", "Tailwind CSS", "Jest", "Blazor", "Micro Frontends", "JQuery", "Bootstrap", "CSS", "HTML"],
              },
              {
                title: "Back-end",
                description: "Building robust APIs and server-side applications with scalability in mind.",
                skills: ["C#", ".NET 8/9", ".NET Core", ".NET Framework", "PostgreSQL", "MS SQL Server", "Entity Framework", "LINQ", "REST", "WebAPI", "GraphQL", "gRPC", "CQRS", "MediatR"],
              },
              {
                title: "Cloud",
                description: "Crafting applications with modern cloud infrastructure.",
                skills: ["AWS", "Serverless Framework", "Lambda", "DynamoDB", "S3", "RDS", "EC2", "Cloudformation", "Cloudwatch", "EventBridge", "Step Functions", "SQS", "SNS", "Kinesis"],
              },
            ].map((category, index) => (
              <div key={index} className="bg-card p-4 md:p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{category.title}</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-3 md:mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

