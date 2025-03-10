import { Badge } from "@/components/ui/badge";

interface WorkExperienceProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const WorkExperience = ({
  title,
  company,
  duration,
  location,
  description,
  achievements,
  skills,
}: WorkExperienceProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="text-lg text-muted-foreground">{company}</div>
      <div className="flex gap-2 text-sm text-muted-foreground mb-2">
        <span>{duration}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      <p className="mb-4">{description}</p>
      {achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export const WorkExperienceSection = () => {
  const experiences = [
    {
      title: "Co-Founder / CTO",
      company: "Mintra",
      duration: "Jul 2021 - Present",
      location: "Remote",
      description:
        "Leading a distributed team developing the leading NFT marketplace on Pulsechain.com. Built sophisticated backend architecture, smart contracts, and seamless user experience design.",
      achievements: [
        "Created and implemented initial software architecture, design, and smart contracts",
        "Led smart contract audits ensuring security, using Foundry and Hardhat with comprehensive unit tests",
        "Architected data pipeline processing millions of NFTs and thousands of collections",
        "Developed distributed locking workflow for deterministic blockchain data processing",
      ],
      skills: [
        "Smart Contracts",
        "Blockchain",
        "TypeScript",
        "Solidity",
        "Solidity Audits",
        "Web3",
        "React.js",
        "GoLang",
        "Docker",
        "Big Data",
        "PostgreSQL",
        "Redis", 
        "CI/CD"
        
      ],
    },
    {
      title: "Software Engineering Consultant",
      company: "Precision Point Systems",
      duration: "Feb 2020 - Jul 2021",
      location: "United States · Remote",
      description:
        "Led development of advanced computer vision system for precise football tracking, utilizing high-resolution cameras and custom AI models.",
      achievements: [
        "Stabilized system for live game deployment at UCONN football games",
        "Achieved sub-inch accuracy in ball position tracking",
        "Developed custom AI model for real-time object detection",
      ],
      skills: [
        "Computer Vision",
        "C",
        "C++",
        "GoLang",
        "Machine Learning",
        "DarkNet Neural Network",
        "DarkMark image labeling",
        "OpenCV",
        "AI",
      ],
    },
    {
      title: "Advanced Software Engineer",
      company: "Honeywell",
      duration: "Jun 2016 - Feb 2020",
      location: "Remote",
      description:
        "Led development of metering infrastructure interfaces and security implementations.",
      achievements: [
        "Modernized backend applications with Spring and Hibernate",
        "Implemented ESAPI security enhancements across business suite",
        "Led security review implementations and penetration testing responses",
        "Created CI/CD pipeline with Jenkins",
        "Migrated codebase from SVN to Git",
      ],
      skills: [
        "Java",
        "Spring",
        "Hibernate",
        "DevOps",
        "Security",
        "CI/CD",
        "AWS",
        "Microservices",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <WorkExperience key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
