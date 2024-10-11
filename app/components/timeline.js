// components/WorkTimeline.js
import Image from "next/image";

const timelineData = [
  {
    year: "2024 - Current",
    company: "Learning...",
    logo: "/photo/logo-popcat.jpeg",
    description:
      "Learning about Deep Learning and NLP through Andrew Ng's Deep Learning course and Andrej Kapathy's course.",
  },
  {
    year: "2024 Sep - Current",
    company: "Univeristy of Texas at Dallas",
    logo: "/photo/logo-dallas.jpeg",
    description:
      "Just been part of Graduate Research Assistant for Dr. Latifur Khan, working on LLM Fairness Research.",
  },
  {
    year: "2024 Aug - Current",
    company: "Univeristy of Texas at Dallas",
    logo: "/photo/logo-dallas.jpeg",
    description:
      "Studying Masters in Computer Science, focusing on Intelligent Systems (AI, ML, NLP).",
  },
  {
    year: "2024 June - 2024 Sep",
    company: "Amazon",
    logo: "/photo/logo-amazon.jpeg",
    description:
      "Went back for Software Development Intern at Amazon, worked with Kindle Team.",
  },
  {
    year: "2020 - 2024",
    company: "Univeristy of Texas at Dallas",
    logo: "/photo/logo-dallas.jpeg",
    description:
      "Graduated B.Sc. for Computer Science, where I Researched under Prof. Latifur Khan as an Undergraduate, working on Imbalanced Data Classification with LLM.",
  },
  {
    year: "2023 Aug - 2024 May",
    company: "Samsung Research America",
    logo: "/photo/logo-samsung.jpeg",
    description:
      "Came back to Samsung as SWE Intern to continue to work on NEON, an Aritficial Human Assistant. My work with the team got featured in Huge News Stations. Also helped prototyping new non-released projects. ",
  },
  {
    year: "2023 May - Aug",
    company: "Amazon",
    logo: "/photo/logo-amazon.jpeg",
    description:
      "Went to Amazon for Software Development Internship and worked with Recruiting Engine Team.",
  },
  {
    year: "2022 May - 2023 May",
    company: "Samsung Research America",
    logo: "/photo/logo-samsung.jpeg",
    description:
      "Software Engineer Intenrnshp at Team NEON, working on Aritficial Human Assistant. Prototyped and created packages and full stack applications for NEON system. ",
  },
  {
    year: "2022 Jan - 2022 May",
    company: "ACM UT Dallas",
    logo: "/photo/logo-acmutd.jpeg",
    description:
      "Worked as Undergraduate Researcher, researching Reinforcement Learning for Traffic Light Control under Dr. Yongwan Chun.",
  },
];

export default function WorkTimeline() {
  return (
    <div className="container mx-auto md:p-4 pt-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Timeline</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="mb-12 flex">
            <div className="flex flex-col items-center mr-8">
              <div className="w-16 h-16 flex items-center justify-center z-10">
                <Image
                  src={item.logo}
                  className="rounded-md object-cover"
                  alt={`${item.company} logo`}
                  width={400}
                  height={400}
                />
              </div>

              <div className="w-px h-full bg-gray-200 -mt-2"></div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-1">{item.company}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.year}</p>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
