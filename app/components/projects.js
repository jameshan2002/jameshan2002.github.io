// components/ProjectsSection.js
import Image from "next/image";

const projectsData = [
  {
    title: "Imbalanced Data Classification with LLM",
    image: "/photo/project-imbalanced.jpeg",
    description:
      " Researched imbalanced data classification using PyTorch and Large Language Models using Google's T5-small model, advised by Dr. Latifur Khan.",
    technologies: ["Python", "Pytorch", "Hugging Face"],
    link: "https://github.com/notjameshan/imbalanced-LLM",
  },
  {
    title: "FindResume.xyz",
    image: "/photo/project-resume.png",
    description:
      "Launched a resume-sharing and discovery platform, attracting over 100+ daily visitors to create their dream resumes.",
    technologies: [
      "Next.js",
      "Typescript",
      "AWS",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Heroku",
    ],
    link: "https://FindResume.xyz",
  },
  {
    title: "studywme.com",
    image: "/photo/project-studywme.png",
    description:
      "Aggregated 100+ YouTube “study-with-me” live streams every hour used by 50+ daily visitors through YouTube Rest API.",
    technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "Vercel"],
    link: "https://studywme.com",
  },
  {
    title: "Reinforcement Learning for Traffic Light Control",
    image: "/photo/project-traffic.png",
    description:
      "Researched reinforcement learning for traffic optimization on arbitrary road maps and patterns, advised by Dr. Yongwan Chun.",
    technologies: ["Python", "SUMO (Simulation of Urban MObility)"],
    link: "https://github.com/ACM-Research/reinforcement-learning-traffic-control",
  },
];

export default function ProjectsSection() {
  return (
    <div className="container mx-auto md:px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Research / Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                className="object-cover w-full h-full object-top"
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
