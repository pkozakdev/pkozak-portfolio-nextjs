import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <div className="page-content max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-foreground/80 mb-10 max-w-2xl">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
        </p>

        {/* Main Content - Single column on mobile, two columns on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Contact details */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
            
            <div className="grid gap-6">
              {/* Email */}
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:contact@piotrkozak.net" className="text-foreground/70 hover:text-primary transition-colors">
                    contact@piotrkozak.net
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-foreground/70">Available upon request</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-foreground/70">Poznań, Poland (Remote)</p>
                </div>
              </div>
              
              {/* Status */}
              <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg text-sm mt-2">
                <p className="text-foreground/80">
                  Currently available for freelance projects and open to full-time positions worldwide.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Professional networks */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Professional Networks</h2>
            
            <div className="grid gap-6">
              {/* GitHub */}
              <a 
                href="https://github.com/pkozakdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <span className="font-medium block">GitHub</span>
                  <span className="text-foreground/70 text-sm">Code repositories and projects</span>
                </div>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/piotr-kozak-189703107/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <span className="font-medium block">LinkedIn</span>
                  <span className="text-foreground/70 text-sm">Professional profile</span>
                </div>
              </a>
              
              {/* Response Time & Availability */}
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-lg">
                <h3 className="font-medium mb-2">How to Reach Me</h3>
                <div className="space-y-3">
                  <p className="text-foreground/80 text-sm">
                    Email is the best way to contact me about new projects or opportunities.
                  </p>
                  <div className="text-foreground/70 text-sm">
                    <p className="mb-1">📅 <span className="font-medium">Working Hours:</span></p>
                    <p>Monday - Friday</p>
                    <p>8:00 AM - 4:00 PM GMT</p>
                    <p className="mt-2 text-foreground/60">I aim to respond to all messages within 24 hours during business days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

