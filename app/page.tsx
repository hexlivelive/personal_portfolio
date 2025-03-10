import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Code,
  Star,
  GitFork,
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl">
              <Link href="/">Paul Borgen</Link>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#github"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/PaulBorgenResume_2024_v2.pdf"
              target="_blank"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Download Resume
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link
                href="#github"
                target="#"
    
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/paulborgen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button className="hidden md:flex" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button className="hidden md:flex" variant="outline" asChild>
              <Link
                href="/PaulBorgenResume_2024_v2.pdf"
                target="_blank"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section
          id="about"
          className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I'm Paul Borgen
              <span className="block text-primary">Software Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              I build accessible, user-friendly web applications with modern
              technologies. Passionate about creating elegant solutions to
              complex problems.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/headshot.jpg?height=320&width=320"
                alt="Paul Borgen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to
              create robust applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                </div>
                <p className="text-muted-foreground">
                  Building responsive, accessible, and performant user
                  interfaces with modern frameworks and tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                </div>
                <p className="text-muted-foreground">
                  Developing scalable server-side applications and APIs with a
                  focus on performance and security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub Actions</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Jest</Badge>
                  <Badge>Cypress</Badge>
                </div>
                <p className="text-muted-foreground">
                  Implementing automated workflows, testing strategies, and
                  deployment pipelines for efficient development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=192&width=384&text=Project+${project}`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>
                    A{" "}
                    {project === 1
                      ? "web application"
                      : project === 2
                      ? "mobile app"
                      : "full-stack platform"}{" "}
                    built with{" "}
                    {project === 1
                      ? "React and Node.js"
                      : project === 2
                      ? "React Native"
                      : "Next.js and MongoDB"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    {project === 1
                      ? "An e-commerce platform with user authentication, product catalog, and payment processing."
                      : project === 2
                      ? "A cross-platform mobile application for tracking fitness goals and nutrition."
                      : "A content management system with real-time collaboration features."}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="#">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* GitHub Repositories Section */}
        <section id="github" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              GitHub Repositories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open source projects and contributions I've made to the developer
              community.
            </p>
          </div>

          {/* AI Image generation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              key="ai-toolkit"
              className="overflow-hidden flex flex-col flex-1"
            >
              <CardHeader>
                <CardTitle>AI Image generation</CardTitle>
                <CardDescription>
                  This is part of a larger project that I was working on. It is
                  a toolkit for creating and managing AI images. This code here
                  is the code for the image generation. I used a open source
                  project call ai-toolkit to build upon.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  https://github.com/hexlivelive/ai-toolkit
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/hexlivelive/ai-toolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* NFT Marketplace Smart Contracts */}
            <Card
              key="nft-marketplace-thirdweb"
              className="overflow-hidden flex flex-col flex-1"
            >
              <CardHeader>
                <CardTitle>NFT Marketplace Smart Contracts</CardTitle>
                <CardDescription>
                  In this project I created the smart contracts for a NFT
                  marketplace using thirdweb. The thirdweb smart contract had to
                  be heavily modified to fit the needs of the marketplace.
                  Foundry was used to aid in this development. I also have 100%
                  test coverage for the contracts that I wrote.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  https://github.com/mintra-marketplace
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/mintra-marketplace/thirdweb_contracts/blob/main/contracts/prebuilts/marketplace/direct-listings/MintraDirectListings.sol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link
                    href="https://app.mintra.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* https://github.com/pborgen/go-pulse-mev */}
            <Card
              key="go-pulse-mev"
              className="overflow-hidden flex flex-col flex-1"
            >
              <CardHeader>
                <CardTitle>Go Pulse MEV</CardTitle>
                <CardDescription>
                  This is a augmented ethereum geth client that lets you order
                  the transaction with you client wins a block. This is not
                  complete but I was able to create a way to order transactions
                  as you like. I also added a feature that allows you to
                  prioritize transactions based on your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  https://github.com/pborgen/go-pulse-mev
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/pborgen/go-pulse-mev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* https://github.com/pborgen/ethdataanalyze */}
            <Card
              key="py-eth-data-analyze"
              className="overflow-hidden flex flex-col flex-1"
            >
              <CardHeader>
                <CardTitle>Python Ethereum Data Analysis with Dask and Pandas</CardTitle>
                <CardDescription>
                  Project to analyze ethereum data using python, pandas and dask.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                https://github.com/pborgen/ethdataanalyze
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/pborgen/ethdataanalyze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>pborgennc@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <p>linkedin.com/in/paulborgen</p>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <p>github.com/pborgen</p>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-primary" />
                  <p>twitter.com/paulborgen</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Paul Borgen. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/pborgen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/paulborgen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:pborgennc@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
