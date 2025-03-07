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
                src="/headshot2.jpg?height=400&width=400"
                alt="Developer portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Hello, I'm <span className="text-primary">Piotr Kozak</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience building web applications and
              digital solutions. 
              My journey in software development started with a curiosity about how things work on
              the web, and it has evolved into a career focused on creating elegant, efficient, and user-friendly
              applications.
            </p>
            <p className="text-foreground/80 mb-4">
              I specialize in .NET development, with expertise in enterprise systems designed to help manage your workforce and assets.
              I'm constantly learning and adapting to new technologies, and I do it because I like it. 
              I don't limit myself to only the technologies that I'm well familiar with. 
              I believe in choosing the right tool for the job, and I'm happy to adapt to the requirements.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you can find me playing guitar, riding longboards, or
              hiking in the mountains.
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
                period: "2025 - Present",
                role: "Software Engineer",
                company: "Crosslake Technologies",
                location: "Charlotte, North Carolina, USA",
                type: "Contract, Remote",
                descriptions: [
                  "Development of a fully serverless IoT platform based on .NET 9, AWS, Blazor, and MAUI"
                ]
              },
              {
                period: "2021 - 2024",
                role: "Software Developer",
                company: "3t Digital (formerly Neutron VR, 3t Transform)",
                location: "Newcastle-upon-Tyne, UK",
                type: "Contract, Remote",
                descriptions: [
                  "Full-stack development of cloud-based Workforce Management and Workforce Training services using JS/TS, Stencil.js, Node.js, Serverless, AWS",
                  "Full-stack development and maintenance of existing .NET Core applications and microservices",
                  "Participation in the software design process",
                  "Trained a new team by conducting knowledge transfer sessions upon moving to a new project",
                  "Participated in technical design authority meetings"
                ]
              },
              {
                period: "2019 - 2021",
                role: "Junior Software Developer",
                company: "3t Digital (formerly Neutron VR, 3t Transform)",
                location: "Newcastle-upon-Tyne, UK",
                type: "Full-time Employment, Office at first, then Hybrid",
                descriptions: [
                  "Worked on existing web applications for various clients, utilizing mainly .NET Framework, .NET Core, JQuery, Bootstrap, LINQ, and Microsoft SQL Server"
                ]
              },
            ].map((experience, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="mb-1 text-sm text-primary font-medium">{experience.period}</div>
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <div className="text-foreground/70 mb-0">{experience.company}</div>
                <div className="text-foreground/50 font-medium mb-0">{experience.location}</div>
                <div className="text-foreground/40 font-small mb-0">{experience.type}</div>
                {experience.descriptions.length === 1 ? (
                  <p className="text-foreground/80">{experience.descriptions[0]}</p>
                ) : (
                  <ul className="list-disc pl-4 mt-2 space-y-1 text-foreground/80">
                    {experience.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

