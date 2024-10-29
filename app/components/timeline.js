// components/WorkTimeline.js
import Image from "next/image";

// Create a FormattedText component
const FormattedText = ({ type, children }) => {
  switch (type) {
    case "bold-underline":
      return <span className="font-bold underline">{children}</span>;
    case "bold":
      return <span className="font-bold">{children}</span>;
    case "underline":
      return <span className="underline">{children}</span>;
    default:
      return <span>{children}</span>;
  }
};

const timelineData = [
  {
    year: "2024 - Current",
    company: "Learning...",
    logo: "/photo/logo-popcat.jpeg",
    description: (
      <>
        Learning about Deep Learning and NLP through Andrew Ng's Deep Learning
        course and{" "}
        <a
          href="https://www.youtube.com/@AndrejKarpathy"
          className="text-blue-600 hover:underline"
        >
          Andrej Karpathy
        </a>
        's course.
      </>
    ),
  },
  {
    year: "2024 Sep - Current",
    company: "Univeristy of Texas at Dallas",
    logo: "/photo/logo-dallas.jpeg",
    description: (
      <>
        M.Sc. at Unversity of Texas at Dallas, majoring Computer Science,
        focusing on Intelligent Systems (AI, ML, NLP) and part of{" "}
        <FormattedText type="bold">Graduate Research Assistant</FormattedText>{" "}
        for Dr. Latifur Khan, working on LLM Fairness Research.
      </>
    ),
  },
  {
    year: "2024 June - 2024 Sep",
    company: "Amazon",
    logo: "/photo/logo-amazon.jpeg",
    description: (
      <>Software Development Intern at Amazon, worked with Kindle Team.</>
    ),
  },
  {
    year: "2020 - 2024",
    company: "Univeristy of Texas at Dallas",
    logo: "/photo/logo-dallas.jpeg",
    description: (
      <>
        B.Sc. at Unversity of Texas at Dallas majoring Computer Science, where I
        was an{" "}
        <FormattedText type="bold">Undergraduate Researcher</FormattedText>{" "}
        under Prof. Latifur Khan as an , working on Imbalanced Data
        Classification with LLM.
      </>
    ),
  },
  {
    year: "2023 Aug - 2024 May",
    company: "Samsung Research America",
    logo: "/photo/logo-samsung.jpeg",
    description: (
      <>
        Software Engineering Intern at Samsung and work on{" "}
        <FormattedText type="bold">NEON</FormattedText>, an Aritficial Human
        Assistant. My work with the team got featured in Huge News Stations.
        Also helped prototyping new non-released projects.
      </>
    ),
  },
  {
    year: "2023 May - Aug",
    company: "Amazon",
    logo: "/photo/logo-amazon.jpeg",
    description: (
      <>
        Software Development Intern at Amazon and worked with{" "}
        <FormattedText type="bold">Recruiting Engine Team</FormattedText>.
      </>
    ),
  },
  {
    year: "2022 May - 2023 May",
    company: "Samsung Research America",
    logo: "/photo/logo-samsung.jpeg",
    description: (
      <>
        Software Engineering Intern at Samsung, working with Team NEON,{" "}
        <FormattedText type="bold">Artificial Human Assistant</FormattedText>.
        Prototyped and created packages and full stack applications for NEON
        system.
      </>
    ),
  },
  {
    year: "2022 Jan - 2022 May",
    company: "ACM UT Dallas",
    logo: "/photo/logo-acmutd.jpeg",
    description: (
      <>
        Worked as{" "}
        <FormattedText type="bold">Undergraduate Researcher</FormattedText> at
        ACM Research in UT Dallas, researching Reinforcement Learning for
        Traffic Light Control under Dr. Yongwan Chun.
      </>
    ),
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
              {/* <h3 className="text-xl font-semibold mb-1">{item.company}</h3> */}
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
